import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ShoppingBag, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Merchandise | Phindi Gule",
  description:
    "Pre-order Phindi Gule's memoir and explore official merchandise.",
};

const products = [
  {
    id: "memoir",
    tag: "Pre-Order",
    tagColor: "#B83A2E",
    title: "Phindi Gule — The Memoir",
    description:
      "The full, unfiltered story of a woman who has done it all. From broadcasting booths to marathon start lines, boardrooms to a 900km run across KZN. Pre-order now to receive your copy on launch day.",
    price: "TBC",
    Icon: BookOpen,
    featured: true,
    cta: "Pre-Order Now",
    ctaHref: "mailto:info@phindigule.co.za?subject=Memoir Pre-Order",
  },
  {
    id: "tshirt",
    tag: "Coming Soon",
    tagColor: "#C9974A",
    title: "Phindi Gule Branded T-Shirt",
    description: "Official merchandise. Details and sizing coming soon.",
    price: "TBC",
    Icon: ShoppingBag,
    featured: false,
    cta: "Notify Me",
    ctaHref: "mailto:info@phindigule.co.za?subject=Merchandise Notification",
  },
  {
    id: "cap",
    tag: "Coming Soon",
    tagColor: "#C9974A",
    title: "Running Cap",
    description:
      "Phindi Gule branded running cap. Perfect for your training runs. Coming soon.",
    price: "TBC",
    Icon: ShoppingBag,
    featured: false,
    cta: "Notify Me",
    ctaHref: "mailto:info@phindigule.co.za?subject=Merchandise Notification",
  },
  {
    id: "bundle",
    tag: "Coming Soon",
    tagColor: "#C9974A",
    title: "Wellness Bundle",
    description:
      "A curated bundle of Phindi-approved wellness products. Announcement coming soon.",
    price: "TBC",
    Icon: ShoppingBag,
    featured: false,
    cta: "Notify Me",
    ctaHref: "mailto:info@phindigule.co.za?subject=Merchandise Notification",
  },
];

export default function MerchandisePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#1C1C1A] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#B83A2E] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9974A]" />
            <span className="text-[#C9974A] text-sm font-medium tracking-[0.25em] uppercase">
              Official Store
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Merchandise
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Pre-order Phindi&apos;s upcoming memoir and stay tuned for official
            branded merchandise launches.
          </p>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(
              ({ id, tag, tagColor, title, description, price, Icon, featured, cta, ctaHref }) => (
                <div
                  key={id}
                  className={`bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow reveal ${
                    featured ? "md:col-span-2 lg:col-span-1" : ""
                  } ${featured ? "border-2 border-[#B83A2E]" : "border border-gray-100"}`}
                >
                  {/* Product image placeholder */}
                  <div
                    className="h-56 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: featured
                        ? "linear-gradient(135deg, #B83A2E 0%, #1C1C1A 100%)"
                        : "linear-gradient(135deg, #FAF7F2 0%, #f0ebe2 100%)",
                    }}
                  >
                    {featured && (
                      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]" />
                    )}
                    <Icon
                      size={48}
                      className={featured ? "text-white/30" : "text-[#1C1C1A]/20"}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-bold tracking-widest uppercase text-white px-3 py-1"
                        style={{ backgroundColor: tagColor }}
                      >
                        {tag}
                      </span>
                      <span className="font-display font-semibold text-[#6B6660] text-sm">
                        {price}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-[#1C1C1A] text-xl mb-3">
                      {title}
                    </h3>
                    <p className="text-[#6B6660] text-sm leading-relaxed flex-1 mb-6">
                      {description}
                    </p>
                    <a
                      href={ctaHref}
                      className="inline-flex items-center justify-center gap-2 font-semibold text-sm py-3 px-6 transition-all"
                      style={{
                        backgroundColor: featured ? "#B83A2E" : "transparent",
                        color: featured ? "white" : "#B83A2E",
                        border: featured ? "none" : "2px solid #B83A2E",
                      }}
                    >
                      {cta} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── NOTIFY BANNER ── */}
      <section className="bg-[#C9974A] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center reveal">
          <Mail size={40} className="text-white/30 mx-auto mb-6" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Be the first to know
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Drop us an email to be notified when the memoir launches, new
            merchandise drops, and exclusive bundles become available.
          </p>
          <a
            href="mailto:info@phindigule.co.za?subject=Keep me updated on merchandise"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Mail size={16} /> info@phindigule.co.za
          </a>
        </div>
      </section>
    </>
  );
}
