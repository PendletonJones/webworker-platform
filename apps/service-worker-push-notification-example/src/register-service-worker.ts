import { Observable, Subject, ReplaySubject } from 'rxjs';

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

export function createServiceWorker() {
    const serviceWorkerRegistrationSubject = new ReplaySubject();

    setTimeout(async () => {
        navigator.serviceWorker.getRegistrations().then((result) => {
            console.log('registrations', result);
            serviceWorkerRegistrationSubject.next({
                event: 'registrations',
                result,
            });
        });

        navigator.serviceWorker.register('/service-worker.js', { scope: '/' });

        const registration = await navigator.serviceWorker.ready;
        console.log('ready');
        serviceWorkerRegistrationSubject.next({ event: 'ready', registration });

        const subscription = await getSubscription(registration);
        console.log('subscription', subscription);
        serviceWorkerRegistrationSubject.next({
            event: 'subscribed',
            subscription,
        });

        const registrationResults = await fetch(
            'http://localhost:3333/register',
            {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    subscription: subscription.subscription,
                }),
            },
        );
        serviceWorkerRegistrationSubject.next(await registrationResults.text());
    });

    return serviceWorkerRegistrationSubject;
}

async function getSubscription(registration) {
    const subscription = await registration.pushManager.getSubscription();

    if (subscription) {
        console.log(subscription);
        return subscription;
    }

    const response = await fetch('http://localhost:3333/vapidPublicKey');
    const vapidPublicKey = await response.text();

    const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

    const registeredSubscription = registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey,
    });
    console.log(registeredSubscription);

    return registeredSubscription;
}
