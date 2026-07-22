export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[680px] overflow-hidden bg-neutral-700 sm:min-h-[760px] lg:min-h-screen"
    >
      {/* Animated background */}

      <div
        aria-hidden="true"
        className="hero-background absolute inset-0 bg-[url('/images/wedding-hero.png')] bg-cover bg-[position:43%_center] sm:bg-[position:45%_center] lg:bg-center"
      />

      {/* Light cinematic overlay */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/5 via-black/5 to-black/15"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/5"
      />

      {/* Hero content */}

      <div className="relative z-10 mx-auto flex w-[calc(100%-36px)] max-w-[1280px] flex-1 items-center justify-center pb-16 pt-[145px] text-center sm:w-[calc(100%-64px)] sm:pb-20 sm:pt-[175px] lg:w-[calc(100%-100px)] lg:pb-10 lg:pt-[180px]">
        <div className="flex max-w-[1120px] flex-col items-center">
          <p className="animate-subtitle font-script text-[42px] leading-[1.1] text-[#cdb194] drop-shadow-sm sm:text-[55px] md:text-[65px] lg:text-[69px]">
            Your Dream Wedding Awaits
          </p>

          <h1
            id="hero-title"
            className="animate-title mt-5 max-w-[1100px] text-[44px] font-medium leading-[0.98] tracking-[-0.025em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.12)] sm:mt-7 sm:text-[61px] md:text-[73px] lg:text-[82px] xl:text-[86px]"
          >
            Artistic Wedding Photography
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="animate-scroll absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/85 sm:bottom-10"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">
          Scroll
        </span>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            d="M5 9L12 16L19 9"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}