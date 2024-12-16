import { Car } from './Car';
import { User } from './User';

export type Listing = {
  id: number;
  userId: number;
  carId: number;
  area: string;
  region: string;
  images: string[];
  price: number;
  new_or_used: string;
  contact_email: string;
  contact_phone: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  car: Car;
};
