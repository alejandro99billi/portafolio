import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { Logo3dComponent } from '../logo3d/logo3d.component';
import { Logo3dModule } from '../logo3d/logo3d.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    Logo3dModule,
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
