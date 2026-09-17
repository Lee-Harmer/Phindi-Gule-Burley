import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  Users,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Speaker & Moderator | Phindi Gule",
  description:
    "Book Phindi Gule as your keynote speaker or conference moderator. South Africa's most captivating broadcast voice.",
};

const services = [
  {
    Icon: Mic,
    title: "Keynote Speaking",
    description:
      "Inspiring, story-rich keynotes that connect with audiences and leave lasting impressions. Topics span communications, wellness, leadership and women in business.",
  },
  {
    Icon: Users,
    title: "Conference Moderation",
    description:
      "Phindi reads the room. Her natural ability to pick up on nonverbal cues and keep conversations flowing makes her the ideal moderator for high-stakes events.",
  },
  {
    Icon: Globe,
    title: "Corporate Events",
    description:
      "Launches, awards ceremonies, panel discussions and corporate dinners. Phindi brings energy, professionalism and warmth to every occasion.",
  },
  {
    Icon: Star,
    title: "Brand Panels & Activations",
    description:
      "As a respected brand ambassador and communicator, Phindi facilitates brand conversations that feel authentic and drive audience action.",
  },
];

const strengths = [
  "Born communicator — a household name in South African broadcasting",
  "Commands the room whether speaking to 20 or 20,000",
  "Reads nonverbal audience cues with expert precision",
  "Authentic and warm — audiences trust her immediately",
  "Contagious enthusiasm that never feels forced",
  "Equally powerful in isiZulu, English and corporate environments",
  "Over 25 years of live broadcast experience",
  "Experienced moderating conferences at regional, national and global level",
];

export default function SpeakerPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#1C1C1A] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-[#B83A2E] to-transparent" />
        <div className="absolute top-10 right-10 w-80 h-80 border border-[#C9974A]/10 rotate-45 hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9974A]" />
            <span className="text-[#C9974A] text-sm font-medium tracking-[0.25em] uppercase">
              Book for Your Next Event
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Speaker &{" "}
            <span className="text-[#C9974A]">Moderator</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
            Phindi is a born, sought-after Speaker and Moderator who is
            constantly working on improving her skills. Her contagious enthusiasm
            and authenticity allows her to connect with any audience
            effortlessly.
          </p>
          <Link href="/contact/" className="btn-primary">
            Book Phindi Now
          </Link>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-[#B83A2E] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center reveal">
          <Quote size={36} className="text-white/30 mx-auto mb-5" />
          <blockquote className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
            &ldquo;She reads the room and picks up on the audience&apos;s
            nonverbal cues with ease. Ultimately it is her contagious enthusiasm
            and authenticity that allows her to connect effortlessly.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1C1C1A] mb-4">
              What Phindi Offers
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#B83A2E] reveal"
              >
                <div className="w-12 h-12 bg-[#B83A2E]/10 rounded-full flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#B83A2E]" />
                </div>
                <h3 className="font-display font-semibold text-[#1C1C1A] text-lg mb-3">
                  {title}
                </h3>
                <p className="text-[#6B6660] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PHINDI ── */}
      <section className="bg-[#1C1C1A] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <div className="divider-gold mb-6" />
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Why audiences love Phindi
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Her ability to get her points across in a succinct way — speaking
                clearly, avoiding confusion while capturing her audience — has
                made her a household name in Broadcasting as well as the
                Corporate Sector.
              </p>
              <Link href="/contact/" className="btn-primary inline-flex items-center gap-2">
                Book for Your Event <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-3 reveal">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/10"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#C9974A] flex-shrink-0 mt-0.5"
                  />
                  <p className="text-white/70 text-sm leading-relaxed">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY PLACEHOLDER ── */}
      <section className="section-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 reveal">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-[#1C1C1A] mb-4">
              On Stage
            </h2>
            <p className="text-[#6B6660] max-w-xl mx-auto">
              Professional photos from recent events. Photo gallery expanding after upcoming shoot.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className={`aspect-square bg-gradient-to-br flex items-center justify-center reveal ${
                  n % 2 === 0
                    ? "from-[#B83A2E]/20 to-[#C9974A]/10"
                    : "from-[#1C1C1A]/10 to-[#B83A2E]/10"
                } ${n === 1 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div className="text-center">
                  <Mic size={n === 1 ? 40 : 24} className="text-[#B83A2E]/30 mx-auto mb-2" />
                  <p className="text-[#6B6660] text-xs">Photo {n}</p>
                  <p className="text-[#6B6660] text-xs opacity-60">Coming soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#C9974A] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center reveal">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to book Phindi?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Contact us today to check availability and discuss your event requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/" className="btn-outline">
              Make an Enquiry
            </Link>
            <a href="mailto:info@phindigule.co.za" className="btn-outline">
              info@phindigule.co.za
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
