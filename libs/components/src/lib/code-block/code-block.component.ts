import {
    Component,
    AfterViewInit,
    Input,
    OnInit,
    ViewChildren,
    QueryList,
    ContentChildren,
    ContentChild,
} from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'worker-platform-code-block',
    templateUrl: './code-block.component.html',
    styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent implements AfterViewInit, OnInit {
    public lines: string[];

    constructor() {}

    @Input() content: string;
    @Input() language: string;

    ngOnInit() {
        this.lines = this.content.trim().split('\n');
    }

    ngAfterViewInit() {}
}
