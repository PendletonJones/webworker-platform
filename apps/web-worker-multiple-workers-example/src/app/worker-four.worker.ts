import Dexie from 'dexie';

export class MyAppDatabase extends Dexie {
    contacts: Dexie.Table<IContact, number>;
    emails: Dexie.Table<IEmailAddress, number>;
    phones: Dexie.Table<IPhoneNumber, number>;

    constructor() {
        super('MyAppDatabase');

        //
        // Define tables and indexes
        // (Here's where the implicit table props are dynamically created)
        //
        this.version(1).stores({
            contacts: '++id, first, last',
            emails: '++id, contactId, type, email',
            phones: '++id, contactId, type, phone',
        });

        // The following lines are needed for it to work across typescipt using babel-preset-typescript:
        this.contacts = this.table('contacts');
        this.emails = this.table('emails');
        this.phones = this.table('phones');
    }
}

// By defining the interface of table records,
// you get better type safety and code completion
export interface IContact {
    id?: number; // Primary key. Optional (autoincremented)
    first: string; // First name
    last: string; // Last name
}

export interface IEmailAddress {
    id?: number;
    contactId: number; // "Foreign key" to an IContact
    type: string; // Type of email such as "work", "home" etc...
    email: string; // The email address
}

export interface IPhoneNumber {
    id?: number;
    contactId: number;
    type: string;
    phone: string;
}

const db = new MyAppDatabase();

/* This is a 'physical' class that is mapped to
 * the contacts table. We can have methods on it that
 * we could call on retrieved database objects.
 */
export class Contact implements IContact {
    id: number;
    first: string;
    last: string;
    emails: IEmailAddress[];
    phones: IPhoneNumber[];

    constructor(first: string, last: string, id?: number) {
        this.first = first;
        this.last = last;
        if (id) this.id = id;
    }

    loadEmailsAndPhones() {
        return Promise.all([
            db.emails
                .where('contactId')
                .equals(this.id)
                .toArray((emails) => (this.emails = emails)),
            db.phones
                .where('contactId')
                .equals(this.id)
                .toArray((phones) => (this.phones = phones)),
        ]).then((x) => this);
    }

    save() {
        return db.transaction('rw', db.contacts, db.emails, db.phones, () => {
            return Promise.all([
                // Save existing arrays
                Promise.all(this.emails.map((email) => db.emails.put(email))),
                Promise.all(this.phones.map((phone) => db.phones.put(phone))),
            ]).then((results) => {
                // Remove items from DB that is was not saved here:
                var emailIds = results[0], // array of resulting primary keys
                    phoneIds = results[1]; // array of resulting primary keys

                db.emails
                    .where('contactId')
                    .equals(this.id)
                    .and((email) => emailIds.indexOf(email.id) === -1)
                    .delete();

                db.phones
                    .where('contactId')
                    .equals(this.id)
                    .and((phone) => phoneIds.indexOf(phone.id) === -1)
                    .delete();

                // At last, save our own properties.
                // (Must not do put(this) because we would get
                // reduntant emails/phones arrays saved into db)
                db.contacts
                    .put(new Contact(this.first, this.last, this.id))
                    .then((id) => (this.id = id));
            });
        });
    }
}

async function testDatabase() {
    const contact = new Contact('Pendleton', 'Jones', 123);
    await contact.loadEmailsAndPhones();
    await contact.save();
    const thing = await db.contacts.where('id').equals(123);
    const results = await thing.toArray();
    console.log(results);
}

testDatabase().then(() => {
    console.log('done');
});
