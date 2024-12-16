import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
  const auth = usePage().props.auth;

  return (
    <header className='grid grid-cols-3 items-center gap-2 py-10'>
      <div className='col-start-2 flex justify-center lg:col-start-1 lg:justify-start'>
        <Link href={route('home')} className='text-2xl font-medium'>
          Auto Hub
        </Link>
      </div>
      <nav className='grid grid-cols-1 justify-between lg:col-span-2 lg:col-start-2 lg:grid-cols-2'>
        <div className='hidden justify-center lg:flex'>
          <Link
            href={route('browse')}
            className='rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white'
          >
            Browse cars
          </Link>
          <Link
            href={route('dashboard')}
            className='rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white'
          >
            Sell a car
          </Link>
        </div>
        <div className='flex justify-end'>
          {auth.user ? (
            <Link
              href={route('dashboard')}
              className='rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white'
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className='rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white'
              >
                Log in
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
