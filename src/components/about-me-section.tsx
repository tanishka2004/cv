
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function AboutMeSection() {
  return (
    <section id="about-me" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About <span className="gradient-text">Me</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="relative w-52 h-72 mb-4 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://placehold.co/200x280.png?text=Resume+Preview"
                alt="Resume Preview"
                width={200}
                height={280}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint="document resume"
              />
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transform hover:scale-105 transition-transform duration-300">
              <Link href="/resume.pdf" target="_blank" download="Tanishka_Jain_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="md:col-span-2 text-muted-foreground text-lg space-y-6">
            <p>
              I am Tanishka Jain, a third-year B.Tech student at Samrat Ashok Technological Institute, specializing in the Internet of Things (IoT). With a strong interest in innovation and technology, I focus on building impactful solutions that bridge software and hardware.
            </p>
            <p>
              My skill set spans across web development, embedded systems, and AI-powered applications. I enjoy working on diverse projects—from secure C++ utilities and smart IoT devices to full-stack web platforms using React, JavaScript, and TailwindCSS.
            </p>
            <p>
              I’m passionate about open-source, hackathons, and real-world problem solving. Always curious and constantly learning, I thrive on collaboration, creativity, and creating technology that makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
