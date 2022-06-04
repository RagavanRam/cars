import { CarsService } from './../shared/cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  carIndex: number | any;
  car: Car | any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carIndex = +params['id'];
      this.car = this.carsService.getCar(this.carIndex);
    })
  }

}
