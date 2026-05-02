export const DemoVideo = () => {
  return (
    <section id="product" className="relative py-24 overflow-hidden">
      {/* Background image with blue overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner-1.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-blue-600/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Product Demo Video
        </h2>
        <p className="text-blue-100 text-sm leading-relaxed max-w-md mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quae, rerum aut! Tempore maiores ipsum sequi porro ratione
          officia.
        </p>

        {/* Play button with bounce */}
        <button
          aria-label="Play demo video"
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg animate-bounce hover:scale-110 transition-transform duration-200"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <polygon points="5,3 19,12 5,21" fill="#2563EB" />
          </svg>
        </button>
      </div>
    </section>
  );
};
