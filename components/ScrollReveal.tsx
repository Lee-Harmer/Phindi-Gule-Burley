"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("js-reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    // Only observe elements that haven't already animated in
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
