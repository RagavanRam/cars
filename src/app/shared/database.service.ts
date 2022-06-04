import { CarsService } from './cars.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './car.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private carsService: CarsService) { }

  createCar(car: Car) {
    return this.http.post('https://cars-48301-default-rtdb.asia-southeast1.firebasedatabase.app/cars.json', car).pipe(tap(res => {
      this.fetchCars().subscribe();
    }))
  }

  fetchCars() {
    return this.http.get<Car[]>('https://cars-48301-default-rtdb.asia-southeast1.firebasedatabase.app/cars.json').pipe(map(res => {
      const carArray = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          carArray.push({...res[key], id: key})
        }
      }
      return carArray;
    }), tap(res => {
      this.carsService.setCars(res);
    }))
  }

}
