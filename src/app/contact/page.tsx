import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg font-headline text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Fill out the form
            below or reach out via email or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground p-6 flex items-start space-x-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground font-headline">
                  Send us an email
                </p>
                <a
                  href="mailto:dobsdesigns101@gmail.com"
                  className="text-primary font-headline hover:underline"
                >
                  dobsdesigns101@gmail.com
                </a>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground p-6 flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold ">Phone</h3>
                <p className="text-muted-foreground font-headline">
                  Call or whatsup
                </p>
                <a
                  href="tel:+265884022590"
                  className="text-primary hover:underline font-headline"
                >
                  +265(0)884 022 590
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
