
'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { LogoIcon } from './icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/overview', label: 'Resumen del Proyecto' },
  { href: '/technical-model', label: 'Modelo Técnico' },
  { href: '/impact', label: 'Impacto' },
  { href: '/investment', label: 'Inversión' },
  { href: '/timeline', label: 'Cronograma' },
  { href: '/gallery', label: 'Galería' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <LogoIcon className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Agua Nueva Esparta
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 text-sm font-medium md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open main menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center space-x-2">
                <LogoIcon className="h-6 w-6" />
                <span className="font-bold">Agua Nueva Esparta</span>
              </Link>
              <nav className="grid gap-2">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'flex w-full items-center py-2 text-lg font-semibold',
                      pathname === href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold md:hidden"
          >
            <LogoIcon className="h-6 w-6" />
            <span className="text-lg">Agua Nueva Esparta</span>
          </Link>
          <Button asChild>
            <Link href="/contact">Contacto</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
