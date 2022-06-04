import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ViewCarComponent } from './view-car.component';
import { SharedModule } from './../shared/shared.module';
import { CarsResolver } from './cars.resolver';



@NgModule({
  declarations: [
    ViewCarComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: ViewCarComponent, resolve: [CarsResolver]
    }]),
    ReactiveFormsModule
  ]
})
export class ViewCarModule { }
