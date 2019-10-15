import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsComponent } from './controls/controls.component';
import { SlideComponent } from './slide/slide.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [CommonModule, RouterModule, MatButtonModule],
    declarations: [ControlsComponent, SlideComponent],
    exports: [ControlsComponent, SlideComponent],
})
export class PresenterModule {}
