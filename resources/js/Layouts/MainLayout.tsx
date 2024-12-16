import { ModeToggle } from '@/Components/ModeToggle';
import { ThemeProvider } from '@/Components/ThemeProvider';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Button } from '@/Components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/Components/ui/sheet';
import { Link, usePage } from '@inertiajs/react';
import { MenuIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  const user = usePage().props.auth.user;

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='flex min-h-screen flex-col bg-stone-50 dark:bg-stone-950'>
        <header className='grid h-20 w-full shrink-0 grid-cols-3 items-center justify-between px-4 md:px-6 lg:flex'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' className='lg:hidden'>
                <MenuIcon className='h-6 w-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <Link
                href={route('home')}
                className='mr-6 flex text-3xl font-bold lg:hidden'
              >
                Auto Hub
                <span className='sr-only'>Auto Hub</span>
              </Link>
              <div className='grid gap-2 py-6'>
                <Link
                  href={route('browse')}
                  className='flex w-full items-center py-2 text-lg font-semibold'
                >
                  Browse cars
                </Link>
                <Link
                  href='#'
                  className='flex w-full items-center py-2 text-lg font-semibold'
                >
                  Sell a car
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link
            href={route('home')}
            className='mx-auto text-center text-2xl font-bold lg:ml-6 lg:mr-20'
          >
            Auto Hub
            <span className='sr-only'>Auto Hub</span>
          </Link>
          <nav className='mr-auto hidden gap-6 lg:flex'>
            <Link href={route('browse')}>
              <Button variant='link'>Browse cars</Button>
            </Link>
            <Button variant='link'>Sell a car</Button>
            {user && <Button variant='link'>My Listings</Button>}
          </nav>

          {user ? (
            <Link href={route('profile.edit')} className='ml-auto mr-2'>
              <Avatar>
                <AvatarImage
                  src={user.email}
                  alt={user.first_name + ' ' + user.last_name}
                />
                <AvatarFallback>
                  {user.first_name[0] + user.last_name[0]}
                </AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Link href={route('login')} className='ml-auto mr-2'>
              <Button variant='outline' size='default'>
                Log in
              </Button>
            </Link>
          )}
        </header>

        <main>{children}</main>

        <footer className='mt-auto'>
          <div className='mx-auto flex max-w-7xl flex-row items-center justify-center gap-6 px-4 py-8'>
            <p className='text-center text-stone-500 dark:text-stone-400'>
              Auto Hub, developed by Jack Darlington
            </p>

            <ModeToggle />
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
