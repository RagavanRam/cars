import { DatabaseService } from './../shared/database.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Car } from './../shared/car.model';
import { CarsService } from './../shared/cars.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {

  cars: Car[] | any;
  carsSub: Subscription | any;

  constructor(private carsService: CarsService, private router: Router, private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.fetchCars().subscribe(res => {
      this.cars = res;
    })
    this.carsSub = this.carsService.carsUpdated.subscribe(res => {
      this.cars = res;
    })
  }

  toDetail(index: number) {
    this.router.navigate(['/cars/'+index])
  }

  ngOnDestroy(): void {
    if (this.carsSub) {
      this.carsSub.unsubscribe();
    }
  }

}
