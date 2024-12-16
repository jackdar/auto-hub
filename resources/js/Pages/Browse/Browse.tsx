import BrowseSearchForm from '@/Components/BrowseSearchForm';
import ListingCard from '@/Components/ListingCard';
import MainLayout from '@/Layouts/MainLayout';
import { Listing } from '@/types/Listing';
import { Head } from '@inertiajs/react';

export default function Browse({
  paginatedListings,
}: {
  paginatedListings: Listing[];
}) {
  return (
    <MainLayout>
      <Head title='Browse' />
      <BrowseSearchForm />
      <section className='relative flex bg-stone-100'>
        <div className='flex h-screen w-full flex-col p-4'>
          <p className='text-lg'>{paginatedListings?.length || 0} results.</p>
          <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {Array.from({ length: 5 }).map((_, index) => (
              <ListingCard
                key={index}
                className='w-full'
                listing={{
                  id: 1,
                  userId: 1,
                  user: {
                    id: 1,
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john@doe.com',
                  },
                  carId: 1,
                  car: {
                    id: 1,
                    make: 'Toyota',
                    model: 'Corolla',
                    variant: 'GLX',
                    year: 2019,
                    bodyType: 'Sedan',
                    transmission: 'Automatic',
                    odometer: 50000,
                    fuelType: 'Petrol',
                    seats: 5,
                    doors: 4,
                    colour: 'White',
                    engineSize: 1800,
                  },
                  area: 'North Shore',
                  region: 'Auckland',
                  images: ['/img/corolla.webp'],
                  price: 25000,
                  new_or_used: 'Used',
                  contact_email: 'blah',
                  contact_phone: '0211234567',
                  status: 'active',
                  createdAt: '2021-01-01',
                  updatedAt: '2021-01-01',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
