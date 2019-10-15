import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'worker-platform-topic-slide',
    templateUrl: './topic-slide.component.html',
    styleUrls: ['./topic-slide.component.scss'],
})
export class TopicSlideComponent implements OnInit {
    constructor() {}

    Show = false;
    Hide = true;

    ngOnInit() {}
}
