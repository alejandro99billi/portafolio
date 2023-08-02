import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logo3dComponent } from './logo3d.component';



@NgModule({
  declarations: [
    Logo3dComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Logo3dComponent,
  ]
})
export class Logo3dModule { }
