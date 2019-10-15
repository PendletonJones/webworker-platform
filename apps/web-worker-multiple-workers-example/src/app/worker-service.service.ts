import { Injectable } from '@angular/core';

const mainThreadLogger = (message: string, ...rest: any[]) => {
    console.log(
        `%c ${message} :`,
        'background: #92ffc6; color: #1C1836; font-size: 20px;',
        ...rest,
    );
};

@Injectable({
    providedIn: 'root',
})
export class WorkerServiceService {
    workerOne: Worker;
    workerTwo: Worker;
    workerThree: Worker;
    workerFour: Worker;

    constructor() {
        mainThreadLogger('constructoring service');
        this.workerOne = new Worker('./worker-one.worker', { type: 'module' });
        this.workerTwo = new Worker('./worker-two.worker', { type: 'module' });
        this.workerThree = new Worker('./worker-three.worker', { type: 'module' });
        this.workerFour = new Worker('./worker-four.worker', { type: 'module' });

        this.workerOne.onmessage = (event) => {
            mainThreadLogger('message from worker one', event);
        };
        this.workerTwo.onmessage = (event) => {
            mainThreadLogger('message from worker two', event);
        };

        const messageChannel = new MessageChannel();
        this.workerOne.postMessage({ names: ['worker two'] }, [
            messageChannel.port1,
        ]);
        this.workerTwo.postMessage({ names: ['worker one'] }, [
            messageChannel.port2,
        ]);

        this.workerOne.postMessage('hello world from main to worker one');
        this.workerTwo.postMessage('hello world from main to worker two');
    }
}
