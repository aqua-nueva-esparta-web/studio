'use server';

import { z } from 'zod';
import {
  askInvestmentQuestion as performInvestmentQuestion,
  type InvestmentQuestionInput,
} from '@/ai/flows/investment-viability-analysis';

// Schema for contact form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  success: boolean;
};

// Action to handle contact form submission
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message:
        validatedFields.error.errors.map((e) => e.message).join(', ') ||
        'An unknown validation error occurred.',
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it and return a success message.
  console.log('Contact form submitted:', validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    success: true,
  };
}

// Action to handle the investment question AI flow
export async function askInvestmentQuestion(input: InvestmentQuestionInput) {
  'use server';
  try {
    const result = await performInvestmentQuestion(input);
    return result;
  } catch (error) {
    console.error('Error in askInvestmentQuestion action:', error);
    return {
      answer:
        'An error occurred while processing your question. Please try again later.',
    };
  }
}
