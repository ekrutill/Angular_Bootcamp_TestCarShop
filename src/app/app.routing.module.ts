import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { ExerciseComponent } from '@/app/components/exercise/exercise.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'exercise',
    pathMatch: 'full',
    component: ExerciseComponent,
  },
  {
    path: 'cars',
    pathMatch: 'full',
    component: AllCarsComponent,
  },
  {
    path: 'add-car',
    pathMatch: 'full',
    component: AddCarComponent,
  },
  {
    path: 'cars/:id',
    pathMatch: 'full',
    component: CarDetailsComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
