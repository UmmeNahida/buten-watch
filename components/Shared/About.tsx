import Image from "next/image";

const features = [
  "Attractive Interface with Many Options",
  "Live Chat and Instant Notification",
  "Install App with Unlimited Features",
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 max-w-lg">
          <p className="text-blue-600 text-sm font-semibold mb-3">
            About The Watch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Best and Fashionable Smart Watch For Easy Life.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada
            erat ut turpis. Praesent dapibus, neque id cursus
            faucibus, tortor neque egestas augue, eu vulputate magna
            eros eu erat. Aliquam erat volutpat.
          </p>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-gray-700 text-sm font-medium"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 5l2 2 4-4"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/about-img.jpg"
              alt="Smart watch on wrist"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
