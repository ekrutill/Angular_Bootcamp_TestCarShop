import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars();
  }


}
