import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent{

  @Input() cars: Car[] = [];
  @Output() carDeleting = new EventEmitter<number>();


  constructor(public carService: CarService) {
   
   }


}
