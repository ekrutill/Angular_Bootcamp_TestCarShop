export interface Car {
  id?: number;
  model: string;
  firstRegistration: string;
  origin: string;
  description?: string;
  image?: string;
  
  carDetails?: {
    kmPerGallon: number;
    cylinders: number;
    Displacement: number;
    horsepower: number;
    weight: number;
    acceleration: number;
  };
}



