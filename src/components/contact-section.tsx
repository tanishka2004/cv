
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare, Send, Loader2 } from "lucide-react";

const initialState: ContactFormState = {
  message: null,
  type: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.type === "success") {
      toast({
        title: "Message Sent!",
        description: state.message as string,
        variant: "default",
      });
      formRef.current?.reset(); // Reset form on success
    } else if (state.type === "error" && typeof state.message === 'string') {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const getErrorMessage = (field: 'name' | 'email' | 'message') => {
    if (state.type === 'error' && typeof state.message === 'object' && state.message?.[field]) {
      return state.message[field]?.[0];
    }
    return null;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get In <span className="gradient-text">Touch</span></h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Fill out the form below or send me an email.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
              <CardDescription>I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="flex items-center mb-1">
                    <User className="mr-2 h-4 w-4 text-muted-foreground" /> Your Name
                  </Label>
                  <Input type="text" id="name" name="name" placeholder="John Doe" required 
                         aria-invalid={!!getErrorMessage('name')} aria-describedby="name-error" />
                  {getErrorMessage('name') && <p id="name-error" className="text-sm text-destructive mt-1">{getErrorMessage('name')}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="flex items-center mb-1">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" /> Your Email
                  </Label>
                  <Input type="email" id="email" name="email" placeholder="john.doe@example.com" required 
                         aria-invalid={!!getErrorMessage('email')} aria-describedby="email-error" />
                  {getErrorMessage('email') && <p id="email-error" className="text-sm text-destructive mt-1">{getErrorMessage('email')}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="flex items-center mb-1">
                    <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" /> Your Message
                  </Label>
                  <Textarea id="message" name="message" placeholder="Hi Tanishka, let's collaborate on..." rows={5} required 
                            aria-invalid={!!getErrorMessage('message')} aria-describedby="message-error" />
                  {getErrorMessage('message') && <p id="message-error" className="text-sm text-destructive mt-1">{getErrorMessage('message')}</p>}
                </div>
                <div className="flex justify-end">
                  <SubmitButton />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
         <div className="text-center mt-12">
            <p className="text-muted-foreground">Alternatively, you can reach out directly:</p>
            <a href="mailto:tanishkagarg.dev@gmail.com" className="text-primary hover:underline font-medium text-lg">
              tanishkagarg.dev@gmail.com
            </a>
        </div>
      </div>
    </section>
  );
}
