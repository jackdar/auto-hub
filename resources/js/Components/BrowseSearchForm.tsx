import { cn } from '@/lib/utils';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { FormEventHandler } from 'react';
import InputError from './InputError';
import { Input } from './ui/input';

export default function BrowseSearchForm({
  className,
}: {
  className?: string;
}) {
  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      search: '',
      body: '',
      location: '',
      price: '',
      year: '',
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('profile.update'));
  };

  return (
    <div className={cn('border-b border-stone-200 px-4 pb-6', className)}>
      <form onSubmit={submit} className='flex w-full flex-col gap-y-6'>
        <div className='grid grid-cols-3 grid-rows-2 gap-4'>
          <div className='relative col-span-3 w-full'>
            <Search className='absolute left-0 top-0 m-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              id='search'
              type='text'
              className='pl-9'
              placeholder='Search any keyword(s)'
              value={data.search}
              onChange={(e) => setData('search', e.target.value)}
              required
              autoComplete='search'
            />
            <InputError className='mt-2' message={errors.search} />
          </div>

          <div className='relative col-span-1 w-full'>
            <Input
              id='year'
              type='text'
              placeholder='Year'
              value={data.year}
              onChange={(e) => setData('year', e.target.value)}
              required
              autoComplete='year'
            />
            <InputError className='mt-2' message={errors.year} />
          </div>

          <div className='relative col-span-1 w-full'>
            <Input
              id='price'
              type='text'
              placeholder='Price'
              value={data.price}
              onChange={(e) => setData('price', e.target.value)}
              required
              autoComplete='price'
            />
            <InputError className='mt-2' message={errors.price} />
          </div>
        </div>
      </form>

      <Transition
        show={recentlySuccessful}
        enter='transition ease-in-out'
        enterFrom='opacity-0'
        leave='transition ease-in-out'
        leaveTo='opacity-0'
      >
        <p className='text-sm text-gray-600 dark:text-gray-400'>Saved.</p>
      </Transition>
    </div>
  );
}
