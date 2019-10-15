import { Component, OnInit } from '@angular/core';
import { of, interval, merge, Observable, combineLatest } from 'rxjs';
import { mapTo, map, scan, take } from 'rxjs/operators';

interface IClassItem {
    size: string;
    content: string;
    color: string;
}

const code = `
// create a worker
this.workerOne = new Worker('./worker-one.worker', { type: 'module' });
// receive a message
this.workerOne.onMessage((message) => console.log(message));
// send a message
this.workerOne.postMessage({ hello: 'world' });
`;

@Component({
    selector: 'worker-platform-parallel-execution',
    templateUrl: './parallel-execution.component.html',
    styleUrls: ['./parallel-execution.component.scss'],
})
export class ParallelExecutionComponent implements OnInit {
    taskA = interval(200).pipe(
        mapTo({
            color: '#9bf2b3',
            size: '2em',
            content: 'A',
        }),
        take(10),
    );
    taskB = interval(300).pipe(
        mapTo({
            color: '#367beb',
            size: '4em',
            content: 'B',
        }),
        take(10),
    );

    combinedTask = merge(this.taskA, this.taskB).pipe(
        scan((acc: IClassItem[], val: IClassItem) => [...acc, val], []),
        take(20),
    );

    separateTaskA = this.taskA.pipe(
        scan((acc: IClassItem[], val: IClassItem) => [...acc, val], []),
        take(20),
    );

    separateTaskB = this.taskB.pipe(
        scan((acc: IClassItem[], val: IClassItem) => [...acc, val], []),
        take(20),
    );

    constructor() {}

    codeSample = code;

    ngOnInit() {}
}
