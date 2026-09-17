import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Radio, Heart, Users, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About Phindi | Phindi Gule",
  description:
    "Broadcaster, speaker, Comrades Marathon finisher, entrepreneur. The full story of Phindi Gule.",
};

const milestones = [
  {
    year: "Early Career",
    Icon: Radio,
    title: "Metro FM Newsreader",
    description:
      "Phindi began her radio journey as a newsreader at Metro FM — one of South Africa's most listened-to stations. The start of an extraordinary career in broadcast.",
  },
  {
    year: "Multi-Station",
    Icon: Radio,
    title: "Voice of Soweto · YFM · Gagasi FM · East Coast Radio",
    description:
      "Hosted shows across multiple stations, building an audience and reputation for engaging, authentic broadcasting that connected deeply with listeners.",
  },
  {
    year: "Corporate World",
    Icon: Briefcase,
    title: "South African Airways · Autotrader · Old Mutual",
    description:
      "Transitioned into the corporate sector, demonstrating her versatility and strategic communication skills across blue-chip South African companies.",
  },
  {
    year: "2012",
    Icon: Heart,
    title: "First Comrades Marathon",
    description:
      "Just 8 months after starting running, Phindi completed the Comrades Marathon — one of the world's most gruelling ultra-marathons. The first KZN-based radio personality to finish the race.",
  },
  {
    year: "Leadership",
    Icon: Award,
    title: "Led Vuma FM to New Heights",
    description:
      "As the leader of Vuma FM, KZN's rapidly growing station, Phindi drove the station to significant success in under two years — cementing her reputation as a media powerhouse.",
  },
  {
    year: "April 2016",
    Icon: Heart,
    title: "900km Across KZN",
    description:
      "Phindi and her husband Kevin Burley made history by becoming the first people to run the entire length of KwaZulu-Natal — from the Mozambique border to Port Edward. A total of 900km.",
  },
  {
    year: "Founding",
    Icon: Users,
    title: "Phindi Gule Marketing & Comms · YoungStar Entrepreneur",
    description:
      "Launched her own marketing and communications company and the YoungStar Entrepreneur programme — a platform aimed at strengthening support for women entrepreneurs and investing in their businesses.",
  },
];

