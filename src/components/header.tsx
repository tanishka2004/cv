
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggleButton } from './theme-toggle-button';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import React from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#hero" className="flex items-center gap-2 group">
            <Image
              src="/avatar-logo.png" // Updated image source
              alt="Tanishka Jain Logo"
              width={40} // Adjusted size for better visual
              height={40}
              className="rounded-full h-10 w-10 sm:h-12 sm:w-12 group-hover:opacity-80 transition-opacity" // Adjusted size
            />
            {/* Optional: Keep DevSpark text next to avatar if desired, or remove it */}
            {/* <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">DevSpark</span> */}
          </Link>

          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Button key={link.label} variant="ghost" asChild className="text-sm font-medium hover:text-foreground/80">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <ThemeToggleButton />
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] bg-background">
                  <div className="p-6">
                  <Link href="#hero" className="flex items-center gap-2 mb-8" onClick={() => setMobileMenuOpen(false)}>
                     <Image
                        src="/avatar-logo.png" // Updated image source
                        alt="Tanishka Jain Logo"
                        width={32}
                        height={32}
                        className="rounded-full h-8 w-8"
                      />
                     {/* Optional: Keep DevSpark text in mobile menu if desired */}
                     {/* <span className="text-2xl font-bold">DevSpark</span> */}
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Button key={link.label} variant="ghost" asChild className="text-lg justify-start hover:text-foreground/80" onClick={() => setMobileMenuOpen(false)}>
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    ))}
                  </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
