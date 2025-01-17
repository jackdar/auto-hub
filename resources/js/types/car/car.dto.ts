type BodyType =
  | 'Sedan'
  | 'Hatchback'
  | 'Suv'
  | 'Crossover'
  | 'Coupe'
  | 'Convertible'
  | 'Wagon'
  | 'Van'
  | 'Ute';

type Transmission = 'Manual' | 'Automatic';

type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';

export interface CarDto {
  id: number;
  make: string;
  model: string;
  variant: string;
  year: number;
  body_type: BodyType;
  transmission: Transmission;
  odometer: number;
  fuel_type: FuelType;
  seats: number;
  doors: number;
  colour: string;
  engine_size: number;
}
