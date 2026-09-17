import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
  TwitterXIcon,
} from "@/components/SocialIcons";

const navLinks = [
  { href: "/about/", label: "About" },
  { href: "/wellness/", label: "Wellness" },
  { href: "/speaker-moderator/", label: "Speaker & Moderator" },
  { href: "/podcast/", label: "Podcast & Literature" },
  { href: "/merchandise/", label: "Merchandise" },
  { href: "/contact/", label: "Contact & Bookings" },
];

const socials = [
  {
    href: "https://www.instagram.com/phindiguleburley/",
    Icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/TheePhindiGule/",
    Icon: FacebookIcon,
    label: "Facebook",
  },
  { href: "https://www.youtube.com/@phindigule", Icon: YoutubeIcon, label: "YouTube" },
  { href: "https://www.linkedin.com/in/phindigule", Icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com/PhindiGule", Icon: TwitterXIcon, label: "X / Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1A] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo/PG_Logo_2018.png"
                alt="Phindi Gule"
                width={140}
                height={36}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Communications. Wellness. Impact. <br />
              Inspiring women to lead with purpose, run with passion, and live with intention.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C9974A] hover:bg-[#C9974A]/10 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#C9974A] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#C9974A] mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>Keynote Speaking</li>
              <li>Conference Moderation</li>
              <li>Corporate Events</li>
              <li>Brand Ambassadorship</li>
              <li>Media & PR Consulting</li>
              <li>Wellness Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-[#C9974A] mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@phindigule.co.za"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail size={15} className="text-[#C9974A] flex-shrink-0" />
                  info@phindigule.co.za
                </a>
              </li>
              <li>
                <a
                  href="tel:+27607498222"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone size={15} className="text-[#C9974A] flex-shrink-0" />
                  060 749 8222
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/contact/" className="btn-primary text-xs px-5 py-2.5">
                Book Phindi
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Phindi Gule. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Phindi Gule Marketing & Comms · YoungStar Entrepreneur Programme
          </p>
        </div>
      </div>
    </footer>
  );
}
