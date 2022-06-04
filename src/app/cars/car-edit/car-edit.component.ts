import { DatabaseService } from './../../shared/database.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  carForm: FormGroup | any;
  error: string = '';

  citys: string[] = [
    'Ariyalur',
		'Chennai',
		'Coimbatore',
		'Cuddalore',
		'Dharmapuri',
		'Dindigul',
		'Erode',
		'Kanchipuram',
		'Kanyakumari',
		'Karur',
		'Madurai',
		'Nagapattinam',
		'Nilgiris',
		'Namakkal',
		'Perambalur',
		'Pudukkottai',
		'Ramanathapuram',
		'Salem',
		'Sivaganga',
		'Tirupur',
		'Tiruchirappalli',
		'Theni',
		'Tirunelveli',
		'Thanjavur',
		'Thoothukudi',
		'Tiruvallur',
		'Tiruvarur',
		'Tiruvannamalai',
		'Vellore',
		'Viluppuram',
		'Virudhunagar'
  ]

  brands: string[] = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tata",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo"
  ]

  years: number[] = []

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    for (let i = 1990; i <= new Date().getFullYear(); i++) {
      this.years.push(i);
    }
    this.initForm();
  }

  onSubmit() {
    let form = this.carForm;
    if (!form.valid) {
      return;
    }
    if (form.value.city == 'select' || form.value.brand == 'select' || form.value.year == 'select' || form.value.fual == 'select' || form.value.owner == 'select') {
      this.error = 'please fill the form correctly...!'
    }else {
      this.dbService.createCar(form.value).subscribe(res => {
        this.error = '';
        this.initForm();
        form.reset();
      });
    }
  }

  private initForm() {
    this.carForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'city': new FormControl('select', Validators.required),
      'brand': new FormControl('select', Validators.required),
      'model': new FormControl('', Validators.required),
      'kmd': new FormControl('', Validators.required),
      'year': new FormControl('select', Validators.required),
      'fual': new FormControl('select', Validators.required),
      'owner': new FormControl('select', Validators.required),
      'price': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required)
    })
  }

}
