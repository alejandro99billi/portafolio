import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcumbComponent } from './breadcumb.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [BreadcumbComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports:[BreadcumbComponent]
})
export class BreadcumbModule { }
