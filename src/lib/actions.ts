
"use server";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormState = {
  message: string | { name?: string[]; email?: string[]; message?: string[] };
  type: "success" | "error" | null;
  timestamp?: number; // To ensure re-render on subsequent submissions
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      const fieldErrors = validatedFields.error.flatten().fieldErrors;
      return {
        message: {
          name: fieldErrors.name,
          email: fieldErrors.email,
          message: fieldErrors.message,
        },
        type: "error",
        timestamp: Date.now(),
      };
    }

    const { name, email, message } = validatedFields.data;

    // In a real app, you'd save this to Firestore.
    // For now, we'll just log it to the console.
    console.log("New Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Example: Simulate saving to Firestore
    // try {
    //   const { getFirestore } = await import('firebase-admin/firestore'); // Dynamic import if using Firebase Admin SDK
    //   const db = getFirestore();
    //   await db.collection("contacts").add({ name, email, message, submittedAt: new Date() });
    // } catch (error) {
    //   console.error("Firestore submission error:", error);
    //   return { message: "Failed to save your message due to a server error. Please try again later.", type: "error", timestamp: Date.now() };
    // }

    return { message: "Thank you for your message! I'll get back to you soon.", type: "success", timestamp: Date.now() };
  } catch (error) {
    console.error("Unexpected error in submitContactForm:", error);
    return {
      message: "An unexpected error occurred on the server. Please try again.",
      type: "error",
      timestamp: Date.now(),
    };
  }
}
