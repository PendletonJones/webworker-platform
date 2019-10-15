import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block/code-block.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import { SourcesComponent } from './sources/sources.component';
import { CardComponent } from './card/card.component';
import { GraphicBrowserComponent } from './graphic-browser/graphic-browser.component';
import { GraphicWorkerComponent } from './graphic-worker/graphic-worker.component';
import { GraphicServiceWorkerComponent } from './graphic-service-worker/graphic-service-worker.component';
import { GraphicMessagePortComponent } from './graphic-message-port/graphic-message-port.component';
import { GraphicServerComponent } from './graphic-server/graphic-server.component';
import { GraphicCacheComponent } from './graphic-cache/graphic-cache.component';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
    return [
        { name: 'typescript', func: typescript },
        { name: 'scss', func: scss },
        { name: 'xml', func: xml },
        { name: 'json', func: json },
        { name: 'javascript', func: javascript },
        { name: 'bash', func: bash },
    ];
}

@NgModule({
    imports: [
        CommonModule,
        MatTabsModule,
        HighlightModule.forRoot({
            languages: hljsLanguages,
        }),
        HttpClientModule,
    ],
    declarations: [
        CodeBlockComponent,
        SourcesComponent,
        CardComponent,
        GraphicBrowserComponent,
        GraphicWorkerComponent,
        GraphicServiceWorkerComponent,
        GraphicMessagePortComponent,
        GraphicServerComponent,
        GraphicCacheComponent,
    ],
    exports: [
        CodeBlockComponent,
        SourcesComponent,
        CardComponent,
        GraphicBrowserComponent,
        GraphicWorkerComponent,
        GraphicServiceWorkerComponent,
        GraphicMessagePortComponent,
        GraphicServerComponent,
        GraphicCacheComponent,
    ],
})
export class ComponentsModule {}
