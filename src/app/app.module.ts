import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CarsModule } from './cars/cars.module';
import { FooterComponent } from './footer/footer.component';
import { ViewCarModule } from './view-car/view-car.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CarsModule,
    ViewCarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
