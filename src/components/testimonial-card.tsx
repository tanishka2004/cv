import type { Testimonial } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
        />
      );
    }
    return stars;
  };

  return (
    <Card className="flex flex-col h-full bg-card shadow-lg overflow-hidden">
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-4">
            {testimonial.avatarUrl ? (
               <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint={testimonial.dataAiHint || "person"} />
            ) : (
              <AvatarImage src={`https://placehold.co/100x100.png?text=${testimonial.author.substring(0,1)}`} alt={testimonial.author} data-ai-hint={testimonial.dataAiHint || "person"} />
            )}
            <AvatarFallback>{testimonial.author.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg font-semibold">{testimonial.author}</CardTitle>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        <blockquote className="italic text-muted-foreground text-sm leading-relaxed">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t border-border/50 mt-auto">
        <div className="flex items-center gap-1">{renderStars(testimonial.rating)}</div>
      </CardFooter>
    </Card>
  );
}
