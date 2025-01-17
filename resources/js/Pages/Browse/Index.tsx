import BrowseSearchForm from '@/Components/BrowseSearchForm';
import ListingCard from '@/Components/ListingCard';
import MainLayout from '@/Layouts/MainLayout';
import { PaginatedData } from '@/types';
import { ListingDto } from '@/types/listing/listing.dto';
import { Head } from '@inertiajs/react';

export default function Index({
  listings,
}: {
  listings: PaginatedData<ListingDto>;
}) {
  return (
    <MainLayout>
      <Head title='Browse' />
      <BrowseSearchForm />
      <section className='relative flex'>
        <div className='flex h-screen w-full flex-col p-4 md:p-6 lg:p-12'>
          <p className='text-lg'>{listings.data?.length || 0} results.</p>
          <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {listings.data.map((listing, index) => (
              <ListingCard
                key={index}
                className='w-full'
                listing={listing}
                images={['/img/corolla.webp']}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
