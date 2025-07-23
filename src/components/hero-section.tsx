"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react'; 

export default function HeroSection() {
  const name = "Tanishka Jain";

  const dynamicParts = [
    "Web Developer",
    "Data Analyst Enthusiast",
    "Problem Solver"
  ];
  const [partIndex, setPartIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 120; 
  const deletingSpeed = 70; 
  const pauseDuration = 1800; 

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const fullText = dynamicParts[partIndex];
      if (isDeleting) {
        if (currentText.length > 0) {
          timer = setTimeout(() => {
            setCurrentText(fullText.substring(0, currentText.length - 1));
          }, deletingSpeed);
        } else {
          setIsDeleting(false);
          setPartIndex((prevIndex) => (prevIndex + 1) % dynamicParts.length);
        }
      } else {
        if (currentText.length < fullText.length) {
          timer = setTimeout(() => {
            setCurrentText(fullText.substring(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    handleTyping();
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, partIndex, dynamicParts, typingSpeed, deletingSpeed, pauseDuration]);


  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen animated-gradient-bg text-white py-4 sm:py-6 lg:py-8 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> {/* Darker overlay */}
      <div className="relative z-10 text-center space-y-6 sm:space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white">
          {name.split("").map((char, index) => (
            <span 
              key={index} 
              className="inline-block animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-3xl mx-auto animate-fade-in-up min-h-[3em] sm:min-h-[2.5em] md:min-h-[2em]" style={{ animationDelay: '0.5s' }}>
          I&apos;m a <span className="font-semibold text-primary">{currentText}</span>
          <span className="inline-block w-0.5 h-7 sm:h-8 md:h-9 ml-1 bg-white animate-blink align-bottom"></span>
        </p>

        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.65s' }}>
          B.Tech in Internet of Things | Web Developer | DATA Analyst Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#projects">
              View Work <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-foreground/30 text-foreground hover:bg-foreground/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#contact">
              Let&apos;s Chat <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about-me" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-foreground/70 hover:text-foreground transition-colors" />
        </Link>
      </div>
      {/* Removed local style jsx for fade-in-up as it's now global */}
    </section>
  );
}
