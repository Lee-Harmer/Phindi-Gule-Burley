"use client";

import type { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
  TwitterXIcon,
} from "@/components/SocialIcons";

const enquiryTypes = [
  "Keynote Speaking",
  "Conference Moderation",
  "Corporate Event",
  "Brand Partnership / Ambassador",
  "Wellness Programme",
  "Podcast Collaboration",
  "Media / PR",
  "Merchandise / Pre-order",
  "General Enquiry",
];

const socials = [
  {
    href: "https://www.instagram.com/phindiguleburley/",
    Icon: InstagramIcon,
    label: "Instagram",
    handle: "@phindiguleburley",
  },
  {
    href: "https://www.facebook.com/TheePhindiGule/",
    Icon: FacebookIcon,
    label: "Facebook",
    handle: "TheePhindiGule",
  },
  {
    href: "https://www.youtube.com/@phindigule",
    Icon: YoutubeIcon,
    label: "YouTube",
    handle: "@phindigule",
  },
  {
    href: "https://www.linkedin.com/in/phindigule",
    Icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "Phindi Gule",
  },
  {
    href: "https://twitter.com/PhindiGule",
    Icon: TwitterXIcon,
    label: "X / Twitter",
    handle: "@PhindiGule",
  },
];

const ContactPage: FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formspree action — replace FORM_ID with actual Formspree form ID
    const subject = `${form.enquiryType || "Enquiry"} from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEnquiry Type: ${form.enquiryType}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:info@phindigule.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#1C1C1A] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#B83A2E] via-transparent to-[#C9974A]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9974A]" />
            <span className="text-[#C9974A] text-sm font-medium tracking-[0.25em] uppercase">
              Let&apos;s Connect
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Contact &amp;{" "}
            <span className="text-[#C9974A]">Bookings</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Whether you&apos;re looking to book Phindi for an event, explore a
            brand partnership or simply get in touch — we&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact details + socials */}
            <div className="lg:col-span-2 reveal">
              <div className="divider-gold mb-6" />
              <h2 className="font-display text-3xl font-bold text-[#1C1C1A] mb-8">
                Get in Touch
              </h2>

              {/* Direct contact */}
              <div className="space-y-5 mb-10">
                <a
                  href="mailto:info@phindigule.co.za"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#B83A2E] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6660] uppercase tracking-widest mb-0.5">
                      Email
                    </div>
                    <div className="font-medium text-[#1C1C1A] group-hover:text-[#B83A2E] transition-colors">
                      info@phindigule.co.za
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+27607498222"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#C9974A] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6660] uppercase tracking-widest mb-0.5">
                      Mobile
                    </div>
                    <div className="font-medium text-[#1C1C1A] group-hover:text-[#C9974A] transition-colors">
                      060 749 8222
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1C1C1A] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6660] uppercase tracking-widest mb-0.5">
                      Based in
                    </div>
                    <div className="font-medium text-[#1C1C1A]">
                      KwaZulu-Natal, South Africa
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <h3 className="font-display font-semibold text-sm tracking-widest uppercase text-[#6B6660] mb-5">
                Follow Phindi
              </h3>
              <div className="space-y-3">
                {socials.map(({ href, Icon, label, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#1C1C1A] hover:text-[#B83A2E] transition-colors group"
                  >
                    <div className="w-8 h-8 border border-gray-200 flex items-center justify-center group-hover:border-[#B83A2E] transition-colors flex-shrink-0">
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="text-xs text-[#6B6660]">{label}</div>
                      <div className="text-sm font-medium">{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-3 reveal">
              <div className="bg-white p-8 lg:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-[#B83A2E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={28} className="text-[#B83A2E]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#1C1C1A] mb-3">
                      Thank you!
                    </h3>
                    <p className="text-[#6B6660] mb-6">
                      Your email client should have opened. If not, please email
                      us directly at{" "}
                      <a
                        href="mailto:info@phindigule.co.za"
                        className="text-[#B83A2E] font-medium"
                      >
                        info@phindigule.co.za
                      </a>
                    </p>
                    <Link href="/" className="btn-primary inline-block">
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-[#1C1C1A] mb-2">
                      Send an Enquiry
                    </h2>
                    <p className="text-[#6B6660] text-sm mb-8">
                      Fill in the form below and we&apos;ll be in touch as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-widest mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#B83A2E] transition-colors bg-[#FAF7F2]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-widest mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#B83A2E] transition-colors bg-[#FAF7F2]"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-widest mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+27 xx xxx xxxx"
                            className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#B83A2E] transition-colors bg-[#FAF7F2]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-widest mb-2">
                            Type of Enquiry *
                          </label>
                          <select
                            name="enquiryType"
                            required
                            value={form.enquiryType}
                            onChange={handleChange}
                            className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#B83A2E] transition-colors bg-[#FAF7F2] appearance-none"
                          >
                            <option value="">Select a type…</option>
                            {enquiryTypes.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1C1C1A] uppercase tracking-widest mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          value={form.message}
                          onChange={handleChange}
                          rows={6}
                          placeholder="Tell us about your event, project or enquiry…"
                          className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#B83A2E] transition-colors bg-[#FAF7F2] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                      >
                        <Send size={16} />
                        Send Enquiry
                      </button>

                      <p className="text-[#6B6660] text-xs text-center">
                        Or email us directly at{" "}
                        <a
                          href="mailto:info@phindigule.co.za"
                          className="text-[#B83A2E] font-medium"
                        >
                          info@phindigule.co.za
                        </a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
