import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white overflow-hidden flex items-center pt-16"
    >
      {/* Banner background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-1.png"
          alt=""
          fill
          className="object-cover object-left-bottom"
          loading="eager"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        {/* Text content */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Best Landing Page For Online Product Marketing
          </h1>
          <p className="text-blue-100 text-base leading-relaxed mb-10 max-w-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada
            erat ut turpis. Suspendisse urna nibh, viverra non.
          </p>
          <a
            href="#order"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-7 py-4 rounded-full transition-colors"
          >
            <svg
              width="16"
              height="16"
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
            Order Now
          </a>
        </div>

        {/* Product image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-96 h-96 md:w-[520px] md:h-[520px]">
            <Image
              src="/images/watch-1.png"
              alt="Smart Watch product"
              fill
              className="object-contain drop-shadow-2xl animate-float"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
