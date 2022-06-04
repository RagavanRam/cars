import { Car } from './car.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  carsUpdated = new Subject<Car[]>();

  cars: Car[] | any;

  constructor() { }

  setCars(cars: Car[]) {
    this.cars = cars;
    this.carsUpdated.next(this.cars);
  }

  getCars() {
    return this.cars;
  }

  getCar(index: number) {
    return this.cars[index];
  }
}
