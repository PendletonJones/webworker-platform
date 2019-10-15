import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'worker-platform-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() useTitle;
    @Input() url;

    constructor() {}

    ngOnInit() {}
}
