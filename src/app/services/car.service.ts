
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, take } from 'rxjs';
import { Car } from '../models/car.vo';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public carsUpdated:Subject<boolean> = new Subject<boolean>()

  constructor(private httpClient: HttpClient) {}

  public getCars() {
    this.httpClient.get<any>(`${environment.baseApiUrl}/car`).pipe(take(1)).subscribe((data) => console.log(data));
  }

  public addImageToCar(car:Car):Car{
    let images: string[] = ['assets/car-dummy-0.jpg', 'assets/car-dummy-1.jpg', 'assets/car-dummy-2.jpg'];
    car.image = images[Math.floor((Math.random()*images.length))]
    return car

  }


  public postCar(car: Car): Observable<Car>{
    return this.httpClient.post<Car>(`${environment.baseApiUrl}/car`, car );
  }


  public getCars$(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(environment.baseApiUrl + '/car').pipe(
      map((cars: Car[]) => {
        cars.forEach((c) => {
          this.addImageToCar(c);
        });
        return cars;
      })
    );
  }

  public getCarsByFilter$(filter: string): Observable<Car[]> {
    return this.httpClient
      .get<Car[]>(environment.baseApiUrl + '/car', {
        params: {
          q: filter,
        },
      })
      .pipe(
        map((cars: Car[]) => {
          cars.forEach((c) => {
            this.addImageToCar(c);
          });
          return cars;
        })
      );
  }

  public getCar$(id: number): Observable<Car> {
    return this.httpClient.get<Car>(environment.baseApiUrl + '/car/' + id).pipe(
      map((car: Car) => {
        this.addImageToCar(car);
        return car;
      })
    );
  }

  
  public deleteCar$(id: number): Observable<Car> {
    return this.httpClient.delete<Car>(environment.baseApiUrl + '/car/' + id);
  }


}
