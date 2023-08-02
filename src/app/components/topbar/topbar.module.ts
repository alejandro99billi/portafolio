import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'


@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports:[
    TopbarComponent,

  ],
})
export class TopbarModule { }
