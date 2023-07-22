import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Routes } from '@angular/router';
import { AboutMeComponent } from './about-me.component';


const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class AboutMeRoutingModule { }
