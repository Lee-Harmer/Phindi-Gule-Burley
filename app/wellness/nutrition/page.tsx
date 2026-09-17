import type { Metadata } from "next";
import Link from "next/link";
import { Apple, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nutrition | Wellness | Phindi Gule",
  description:
    "Real-world nutrition guidance from Phindi. Fuel your body for a busy, purpose-driven life.",
};

export default function NutritionPage() {
  return (
    <>
      <section
        className="pt-36 pb-16 relative overflow-hidden"
        style={{ backgroundColor: "#C9974A" }}
      >
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(255,255,255,0.05)_30px,rgba(255,255,255,0.05)_60px)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <Link
            href="/wellness/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Wellness
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Apple size={26} className="text-white" />
            </div>
            <span className="text-white/70 text-sm font-medium tracking-[0.2em] uppercase">
              Updated Weekly
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Nutrition
          </h1>
          <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
            Fuelling a busy, purpose-driven life. Practical, real-world
            nutrition advice for women who have no time for complicated diets.
          </p>
        </div>
      </section>

      <section className="section-cream py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="md:col-span-2 bg-white border border-gray-100 shadow-sm overflow-hidden reveal">
              <div className="h-64 bg-gradient-to-br from-[#C9974A]/20 to-[#B83A2E]/10 flex items-center justify-center">
                <div className="text-center">
                  <Apple size={48} className="text-[#C9974A]/30 mx-auto mb-3" />
                  <p className="text-[#6B6660] text-sm">Featured Article Image</p>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block bg-[#C9974A] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
                  Featured
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1C1C1A] mb-3">
                  Content Coming Soon
                </h2>
                <p className="text-[#6B6660] leading-relaxed mb-6">
                  Phindi will be sharing weekly nutrition tips here — meal
                  ideas, fuelling strategies for runners, and practical advice
                  that fits into a busy woman&apos;s life. Check back soon.
                </p>
                <div className="inline-flex items-center gap-2 text-[#C9974A] font-semibold text-sm">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {[1, 2].map((n) => (
              <div key={n} className="bg-white border border-gray-100 shadow-sm overflow-hidden reveal">
                <div className="h-40 bg-gradient-to-br from-[#C9974A]/10 to-[#B83A2E]/5 flex items-center justify-center">
                  <Apple size={32} className="text-[#C9974A]/20" />
                </div>
                <div className="p-6">
                  <div className="h-4 bg-gray-100 rounded mb-3 w-3/4" />
                  <div className="h-3 bg-gray-50 rounded mb-2" />
                  <div className="h-3 bg-gray-50 rounded mb-2 w-5/6" />
                  <div className="h-3 bg-gray-50 rounded w-4/6" />
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
                href="/wellness/self-care/"
                className="flex items-center justify-between p-5 bg-[#1C1C1A] text-white hover:bg-[#2e2e2b] transition-colors group"
              >
                <span className="font-semibold">Self Care</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
