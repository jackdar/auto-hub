type BodyType =
  | 'sedan'
  | 'hatchback'
  | 'suv'
  | 'crossover'
  | 'coupe'
  | 'convertible'
  | 'wagon'
  | 'van'
  | 'ute';

type Transmission = 'manual' | 'automatic';

type FuelType = 'petrol' | 'diesel' | 'electric' | 'hybrid';

export interface Car {
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
  created_at: string;
  updated_at: string;
}
