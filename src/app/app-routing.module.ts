import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import {AboutAppComponent} from '../app/about-app/about-app.component';
import {ContactAppComponent} from '../app/contact-app/contact-app.component';
import {HomeComponent} from '../app/home/home.component';

const route: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutAppComponent},
  {path: 'contact', component: ContactAppComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(route)]
})
export class AppRoutingModule { }
