import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { CarsComponent } from './cars.component';
import { CarComponent } from './car/car.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    CarEditComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: CarsComponent
    }]),
    ReactiveFormsModule
  ]
})
export class CarsModule { }
