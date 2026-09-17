import Link from "next/link";
import Image from "next/image";
import CounterStats from "@/components/CounterStats";
import {
  Mic, Heart, TrendingUp, ArrowRight, Radio,
  Users, Briefcase,
} from "lucide-react";

/* ── DATA ── */

const features = [
  {
    Icon: Mic,
    title: "Communications & Broadcasting",
    description:
      "Over 25 years of storytelling across Radio, Television and Corporate platforms at regional, national and global level.",
    href: "/speaker-moderator/",
    accent: "#B83A2E",
  },
  {
    Icon: Heart,
    title: "Wellness & Running",
    description:
      "Champion of healthy living and movement for women. Comrades Marathon finisher who has inspired hundreds of women to run.",
    href: "/wellness/",
    accent: "#C9974A",
  },
  {
    Icon: TrendingUp,
    title: "Business & Entrepreneurship",
    description:
      "Founding MD of Phindi Gule Marketing & Comms and the YoungStar Entrepreneur Programme for women in business.",
    href: "/about/",
    accent: "#B83A2E",
  },
];

const services = [
  {
    Icon: Mic,
    num: "01",
    title: "Speaker & Moderator",
    description:
      "Captivating keynotes and seamless conference moderation that commands every room.",
    href: "/speaker-moderator/",
  },
  {
    Icon: Heart,
    num: "02",
    title: "Wellness Advocate",
    description:
      "Running, yoga and self-care programmes designed to transform women's lives from the inside out.",
    href: "/wellness/",
  },
  {
    Icon: Radio,
    num: "03",
    title: "Podcast & Literature",
    description:
      "Thought-provoking content on the 'My World' podcast — plus Phindi's upcoming memoir.",
    href: "/podcast/",
  },
  {
    Icon: Briefcase,
    num: "04",
    title: "Brand Ambassador",
    description:
      "Authentic partnerships with brands Phindi genuinely believes in. Credibility is everything.",
    href: "/contact/",
  },
];

const brands: { name: string; logo?: string }[] = [
  { name: "Metro FM" },
  { name: "Vuma FM" },
  { name: "East Coast Radio" },
  { name: "Gagasi FM" },
  { name: "YFM" },
  { name: "New Balance", logo: "/images/sponsors/New_Balance_logo-150x150.jpg" },
  { name: "Tsonga", logo: "/images/sponsors/tsonga-150x150.jpg" },
  { name: "32Gi", logo: "/images/sponsors/32Gi-150x150.png" },
  { name: "South African Airways" },
  { name: "Old Mutual" },
  { name: "Autotrader" },
  { name: "SANBS", logo: "/images/sponsors/sansb-150x150.png" },
];

