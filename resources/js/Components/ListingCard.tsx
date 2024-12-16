import { cn } from '@/lib/utils';
import { Listing } from '@/types/Listing';
import { Bookmark, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function ListingCard({
  listing,
  className,
}: {
  listing: Listing;
  className?: string;
}) {
  return (
    <Card className={cn('w-80', className)}>
      <CardHeader>
        <img
          src={listing.images[0]}
          alt={listing.car.make + ' ' + listing.car.model}
          className='aspect-[7/5] rounded-xl object-cover'
        />
      </CardHeader>
      <CardContent>
        <CardTitle>
          {listing.car.year} {listing.car.make} {listing.car.model}
        </CardTitle>
        <CardDescription>{listing.car.variant}</CardDescription>
        <p className='my-2 text-sm'>
          {listing.car.odometer}km • {listing.car.engineSize}cc •{' '}
          {listing.car.transmission} • {listing.car.fuelType}
          <span className='flex flex-row items-center gap-1'>
            <MapPin size={16} /> {listing.area}, {listing.region}
          </span>
        </p>
        <p className='text-2xl font-bold'>${listing.price}</p>
      </CardContent>
      <CardFooter className='gap-x-2'>
        <Button>Call</Button>
        <Button variant='outline'>Email</Button>
        <Button variant='outline' className='ml-auto'>
          <Bookmark size={24} />
        </Button>
      </CardFooter>
    </Card>
  );
}
