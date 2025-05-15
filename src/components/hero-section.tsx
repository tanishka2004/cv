
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const name = "Tanishka Jain";
  const tagline = "Web Developer, Data Analyst Enthusiast & Problem Solver";

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen animated-gradient-bg text-foreground p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> {/* Optional: subtle overlay for text readability */}
      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
          {name.split("").map((char, index) => (
            <span key={index} className="inline-block animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#projects">
              View Work <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-foreground/50 text-foreground hover:bg-foreground/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#contact">
              Let&apos;s Chat <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-foreground/70 hover:text-foreground transition-colors" />
        </Link>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </section>
  );
}
