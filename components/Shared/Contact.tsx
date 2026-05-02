"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    lines: ["+09 12345 67890", "+02 12345 67890"],
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    lines: ["support@email.com", "info@email.com"],
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    lines: ["67/A Lake View", "New York, USA"],
  },
];

const inputClass =
  "w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-white";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Need Help? Don&apos;t Forget to Contact With Us
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quae, rerum aut! Tempore maiores ipsum sequi porro ratione
            officia.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6 md:w-64 shrink-0">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded border border-blue-100 bg-white flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  {item.lines.map((line) => (
                    <span
                      key={line}
                      className="text-sm text-gray-600"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="flex-1">
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-48">
                <p className="text-blue-600 font-semibold text-lg">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={inputClass}
                />
                <textarea
                  name="message"
                  placeholder="Write Your Message*"
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                />
                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded text-sm transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
