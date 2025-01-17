import { CarDto } from '../car/car.dto';

export interface ListingDto {
  id: number;
  car: CarDto;
  area: string;
  region: string;
  description: string;
  price: number;
  contact_email: string;
  contact_phone: string;
  created_at: string;
}
