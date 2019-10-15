import { Component, OnInit } from '@angular/core';

const code = `
this.workerOne = new Worker('./worker-one.worker', { type: 'module' });
this.workerTwo = new Worker('./worker-two.worker', { type: 'module' });

const messageChannel = new MessageChannel();

this.workerOne.postMessage({ names: ['worker two'] }, [
    messageChannel.port1,
]);
this.workerTwo.postMessage({ names: ['worker one'] }, [
    messageChannel.port2,
]);
`;

@Component({
    selector: 'worker-platform-message-passing',
    templateUrl: './message-passing.component.html',
    styleUrls: ['./message-passing.component.scss'],
})
export class MessagePassingComponent implements OnInit {
    constructor() {}

    codeSample = code;

    transferables = [
        'ArrayBuffer',
        'MessagePort',
        'ImageBitmap',
        'OffscreenCanvas',
    ];

    ngOnInit() {}
}
