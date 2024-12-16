import { Transition } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';
import { MapPin, Search } from 'lucide-react';
import { FormEventHandler } from 'react';
import InputError from './InputError';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';

export default function HomeSearchForm({ className }: { className?: string }) {
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
    <Card className={className}>
      <CardHeader>
        <CardTitle className='text-3xl font-bold leading-none'>
          Search cars for sale
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className='flex w-full flex-col gap-y-6'>
          <div className='grid grid-cols-2 grid-rows-3 gap-4'>
            <div className='relative col-span-2 w-full'>
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
                id='body'
                type='text'
                placeholder='Body type(s)'
                value={data.body}
                onChange={(e) => setData('body', e.target.value)}
                required
                autoComplete='body'
              />
              <InputError className='mt-2' message={errors.body} />
            </div>

            <div className='relative col-span-1 w-full'>
              <MapPin className='absolute left-0 top-0 m-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                id='location'
                type='text'
                className='pl-9'
                placeholder='Location'
                value={data.location}
                onChange={(e) => setData('location', e.target.value)}
                required
                autoComplete='location'
              />
              <InputError className='mt-2' message={errors.location} />
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
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Link href={route('browse')} className='w-full'>
          <Button className='w-full' disabled={processing}>
            Search
          </Button>
        </Link>

        <Transition
          show={recentlySuccessful}
          enter='transition ease-in-out'
          enterFrom='opacity-0'
          leave='transition ease-in-out'
          leaveTo='opacity-0'
        >
          <p className='text-sm text-gray-600 dark:text-gray-400'>Saved.</p>
        </Transition>
      </CardFooter>
    </Card>
  );
}
