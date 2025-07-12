
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/tanishka2004', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanishkajain01/', icon: Linkedin }, // Replace with actual LinkedIn
  { label: 'Email', href: 'mailto:jtanishka31@gmail.com', icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border/50 py-8 text-card-foreground">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Tanishka Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
