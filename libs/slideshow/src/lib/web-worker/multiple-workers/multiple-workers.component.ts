import { Component, OnInit } from '@angular/core';
import { of, interval, merge, Observable, combineLatest } from 'rxjs';
import { mapTo, map, scan, take } from 'rxjs/operators';

const code = `
this.workerOne = new Worker('./worker-one.worker', { type: 'module' });
this.workerTwo = new Worker('./worker-two.worker', { type: 'module' });
`;

interface IClassItem {
    size: string;
    content: string;
    color: string;
}

@Component({
    selector: 'worker-platform-multiple-workers',
    templateUrl: './multiple-workers.component.html',
    styleUrls: ['./multiple-workers.component.scss'],
})
export class MultipleWorkersComponent implements OnInit {
    codeSample = code;

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

    taskC = interval(500).pipe(
        mapTo({
            color: '#eba636',
            size: '6em',
            content: 'C',
        }),
        take(5),
    );

    separateTaskA = this.taskA.pipe(
        scan((acc: IClassItem[], val: IClassItem) => [...acc, val], []),
        take(15),
    );

    separateTaskB = this.taskB.pipe(
        scan((acc: IClassItem[], val: IClassItem) => [...acc, val], []),
        take(15),
    );

    separateTaskC = this.taskC.pipe(
        scan((acc: IClassItem[], val: IClassItem) => [...acc, val], []),
        take(15),
    );

    combinedTask = merge(this.taskA, this.taskB, this.taskC).pipe(
        scan((acc: IClassItem[], val: IClassItem) => [...acc, val], []),
        take(20),
    );

    constructor() {}

    ngOnInit() {}
}
