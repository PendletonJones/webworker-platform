import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, from, Observable, zip, Subject } from 'rxjs';
import { map, mergeMap, tap, scan, startWith } from 'rxjs/operators';

const initial: Array<[string, string]> = [];

@Component({
    selector: 'worker-platform-sources',
    templateUrl: './sources.component.html',
    styleUrls: ['./sources.component.css'],
})
export class SourcesComponent implements OnInit {
    public content: Observable<Array<[string, string]>> = new Observable<
        Array<[string, string]>
    >().pipe(startWith(initial));

    @Input() sourceFiles: Array<string>;

    constructor(private httpClient: HttpClient) {}

    public ngOnInit() {
        this.content = of(...this.sourceFiles).pipe(
            mergeMap((doc) =>
                zip(
                    of(doc.replace('/', '')),
                    this.httpClient.get(doc, { responseType: 'text' }),
                ),
            ),
            scan<[string, string]>(
                (acc: Array<[string, string]>, content: [string, string]) => [
                    ...acc,
                    content,
                ],
                [],
            ),
            tap((article) => console.log(article)),
        );
    }
}