const qualities = [
  { label: "Academic Background", value: "Chemical Engineering & Journalism" },
  { label: "Marathon Finishes", value: "4 × Comrades Marathon" },
  { label: "Record", value: "First KZN radio personality to finish Comrades" },
  { label: "Historic Run", value: "900km length of KZN (2016)" },
  { label: "Years in Broadcasting", value: "25+" },
  { label: "Company", value: "Phindi Gule Marketing & Comms" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1C1C1A] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9974A]" />
            <span className="text-[#C9974A] text-sm font-medium tracking-[0.25em] uppercase">
              The Story Behind the Voice
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            About <span className="text-[#C9974A]">Phindi</span> Gule
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Broadcaster. Speaker. Marathon runner. Entrepreneur. Wellness
            advocate. Phindi Gule is a South African icon who has spent over 25
            years at the intersection of Communications, Purpose and Impact.
          </p>
        </div>
      </section>

      {/* ── BIO SECTION ── */}
      <section className="section-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Sidebar: image placeholder + quick facts */}
            <div className="lg:col-span-2 reveal">
              {/* Photo placeholder — swap for real photo */}
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#B83A2E] to-[#C9974A] flex items-center justify-center relative overflow-hidden mb-8">
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]" />
                <div className="text-center text-white z-10 p-8">
                  <div className="font-display text-6xl font-bold mb-2 opacity-40">PG</div>
                  <p className="text-white/60 text-sm">
                    Photo coming soon
                  </p>
                </div>
              </div>

              {/* Quick facts */}
              <div className="bg-white p-6 shadow-sm">
                <h3 className="font-display font-semibold text-[#1C1C1A] mb-4 text-sm tracking-widest uppercase">
                  At a Glance
                </h3>
                <ul className="space-y-3">
                  {qualities.map(({ label, value }) => (
                    <li key={label} className="flex flex-col border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                      <span className="text-xs text-[#6B6660] uppercase tracking-widest">{label}</span>
                      <span className="font-medium text-[#1C1C1A] text-sm mt-0.5">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main bio text */}
            <div className="lg:col-span-3 reveal">
              <div className="divider-gold mb-6" />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1C1C1A] mb-6 leading-tight">
                Founding MD · Broadcaster · Marathon Runner · Change-Maker
              </h2>

              <div className="space-y-5 text-[#6B6660] leading-relaxed">
                <p>
                  Phindi is the Founding MD of Phindi Gule Marketing & Comms as
                  well as YoungStar Entrepreneur — a programme aimed at
                  strengthening support for women entrepreneurs and investing in
                  their businesses.
                </p>
                <p>
                  A prominent figure in South African media, Phindi began her
                  radio journey as a newsreader at Metro FM. She went on to host
                  shows on Voice of Soweto, YFM, East Coast Radio and Gagasi FM.
                  She managed Score Super Markets&apos; radio and holds academic
                  credentials in both Chemical Engineering and Journalism.
                </p>
                <p>
                  Beyond radio, Phindi worked in the corporate sector with South
                  African Airways, Autotrader, and Old Mutual. Her leadership
                  skills shone as she led Vuma FM — KZN&apos;s rapidly growing
                  station — to significant success in under two years.
                </p>
                <p>
                  Remarkably, amidst her busy life, Phindi trained to complete
                  the challenging Comrades Marathon in 2012, just 8 months after
                  starting running. As the first KZN-based radio personality to
                  finish the race, she has since completed four Comrades
                  Marathons — emphasising her commitment to health and inspiring
                  countless others.
                </p>
                <p>
                  In April 2016, Phindi and her husband Kevin Burley made
                  history by becoming the first people to run the length of
                  KwaZulu-Natal — from the Mozambique border to Port Edward — a
                  total of 900km. Nothing will ever stop Phindi from reaching
                  her goals and pushing the boundaries.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact/" className="btn-primary">
                  Book Phindi
                </Link>
                <Link
                  href="/speaker-moderator/"
                  className="inline-flex items-center gap-2 text-[#B83A2E] font-semibold hover:gap-4 transition-all py-2"
                >
                  Speaking & Moderation <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-[#1C1C1A] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              The Journey
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Every milestone has been earned with intention.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-px" />

            <div className="space-y-10">
              {milestones.map(({ year, Icon, title, description }, i) => (
                <div
                  key={title}
                  className={`relative flex gap-8 reveal ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 top-3 w-3 h-3 bg-[#C9974A] rounded-full -translate-x-1.5 lg:-translate-x-1.5 ring-4 ring-[#1C1C1A] z-10" />

                  {/* Content */}
                  <div
                    className={`ml-16 lg:ml-0 lg:w-1/2 ${
                      i % 2 === 0 ? "lg:pr-16 text-left" : "lg:pl-16 text-left"
                    }`}
                  >
                    <div className="bg-white/5 border border-white/10 p-6 hover:border-[#C9974A]/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-[#B83A2E]/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-[#C9974A]" />
                        </div>
                        <span className="text-[#C9974A] text-xs font-bold tracking-widest uppercase">
                          {year}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-white text-lg mb-2">
                        {title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUNGSTAR / COMPANY ── */}
      <section className="bg-[#C9974A] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center reveal">
          <div className="divider-crimson mx-auto mb-6" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
            YoungStar Entrepreneur Programme
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Phindi&apos;s YoungStar Entrepreneur programme is aimed at
            strengthening support for women entrepreneurs and investing in their
            businesses. Because when women rise, communities transform.
          </p>
          <Link href="/contact/" className="btn-outline inline-block">
            Partner with Phindi
          </Link>
        </div>
      </section>
    </>
  );
}
