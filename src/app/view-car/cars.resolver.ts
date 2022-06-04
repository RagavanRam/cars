import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Car } from './../shared/car.model';
import { CarsService } from './../shared/cars.service';
import { DatabaseService } from './../shared/database.service';

@Injectable({
  providedIn: 'root'
})
export class CarsResolver implements Resolve<Car[]> {

  constructor(private carsService: CarsService, private dbService: DatabaseService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const cars = this.carsService.getCars();
    if (!cars) {
      return this.dbService.fetchCars();
    }else {
      return cars;
    }
  }
}
