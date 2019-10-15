/// <reference lib="webworker" />

import {
    Observable,
    BehaviorSubject,
    of,
    Subject,
    ReplaySubject,
    zip,
} from 'rxjs';
import {
    filter,
    map,
    scan,
    tap,
    mergeMap,
    concatAll,
    mergeAll,
} from 'rxjs/operators';

const globalLogger = (message: string, ...rest: any[]) => {
    console.log(
        `%c ${message} :`,
        'background: #ffa666; color: #1d0029; font-size: 20px;',
        ...rest,
    );
};

const messages = new Observable<MessageEvent>((subscriber) => {
    addEventListener('message', (event) => {
        globalLogger('worker Two event', event);
        subscriber.next(event);
    });
});

const outgoingMessages = new Subject();
outgoingMessages.subscribe((event) => postMessage(event));
outgoingMessages.subscribe((message) => globalLogger('message', message));

const portSubject = new ReplaySubject<[MessagePort, string]>();
messages
    .pipe(
        filter((event) => !!event.ports.length),
        tap((event) => globalLogger('got message port', event)),
        map((event) => ({ ports: event.ports, names: event.data.names || [] })),
        mergeMap(({ ports, names }) => zip(of(...ports), of(...names))),
        tap(
            ([port, name]) =>
                (port.onmessage = (event) => {
                    globalLogger(`message from ${name}`, event);
                    outgoingMessages.next(
                        `Worker two got message from worker one`,
                    );
                }),
        ),
        tap(([port, name]) => globalLogger(name, port)),
    )
    .subscribe((port) => {
        globalLogger('port', port);
        portSubject.next(port);
    });

messages
    .pipe(
        tap((event) => globalLogger('event', event)),
        filter((event) => !event.ports.length),
        mergeMap((event) =>
            portSubject.pipe(tap(([port]) => port.postMessage(event.data))),
        ),
    )
    .subscribe((event) => {
        globalLogger('event', event);
    });
