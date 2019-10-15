import { Injectable, ReflectiveInjector } from '@angular/core';
import { StoreModule, Store, select } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { increment, decrement, reset } from './counter.actions';

const store = StoreModule.forRoot({ count: counterReducer });

console.log('store', store);

@Injectable()
class MandrillService {}

@Injectable()
class SendGridService {}

@Injectable()
class GenericEmailService {}

const injector = ReflectiveInjector.resolveAndCreate([
    ...store.providers,
    {
        provide: GenericEmailService,
        useClass: GenericEmailService,
    },
    {
        provide: MandrillService,
        useExisting: GenericEmailService,
    },
    {
        provide: SendGridService,
        useExisting: GenericEmailService,
    },
]);

const rxStore = injector.get(Store);

const counter = rxStore.pipe(select('count'));

counter.subscribe((count) => {
    console.log('count', count);
});

console.log('decrement', decrement());

rxStore.dispatch(increment());
rxStore.dispatch(increment());
rxStore.dispatch(increment());
rxStore.dispatch(increment());
rxStore.dispatch(decrement());
rxStore.dispatch(reset());
rxStore.dispatch(decrement());

console.log('Store', rxStore);

const emailService1 = injector.get(SendGridService);

console.log(emailService1); // GenericEmailService {}
const emailService2 = injector.get(MandrillService);

console.log(emailService2); // GenericEmailService {}
const emailService3 = injector.get(GenericEmailService);

console.log(emailService3); // GenericEmailService {}
console.log(emailService1 === emailService2 && emailService2 === emailService3);
// true (5)
