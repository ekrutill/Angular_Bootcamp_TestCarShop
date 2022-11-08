import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarItemComponent } from './components/car-item/car-item.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    WelcomeComponent, 
    ExerciseComponent,
    CarsPageComponent,
    CarItemComponent,
    AddCarComponent,
    CarDetailsComponent,
    AllCarsComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
