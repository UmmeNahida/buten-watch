"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  "Home",
  "About",
  "Features",
  "Product",
  "Reviews",
  "Faq",
  "Contact",
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={
              scrolled
                ? "/images/logo-scroll.png"
                : "/images/logo.png"
            }
            alt="Buten logo"
            width={120}
            height={40}
            className="object-contain transition-opacity duration-300"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-500 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              } ${link === "Home" ? (scrolled ? "text-gray-900" : "text-white") : ""}`}
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#buy"
          className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full border-2 text-sm font-semibold transition-colors ${
            scrolled
              ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              : "border-white text-white hover:bg-white hover:text-blue-600"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Buy Now
        </Link>
      </div>
    </header>
  );
};
