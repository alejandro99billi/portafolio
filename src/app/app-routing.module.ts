import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundModule } from './pages/not-found/not-found.module';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'proyects',
    loadChildren: () => import('./pages/my-proyects/my-proyects.module').then((m) => m.MyProyectsModule),
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'contact-me',
    loadChildren: () => import('./pages/contact-me/contact-me.module').then((m) => m.ContactMeModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
  