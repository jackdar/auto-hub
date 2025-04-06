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
import { PageProps, PaginatedData } from '@/types';
import { ListingDto } from '@/types/listing/listing.dto';
import { Head } from '@inertiajs/react';

// export default function Home({
//   auth,
//   listings,
// }: {
//   listings: PaginatedData<ListingDto>;
// }) {

export default function Home({
  listings,
}: PageProps<{
  laravelVersion: string;
  phpVersion: string;
  listings: PaginatedData<ListingDto>;
}>) {
  return (
    <MainLayout>
      <Head title='Home' />
      <section id='hero' className='relative mb-16 flex'>
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
              {listings.data.map((listing, index) => (
                <CarouselItem key={index} className='basis-[1]'>
                  <div className='p-1'>
                    <ListingCard
                      key={index}
                      listing={listing}
                      images={['/img/corolla.webp']}
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
