'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.success) {
      form.reset();
    }
  }, [state, form]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={formRef}
            action={formAction}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Inquiry about..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {state.message && !state.success && (
              <Alert variant="destructive">
                 <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
             {state.message && state.success && (
              <Alert>
                 <Terminal className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}

            <SubmitButton />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
