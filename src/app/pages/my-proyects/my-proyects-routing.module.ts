import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProyectsComponent } from './my-proyects.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: MyProyectsComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class MyProyectsRoutingModule { }
