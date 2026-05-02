import Image from "next/image";

const reasons = [
  {
    title: "High Quality Product",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus mattis nisi.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Life Time Free Updates",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus mattis nisi.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
  {
    title: "24/7 Dedicated Support",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus mattis nisi.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Why Choose The Product For Your Easy Life
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quae, rerum aut! Tempore maiores ipsum sequi porro ratione
            officia.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Watch image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <Image
                src="/images/watch-3.png"
                alt="Smart watch"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Reasons list */}
          <div className="flex-1 flex flex-col gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
