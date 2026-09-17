import type { Metadata } from "next";
import Link from "next/link";
import { Radio, BookOpen, Play, Bell, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Podcast & Literature | Phindi Gule",
  description:
    "My World — Phindi's podcast and upcoming memoir. Thought-provoking content from one of South Africa's most compelling voices.",
};

const episodes = [
  { num: "01", title: "Coming Soon", desc: "First episode drops shortly after recording." },
  { num: "02", title: "Coming Soon", desc: "Episode details to be announced." },
  { num: "03", title: "Coming Soon", desc: "Episode details to be announced." },
  { num: "04", title: "Coming Soon", desc: "Episode details to be announced." },
  { num: "05", title: "Coming Soon", desc: "Episode details to be announced." },
];

export default function PodcastPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#1C1C1A] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#C9974A] via-transparent to-[#B83A2E]" />
        {/* Sound wave decorative */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center opacity-5">
          <div className="flex items-center gap-2">
            {[20, 45, 70, 55, 90, 40, 80, 35, 65, 50].map((h, i) => (
              <div
                key={i}
                className="w-3 bg-[#C9974A] rounded-full"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9974A]" />
            <span className="text-[#C9974A] text-sm font-medium tracking-[0.25em] uppercase">
              Thought-Provoking Content
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Welcome to{" "}
            <span className="text-[#C9974A] italic">&ldquo;My World&rdquo;</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
            A podcast dedicated to hosting, promoting and distributing
            thought-provoking content — episodes, show notes, multimedia
            resources and literature all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:info@phindigule.co.za"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Bell size={16} /> Notify Me When Live
            </a>
            <Link href="/merchandise/" className="btn-outline inline-flex items-center gap-2">
              <BookOpen size={16} /> Pre-order the Memoir
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE PODCAST ── */}
      <section className="section-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Podcast art placeholder */}
            <div className="reveal">
              <div className="aspect-square max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-[#1C1C1A] to-[#B83A2E] relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-tl from-[#C9974A] to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <Radio size={36} className="text-[#C9974A]" />
                  </div>
                  <div className="font-display text-3xl font-bold text-center leading-tight px-6">
                    My<br />World
                  </div>
                  <div className="mt-3 text-[#C9974A] text-sm tracking-widest uppercase">
                    Phindi Gule
                  </div>
                  <div className="mt-6 text-white/40 text-xs tracking-widest uppercase">
                    Podcast
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="divider-gold mb-6" />
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1C1C1A] mb-6 leading-tight">
                A central hub for ideas that matter
              </h2>
              <p className="text-[#6B6660] text-lg leading-relaxed mb-6">
                &ldquo;My World&rdquo; is a podcast website dedicated to hosting,
                promoting and distributing thought-provoking content. This
                podcast serves as a central hub where you can access episodes,
                show notes, and additional multimedia resources — including
                Phindi&apos;s literature.
              </p>
              <p className="text-[#6B6660] leading-relaxed mb-8">
                The first five episodes are being recorded. Stay tuned — and in
                the meantime, pre-order Phindi&apos;s upcoming memoir.
              </p>
              <a
                href="mailto:info@phindigule.co.za?subject=Notify me about My World Podcast"
                className="inline-flex items-center gap-2 text-[#B83A2E] font-semibold hover:gap-4 transition-all"
              >
                Get notified when episodes drop <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EPISODES ── */}
      <section className="bg-[#1C1C1A] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Episodes
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              First 5 episodes recording soon. Each card will populate with title,
              show notes and a listen link once live.
            </p>
          </div>

          <div className="space-y-4">
            {episodes.map(({ num, title, desc }) => (
              <div
                key={num}
                className="flex items-center gap-6 p-6 border border-white/10 hover:border-[#C9974A]/30 transition-colors group reveal"
              >
                <div className="w-14 h-14 bg-[#B83A2E]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Play size={18} className="text-[#C9974A] ml-0.5" />
                </div>
                <div className="flex-1">
                  <div className="text-[#C9974A] text-xs font-bold tracking-widest uppercase mb-1">
                    Episode {num} · My World
                  </div>
                  <div className="text-white font-semibold mb-1">{title}</div>
                  <div className="text-white/40 text-sm">{desc}</div>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 border border-white/20 text-white/40 text-xs font-medium tracking-widest uppercase">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LITERATURE / MEMOIR ── */}
      <section className="section-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="divider-crimson mb-6" />
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1C1C1A] mb-6 leading-tight">
                Literature &amp; the Memoir
              </h2>
              <p className="text-[#6B6660] text-lg leading-relaxed mb-6">
                Phindi is currently writing her memoir — the full, unfiltered
                story of a woman who has done it all: from broadcasting booths to
                marathon start lines, from boardrooms to 900km runs across the
                province she loves.
              </p>
              <p className="text-[#6B6660] leading-relaxed mb-8">
                Pre-order your copy now to be among the first to receive it on
                launch day. Available through Phindi&apos;s merchandise store.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/merchandise/" className="btn-primary inline-flex items-center gap-2">
                  <BookOpen size={16} /> Pre-order Now
                </Link>
              </div>
            </div>

            {/* Book cover placeholder */}
            <div className="reveal">
              <div className="max-w-xs mx-auto lg:mx-0 aspect-[2/3] bg-gradient-to-br from-[#B83A2E] to-[#1C1C1A] relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(255,255,255,0.03)_40px,rgba(255,255,255,0.03)_41px)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 z-10">
                  <div className="w-16 h-px bg-[#C9974A] mb-6" />
                  <div className="font-display text-4xl font-bold text-center leading-tight mb-4">
                    Phindi
                    <br />
                    <span className="text-[#C9974A]">Gule</span>
                  </div>
                  <div className="text-white/60 text-sm text-center tracking-widest uppercase mb-6">
                    Memoir
                  </div>
                  <div className="w-16 h-px bg-[#C9974A]" />
                  <p className="text-white/30 text-xs text-center mt-6 tracking-wide">
                    Cover Reveal Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
