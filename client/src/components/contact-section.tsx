import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, MapPin, Clock, Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  business: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      business: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      setIsSubmitted(true);
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "zylnomedia@gmail.com",
      href: "mailto:zylnomedia@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Brisbane, QLD"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-title font-montserrat font-bold text-3xl md:text-4xl text-dark-gray mb-6">
              Ready to Grow Your <span className="text-bright-orange">Social Following?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Send us a message, and we'll get back to you within 24 hours with a custom strategy for your business.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-soft-blue/20 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="h-5 w-5 text-soft-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-gray">{item.title}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-soft-blue hover:text-bright-orange transition-colors duration-300"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6"
              >
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-dark-gray">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-dark-gray">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Business Name Field */}
                <FormField
                  control={form.control}
                  name="business"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-dark-gray">Business Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Café or Shop Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-dark-gray">Tell us about your goals</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your goals and how we can help grow your social media presence..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-blue focus:border-transparent transition-all duration-300 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={contactMutation.isPending || isSubmitted}
                  className="w-full bg-bright-orange text-white font-montserrat font-semibold py-4 px-6 rounded-xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : isSubmitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-3 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {/* Direct Contact Note */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Or email us directly at{" "}
              <a
                href="mailto:zylnomedia@gmail.com"
                className="text-soft-blue hover:text-bright-orange transition-colors duration-300 font-semibold"
              >
                zylnomedia@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
