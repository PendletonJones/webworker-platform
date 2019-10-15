/// <reference lib="webworker" />
import { Injector } from '@angular/core';

addEventListener('message', ({ data }) => {
    const response = `worker response to ${data}`;
    postMessage(response);
});

// Simple Injector Example
console.log('Simple Injector Example');
class MandrillService {}
class SendGridService {}

const injector = Injector.create([
    { provide: MandrillService, deps: [] },
    { provide: SendGridService, deps: [] },
]);
const emailService = injector.get(MandrillService);
console.log(emailService);