/* ── PAGE ── */

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1C1A]">

        {/* Background colour blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#B83A2E] blur-[150px] animate-blob-1 pointer-events-none" style={{ opacity: 0.55 }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#C9974A] blur-[130px] animate-blob-2 pointer-events-none" style={{ opacity: 0.45 }} />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.02,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">

          {/* Eyebrow line */}
          <div className="flex items-center gap-4 mb-10 animate-word-up">
            <div className="w-10 h-px bg-[#C9974A]" />
            <span className="text-[#C9974A] text-xs font-bold tracking-[0.35em] uppercase">
              South African Media Icon
            </span>
          </div>

          {/* Name — large, clean, two lines */}
          <h1 className="font-display font-black leading-[0.9] mb-8">
            <span className="block overflow-hidden">
              <span
                className="block text-white animate-word-up animation-delay-150"
                style={{ fontSize: "clamp(3.75rem, 10vw, 9rem)" }}
              >
                Phindi
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block text-gradient-warm animate-word-up animation-delay-300"
                style={{ fontSize: "clamp(3.75rem, 10vw, 9rem)" }}
              >
                Gule.
              </span>
            </span>
          </h1>

          {/* Tagline strip */}
          <div className="flex items-center gap-4 mb-8 animate-word-up animation-delay-450">
            <p className="text-white/55 text-sm tracking-[0.28em] uppercase font-semibold">
              Communications · Wellness · Impact
            </p>
          </div>

          {/* Description */}
          <p
            className="text-white/60 leading-relaxed mb-10 max-w-xl animate-word-up animation-delay-600"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}
          >
            Broadcaster · Speaker · Marathon Runner · Entrepreneur. A force of nature who educates, transforms and inspires women across South Africa.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-word-up animation-delay-750">
            <Link href="/contact/" className="btn-primary">Book Phindi</Link>
            <Link href="/about/" className="btn-outline">Her Story</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>


      {/* ════════════════════════════════════════════
          ANIMATED STATS
      ════════════════════════════════════════════ */}
      <CounterStats />


      {/* ════════════════════════════════════════════
          WHO IS PHINDI — split layout
      ════════════════════════════════════════════ */}
      <section className="section-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* Left — big bold statement */}
            <div className="reveal">
              <div className="divider-gold mb-8" />
              <h2
                className="font-display font-black text-[#1C1C1A] leading-[1.05] mb-8"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                Purpose-built expertise. Not accidental.
              </h2>

              <p className="text-[#6B6660] text-lg leading-relaxed mb-5">
                Phindi is a multi-skilled professional whose passion is Communications. The evolving, multi-disciplinary nature of the industry saw her deliberately identify areas aligned with her values — and build expertise in them by design.
              </p>
              <p className="text-[#6B6660] leading-relaxed mb-10">
                Over 25 years disseminating information to large audiences through Radio and Television at regional, national and global level. Whether in the boardroom or behind the MIC, her authoritative voice always lands.
              </p>

              <Link
                href="/about/"
                className="inline-flex items-center gap-3 text-[#B83A2E] font-bold tracking-wide uppercase text-sm hover:gap-5 transition-all"
              >
                Read the full story <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right — feature cards */}
            <div className="space-y-4 reveal">
              {features.map(({ Icon, title, description, href, accent }) => (
                <Link
                  key={title}
                  href={href}
                  className="flex items-start gap-5 p-6 bg-white hover:shadow-xl transition-all duration-300 group border-l-4 hover:-translate-y-1"
                  style={{ borderLeftColor: accent }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: accent + "18" }}
                  >
                    <Icon size={20} style={{ color: accent }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#1C1C1A] mb-1.5 group-hover:text-[#B83A2E] transition-colors">
                      {title}
                    </h3>
                    <p className="text-[#6B6660] text-sm leading-relaxed">{description}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#B83A2E] flex-shrink-0 mt-1 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          SERVICES — hover slide-up reveal
      ════════════════════════════════════════════ */}
      <section className="bg-[#1C1C1A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="mb-16 reveal">
            <div className="divider-gold mb-6" />
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2
                className="font-display font-black text-white leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                What Phindi Brings
              </h2>
              <p className="text-white/50 max-w-sm text-sm leading-relaxed">
                From broadcast studios to conference stages, marathon start lines to boardrooms — she shows up fully.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 reveal reveal-stagger">
            {services.map(({ Icon, num, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="relative overflow-hidden bg-[#1C1C1A] group block"
              >
                {/* Default state */}
                <div className="p-8 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                  <span className="text-[#B83A2E]/30 font-display font-black text-5xl leading-none block mb-6">
                    {num}
                  </span>
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#C9974A]" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3 leading-tight">
                    {title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{description}</p>
                </div>

                {/* Hover — crimson panel slides up */}
                <div className="absolute inset-0 bg-[#B83A2E] p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end">
                  <Icon size={32} className="text-white/40 mb-4" />
                  <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">
                    {title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{description}</p>
                  <div className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide uppercase">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9974A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          POWER QUOTE
      ════════════════════════════════════════════ */}
      <section className="bg-[#C9974A] py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute top-0 left-8 font-display font-black text-white/10 leading-none select-none pointer-events-none"
          style={{ fontSize: "18rem", lineHeight: 0.85 }}
        >
          "
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center reveal">
          <blockquote
            className="font-display font-black text-white italic leading-tight mb-10"
            style={{ fontSize: "clamp(1.6rem, 4vw, 3.25rem)" }}
          >
            "Exercising is not just about looking fit. It&apos;s about feeling strong,&nbsp;confident, and mentally balanced."
          </blockquote>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-px bg-white/40" />
            <span className="text-white/70 text-xs font-bold tracking-[0.35em] uppercase">Phindi Gule</span>
            <div className="w-16 h-px bg-white/40" />
          </div>

          <Link href="/wellness/" className="btn-outline inline-block">
            Explore Wellness
          </Link>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          BRANDS — light background, clearly visible
      ════════════════════════════════════════════ */}
      <section className="bg-[#FAF7F2] py-16 border-t border-[#1C1C1A]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center reveal">
          <p className="text-[#6B6660] text-xs tracking-[0.3em] uppercase font-semibold">
            Brands &amp; Stations
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="inline-flex items-center px-10 flex-shrink-0">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={90}
                    height={45}
                    className="h-10 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
                  />
                ) : (
                  <span className="font-display font-bold text-[#1C1C1A]/45 text-sm tracking-widest uppercase hover:text-[#B83A2E] transition-colors">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          PODCAST TEASER
      ════════════════════════════════════════════ */}
      <section className="section-cream py-24 lg:py-32 border-t border-[#1C1C1A]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — podcast visual */}
            <div className="reveal order-2 lg:order-1">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="bg-[#1C1C1A] p-12 flex flex-col items-start border-l-4 border-[#B83A2E]">
                  <Radio size={36} className="text-[#C9974A] mb-6" />
                  <div
                    className="font-display font-black text-white italic leading-tight mb-3"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                  >
                    My<br />World
                  </div>
                  <div className="text-[#C9974A] text-xs tracking-[0.3em] uppercase font-bold mb-8">
                    Podcast
                  </div>
                  <div className="bg-[#B83A2E] text-white text-xs font-bold tracking-widest uppercase px-4 py-2">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className="reveal order-1 lg:order-2">
              <div className="divider-crimson mb-6" />
              <h2
                className="font-display font-black text-[#1C1C1A] leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Welcome to{" "}
                <span className="text-gradient italic">&ldquo;My World&rdquo;</span>
              </h2>
              <p className="text-[#6B6660] text-lg leading-relaxed mb-4">
                A podcast dedicated to hosting and distributing thought-provoking content — episodes, show notes, multimedia resources and Phindi&apos;s upcoming memoir, all in one place.
              </p>
              <p className="text-[#6B6660] text-sm mb-10">
                Five episodes recording now. Be first to listen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/podcast/" className="btn-primary">Explore Podcast</Link>
                <Link href="/merchandise/" className="btn-outline-dark">Pre-order Memoir</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════ */}
      <section className="bg-[#B83A2E] py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center font-display font-black text-white/[0.04] leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
        >
          PHINDI
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center reveal">
          <div className="divider-white mx-auto mb-8" />
          <h2
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Ready to bring Phindi to your stage?
          </h2>
          <p className="text-white/65 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Conference. Corporate event. Brand partnership. Wellness programme. Let&apos;s talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/" className="btn-outline">Get in Touch</Link>
            <a href="mailto:info@phindigule.co.za" className="btn-gold">
              info@phindigule.co.za
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
