"use client";
import Link from 'next/link';
import { ThemeToggleButton } from './theme-toggle-button';
import { Button } from './ui/button';
import { Menu, Sparkles } from 'lucide-react';
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
          <Link href="#hero" className="flex items-center gap-2 text-2xl font-bold group">
            <Sparkles className="h-7 w-7 text-primary group-hover:animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">DevSpark</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Button key={link.label} variant="ghost" asChild className="text-sm font-medium hover:text-primary">
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
                  <Link href="#hero" className="flex items-center gap-2 text-2xl font-bold mb-8" onClick={() => setMobileMenuOpen(false)}>
                     <Sparkles className="h-7 w-7 text-primary" />
                     <span>DevSpark</span>
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Button key={link.label} variant="ghost" asChild className="text-lg justify-start hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
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
