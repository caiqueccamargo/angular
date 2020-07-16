import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    AboutAppComponent,
    HomeComponent,
    ContactAppComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
