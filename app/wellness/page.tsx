import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Apple, Sparkles, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Wellness | Phindi Gule",
  description:
    "Phindi's approach to fitness, nutrition and self-care. Inspiring women to move, nourish and care for themselves.",
};

const pillars = [
  {
    Icon: Activity,
    label: "Fitness",
    href: "/wellness/fitness/",
    color: "#B83A2E",
    description:
      "Running, yoga and movement as medicine. Phindi completed 4 Comrades Marathons and ran 900km across KZN — and she wants the same fire for you.",
    cta: "Start Moving",
  },
  {
    Icon: Apple,
    label: "Nutrition",
    href: "/wellness/nutrition/",
    color: "#C9974A",
    description:
      "Fuelling a busy, purpose-driven life. Practical, real-world nutrition advice for women who have no time for complicated diets.",
    cta: "Nourish Better",
  },
  {
    Icon: Sparkles,
    label: "Self Care",
    href: "/wellness/self-care/",
    color: "#B83A2E",
    description:
      "Rest, mindfulness and rituals that restore. Because you cannot pour from an empty cup — and Phindi knows this better than most.",
    cta: "Care for Yourself",
  },
];

export default function WellnessPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#1C1C1A] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#C9974A] via-transparent to-[#B83A2E]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9974A]" />
            <span className="text-[#C9974A] text-sm font-medium tracking-[0.25em] uppercase">
              Feel Strong · Feel Balanced · Feel Well
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Wellness <span className="text-[#C9974A]">Your Way</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            In today&apos;s fast-paced world, women often juggle multiple
            roles — professional, caregiver, homemaker and more. Self-care is
            often the first thing to go. Phindi is here to change that.
          </p>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="section-cream py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="reveal">
            <div className="divider-gold mb-6" />
            <p className="text-[#1C1C1A] text-xl leading-relaxed mb-6">
              For Phindi, fitness emerged as one of the most powerful forms of
              self-care — it saw her take up running and go on to complete
              multiple Marathons as well as successfully conquer the Ultimate
              Human Race: the Comrades Marathon.
            </p>
            <p className="text-[#6B6660] text-lg leading-relaxed">
              Exercising is not just about looking fit. It&apos;s about feeling
              strong, confident, and mentally balanced. Through her three
              wellness pillars — Fitness, Nutrition and Self Care — Phindi
              shares practical, honest and inspiring guidance updated weekly.
            </p>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1C1C1A] mb-4">
              Three Pillars of Wellness
            </h2>
            <p className="text-[#6B6660] max-w-xl mx-auto">
              Updated weekly with fresh content from Phindi&apos;s own life and
              practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map(({ Icon, label, href, color, description, cta }, i) => (
              <div
                key={label}
                className="group flex flex-col reveal"
              >
                {/* Color block header */}
                <div
                  className="p-10 flex flex-col items-center justify-center text-white text-center transition-transform group-hover:-translate-y-2"
                  style={{ backgroundColor: color }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{label}</h3>
                </div>

                {/* Card body */}
                <div className="flex-1 bg-white border border-gray-100 p-8 flex flex-col shadow-sm group-hover:shadow-md transition-shadow">
                  <p className="text-[#6B6660] leading-relaxed flex-1 mb-6">
                    {description}
                  </p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-4 transition-all"
                    style={{ color }}
                  >
                    {cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL-QUOTE ── */}
      <section className="bg-[#B83A2E] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center reveal">
          <Quote size={40} className="text-white/30 mx-auto mb-6" />
          <blockquote className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
            &ldquo;Through Running, Phindi has successfully used communication
            as a tool for societal transformation and public impact.&rdquo;
          </blockquote>
          <p className="text-white/60 text-sm">
            Her work has inspired many women who are today Comrades Marathon
            Finishers — and continue to thrive in other sport disciplines.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-cream py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center reveal">
          <h2 className="font-display text-3xl font-bold text-[#1C1C1A] mb-4">
            Ready to transform your wellness journey?
          </h2>
          <p className="text-[#6B6660] mb-8">
            Reach out to Phindi for wellness speaking engagements, collaborations or programmes.
          </p>
          <Link href="/contact/" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
