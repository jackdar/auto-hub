import HomeSearchForm from '@/Components/HomeSearchForm';
import ListingCard from '@/Components/ListingCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/Components/ui/carousel';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Home() {
  return (
    <MainLayout>
      <Head title='Home' />
      <section id='hero' className='relative mb-20 flex'>
        <img
          src='/img/bg.webp'
          alt='background'
          className='absolute left-0 top-0 z-0 h-96 w-full object-cover object-top'
          loading='eager'
        />

        <HomeSearchForm className='z-10 mx-4 mt-40 w-full lg:ml-24 lg:max-w-2xl' />
      </section>

      <section id='new-listings' className='relative flex'>
        <div className='flex w-full flex-col px-10'>
          <h2 className='text-3xl font-bold'>New Listings</h2>
          <p>Check out the latest cars for sale</p>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className='mt-4 w-full'
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className='basis-[1]'>
                  <div className='p-1'>
                    <ListingCard
                      key={index}
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='ml-6' />
            <CarouselNext className='mr-6' />
          </Carousel>
        </div>
      </section>
    </MainLayout>
  );
}
