import Image from "next/image";

const coreFeatures = [
  {
    title: "User Friendly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.",
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Unlimited Features",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.",
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
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "High Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.",
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
    title: "Free Updates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.",
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
];

export const CoreFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Outstanding Core Features of The Product
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quae, rerum aut! Tempore maiores Ipsum sequi porro ratione
            officia.
          </p>
        </div>

        {/* Content: cards + watch image */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 2x2 grid of cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3"
              >
                <div className="text-blue-600">{f.icon}</div>
                <h3 className="text-sm font-bold text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* Watch image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <Image
                src="/images/watch-2.png"
                alt="Smart watch product"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
