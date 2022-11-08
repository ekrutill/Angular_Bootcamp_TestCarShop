import { Router } from '@angular/router';
import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car!: Car;
  @Output() clickDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


}
