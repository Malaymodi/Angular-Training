import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { InlineComponent } from './inline/inline.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { NgClassDirComponent } from './ng-class-dir/ng-class-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    InlineComponent,
    InterpolationComponent,
    EventsComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    NgClassDirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
