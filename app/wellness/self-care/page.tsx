import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Self Care | Wellness | Phindi Gule",
  description:
    "Rest, mindfulness and rituals that restore. Phindi's self-care wisdom — updated weekly.",
};

export default function SelfCarePage() {
  return (
    <>
      <section className="pt-36 pb-16 relative overflow-hidden bg-[#1C1C1A]">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#C9974A] to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <Link
            href="/wellness/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Wellness
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
              <Sparkles size={26} className="text-[#C9974A]" />
            </div>
            <span className="text-[#C9974A] text-sm font-medium tracking-[0.2em] uppercase">
              Updated Weekly
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Self Care
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Rest, mindfulness and rituals that restore. Because you cannot pour
            from an empty cup — and Phindi knows this better than most.
          </p>
        </div>
      </section>

      <section className="section-cream py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="md:col-span-2 bg-white border border-gray-100 shadow-sm overflow-hidden reveal">
              <div className="h-64 bg-gradient-to-br from-[#1C1C1A]/10 to-[#C9974A]/20 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles size={48} className="text-[#C9974A]/30 mx-auto mb-3" />
                  <p className="text-[#6B6660] text-sm">Featured Article Image</p>
                </div>
              </div>
              <div className="p-8">
                <div
                  className="inline-block text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4"
                  style={{ backgroundColor: "#1C1C1A" }}
                >
                  Featured
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1C1C1A] mb-3">
                  Content Coming Soon
                </h2>
                <p className="text-[#6B6660] leading-relaxed mb-6">
                  Weekly self-care content from Phindi — mindfulness practices,
                  rest and recovery strategies, rituals for busy women, and the
                  power of saying &ldquo;no&rdquo; so you can say &ldquo;yes&rdquo; to yourself.
                </p>
                <div className="inline-flex items-center gap-2 font-semibold text-sm text-[#C9974A]">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {[1, 2].map((n) => (
              <div key={n} className="bg-white border border-gray-100 shadow-sm overflow-hidden reveal">
                <div className="h-40 bg-gradient-to-br from-[#C9974A]/10 to-[#1C1C1A]/5 flex items-center justify-center">
                  <Sparkles size={32} className="text-[#C9974A]/20" />
                </div>
                <div className="p-6">
                  <div className="h-4 bg-gray-100 rounded mb-3 w-3/4" />
                  <div className="h-3 bg-gray-50 rounded mb-2" />
                  <div className="h-3 bg-gray-50 rounded mb-2 w-5/6" />
                  <p className="text-[#6B6660] text-xs mt-4 italic">Coming soon</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h3 className="font-display text-xl font-semibold text-[#1C1C1A] mb-6">
              Also in Wellness
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/wellness/fitness/"
                className="flex items-center justify-between p-5 bg-[#B83A2E] text-white hover:bg-[#8f2c22] transition-colors group"
              >
                <span className="font-semibold">Fitness</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/wellness/nutrition/"
                className="flex items-center justify-between p-5 bg-[#C9974A] text-white hover:bg-[#a37838] transition-colors group"
              >
                <span className="font-semibold">Nutrition</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
