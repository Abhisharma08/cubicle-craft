'use server';

import { z } from 'zod';
import { appendToSheet } from '@/services/google-sheets';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .min(10, { message: "Please enter a valid phone number." }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message must not be longer than 500 characters.",
    }),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
    const validatedFields = formSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid data provided.' };
    }
    
    const result = await appendToSheet(validatedFields.data);

    if (!result.success) {
      console.error('Failed to append to sheet:', result.error);
      return { error: 'There was a problem saving your message. Please try again later.' };
    }
    
    return { success: 'Your message has been sent successfully!' };
}
