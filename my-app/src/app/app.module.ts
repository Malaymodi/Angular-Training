import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { InlineComponent } from './inline/inline.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { NgClassDirComponent } from './ng-class-dir/ng-class-dir.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructureDirectivesComponent } from './structure-directives/structure-directives.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    InlineComponent,
    InterpolationComponent,
    EventsComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    NgClassDirComponent,
    StyleBindingComponent,
    TemplateReferenceComponent,
    CounterComponentComponent,
    TwoWayBindingComponent,
    StructureDirectivesComponent,
    StudentDataComponent,
    StudentListComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
