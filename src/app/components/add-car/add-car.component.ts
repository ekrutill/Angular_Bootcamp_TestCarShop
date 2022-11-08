import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  form: FormGroup;
  

  constructor(public carService: CarService, private router: Router, private fb: FormBuilder, private http: HttpClient){
    this.form = fb.group({
      model: ['', Validators.required],
      firstRegistration: ['', Validators.required],
      origin: ['', Validators.required]
    });
  }

  get model(): FormControl{
    return this.form.get('model') as FormControl
  }

  get origin(): FormControl{
    return this.form.get('origin') as FormControl
  }

  get firstRegistration(): FormControl{
    return this.form.get('firstregistration') as FormControl
  }



  ngOnInit(): void {
  }


  onSubmit(){
    const car: Car = this.form.value as Car 
    this.carService.postCar(car).subscribe({
      next: (car: Car) => {
        console.log('car saved');
      },
      error: (err: any) => {console.log(err)},
      complete: () => {
        this.carService.carsUpdated.next(true);
        this.form.reset();
        this.router.navigate(['cars']);
      },
    });
  }



}
