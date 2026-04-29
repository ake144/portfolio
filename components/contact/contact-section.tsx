"use client";

import SocialButtons from "@/components/ui/social-buttons";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Email",
    value: "tamiratake@gmail.com",
    href: "mailto:tamiratake@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+251 954234576",
    href: "tel:+251954234576",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    icon: MapPin,
  },
];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok || response.status === 200) {
        toast.success("Email sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        const result = await response.json();
        toast.error(result.message || "Failed to send email");
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-20">
      <div className="card flex flex-col items-center text-center max-w-2xl w-full">
        <p className="badge mb-4">CONTACT</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-4 tracking-tight" style={{ letterSpacing: "0.04em" }}>
          Let's Connect
        </h2>
        <p className="text-lg text-white/70 max-w-xl mb-6">Fill out the form below or reach out directly.</p>
        <SocialButtons />

        <form onSubmit={handleSubmit} className="w-full mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input name="name" type="text" required placeholder="Name" className="input" />
            <input name="email" type="email" required placeholder="Email" className="input" />
          </div>

          <input name="company" type="text" placeholder="Company (optional)" className="input w-full" />
          <textarea name="message" required placeholder="Message" className="input w-full min-h-[120px]" />

          <button type="submit" className="button w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="flex flex-col items-center gap-2 mt-8 w-full">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-center gap-2 text-white/80">
              {detail.icon && <detail.icon className="h-4 w-4" />}
              {detail.href ? (
                <Link href={detail.href} className="underline hover:text-[var(--accent)]">
                  {detail.value}
                </Link>
              ) : (
                <span>{detail.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
