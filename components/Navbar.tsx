"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/wellness/", label: "Wellness" },
  { href: "/speaker-moderator/", label: "Speaker & Moderator" },
  { href: "/podcast/", label: "Podcast & Literature" },
  { href: "/merchandise/", label: "Merchandise" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const solidBg = scrolled || menuOpen || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* On solid bg: full colour logo. On transparent (hero): white-tinted version */}
            {solidBg ? (
              <Image
                src="/images/logo/PG_Logo_2018.png"
                alt="Phindi Gule"
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            ) : (
              <Image
                src="/images/logo/PG_Logo_2018.png"
                alt="Phindi Gule"
                width={140}
                height={36}
                className="h-9 w-auto object-contain brightness-0 invert"
                priority
              />
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace(/\/$/, ""));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors relative group ${
                    solidBg
                      ? active
                        ? "text-[#B83A2E]"
                        : "text-[#1C1C1A] hover:text-[#B83A2E]"
                      : active
                      ? "text-[#C9974A]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#B83A2E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                      active ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact/"
              className="ml-4 btn-primary text-xs px-5 py-2.5"
            >
              Book Phindi
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              solidBg ? "text-[#1C1C1A]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          menuOpen ? "max-h-[600px] shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1 border-t border-gray-100">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace(/\/$/, ""));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-2 text-sm font-medium border-b border-gray-50 transition-colors ${
                  active ? "text-[#B83A2E]" : "text-[#1C1C1A] hover:text-[#B83A2E]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact/" className="mt-4 btn-primary text-center text-sm">
            Book Phindi
          </Link>
        </nav>
      </div>
    </header>
  );
}
