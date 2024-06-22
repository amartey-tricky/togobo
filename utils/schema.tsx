import * as v from "valibot";

export const ContactSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("Enter your name")),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.email("Enter a valid email address"),
    v.endsWith("@gmail.com", "Enter a valid gmail address"),
  ),
  message: v.pipe(v.string(), v.nonEmpty("Enter a message")),
});

export type ContactFormData = v.InferInput<typeof ContactSchema>;
