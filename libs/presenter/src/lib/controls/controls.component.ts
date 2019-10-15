import {
    Component,
    OnInit,
    Input,
    ViewChild,
    AfterViewInit,
    ElementRef,
    AfterContentInit,
} from '@angular/core';
import { Observable, fromEvent, merge, BehaviorSubject } from 'rxjs';
import {
    tap,
    map,
    mergeMap,
    filter,
    withLatestFrom,
    startWith,
    distinct,
} from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

const Enabled = false;
const Disabled = true;

/**
 * Whats the plan here?
 */

@Component({
    selector: 'worker-platform-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
    @ViewChild('prevSlide', { static: false, read: ElementRef }) prevButton;
    @ViewChild('nextSlide', { static: false, read: ElementRef }) nextButton;

    private buttonState: Observable<{
        nextUrl: string;
        nextEnabled: boolean;
        prevUrl: string;
        prevEnabled: boolean;
        content: string;
    }>;

    prevEnabled: Observable<boolean>;
    prevLink: Observable<string>;

    nextEnabled: Observable<boolean>;
    nextLink: Observable<string>;

    currentPage: Observable<number>;

    @Input() slides: string[] = ['/'];
    @Input() bookmarks: Array<{ name: string; url: string }> = [];

    routerEvents: Observable<NavigationEnd>;

    constructor(private router: Router) {
        this.routerEvents = this.router.events.pipe(
            filter(this.isNavigationEnd),
        );
    }

    ngOnInit() {
        this.buttonState = this.setupNavigation();
        this.prevEnabled = this.buttonState.pipe(
            map((event) => event.prevEnabled),
            tap((evt) => console.log('prevEnabled', evt)),
        );
        this.nextEnabled = this.buttonState.pipe(
            map((event) => event.nextEnabled),
            tap((evt) => console.log('nextEnabled', evt)),
        );
        this.prevLink = this.buttonState.pipe(
            map((event) => event.prevUrl),
            tap((evt) => console.log('prevLink', evt)),
        );
        this.nextLink = this.buttonState.pipe(
            map((event) => event.nextUrl),
            tap((evt) => console.log('nextLink', evt)),
        );
        this.currentPage = this.routerEvents.pipe(
            distinct((event) => event.id),
            tap(console.log),
            map((event) => this.slides.indexOf(event.url) + 1),
            startWith(1),
        );
    }

    private isNavigationEnd(event: any): event is NavigationEnd {
        return event instanceof NavigationEnd;
    }

    setupNavigation() {
        // maybe respond to navigation events
        return this.routerEvents.pipe(
            distinct((event) => event.id),
            tap(console.log),
            map((event) => this.slides.indexOf(event.url)),
            map((index) => {
                // when the url isn't found, the next button will be
                // the /slideshow url because the index is -1, (+1 === 0)
                const prevUrl = this.slides[index - 1];
                const nextUrl = this.slides[index + 1];
                const nextButtonState = !!nextUrl ? Enabled : Disabled;
                const prevButtonState = !!prevUrl ? Enabled : Disabled;
                return {
                    nextUrl: nextUrl,
                    nextEnabled: nextButtonState,
                    prevUrl: prevUrl,
                    prevEnabled: prevButtonState,
                    content: 'Prev',
                };
            }),
            startWith({
                nextUrl: this.slides[1],
                nextEnabled: Enabled,
                prevUrl: '/',
                prevEnabled: Disabled,
                content: 'Prev',
            }),
        );
    }
}
