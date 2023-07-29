import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { BreadcumbModule } from 'src/app/components/breadcumb/breadcumb.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { FooterModule } from 'src/app/components/footer/footer.module';



@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    BreadcumbModule,
    FooterModule,
  ]
})
export class LandingModule { }
