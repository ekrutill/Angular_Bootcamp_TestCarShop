import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Observable, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {

  searchbar = new FormControl('', { validators: [Validators.required], nonNullable: true });
  filterSub: Subscription;
  
  cars$: Observable<Car[]>;


  constructor(private carService: CarService) {


    this.cars$ = this.carService.getCarsByFilter$(this.searchbar.value);
    
    this.filterSub = this.searchbar.valueChanges.pipe(throttleTime(100)).subscribe((value: string) => {
      this.cars$ = this.carService.getCarsByFilter$(value);
    });
  }

  
  ngOnInit(): void {}

  
  onDeleteCar(id: number): void {
    this.carService.deleteCar$(id).subscribe(() => {
      this.cars$ = this.carService.getCarsByFilter$(this.searchbar.value);
    });
  }
  

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

}
