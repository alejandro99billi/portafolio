import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: ContactMeComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class ContactRoutingModule { }
