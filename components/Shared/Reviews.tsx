"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    name: "Jack Morkel",
    role: "Marketer",
    image: "/images/client-1.jpg",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.",
  },
  {
    name: "Adam Smith",
    role: "Marketer",
    image: "/images/client-2.jpg",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.",
  },
  {
    name: "Shane Kyle",
    role: "Marketer",
    image: "/images/client-3.jpg",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.",
  },
];

export const Reviews = () => {
  const [active, setActive] = useState(0);
  const current = reviews[active];

  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner-1.jpg')" }}
        aria-hidden="true"
      />
      {/* Blue overlay */}
      <div
        className="absolute inset-0 "
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Customer Reviews
        </h2>
        <p className="text-blue-100 text-sm leading-relaxed mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quae, rerum aut! Tempore maiores ipsum sequi porro ratione
          officia.
        </p>

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/30">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Name & role */}
        <h3 className="text-white font-bold text-base">
          {current.name}
        </h3>
        <p className="text-blue-200 text-xs mb-5">{current.role}</p>

        {/* Review text */}
        <p className="text-white/90 text-sm italic leading-relaxed mb-6 max-w-lg mx-auto">
          {current.review}
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={i < current.rating ? "#FBBF24" : "none"}
              stroke="#FBBF24"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-white" : "w-5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
