import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Highlight } from './mydirective';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    Highlight,
    TestComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[
    Highlight,
    TestComponent
  ]
})
export class SharedModule { }
