import { useEffect, useState } from "react";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./stats.css";

const statistics = [
  {
    id: 1,
    value: 12,
    suffix: "",
    label: "Years Experience",
  },
  {
    id: 2,
    value: 10,
    suffix: "K",
    label: "Photos Delivered",
  },
  {
    id: 3,
    value: 300,
    suffix: "",
    label: "Events Captured",
  },
  {
    id: 4,
    value: 6,
    suffix: "",
    label: "Awards",
  },
];

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

function Counter({ value, suffix = "", duration = 1700, shouldStart }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCount(value);
      return undefined;
    }

    let animationFrameId;
    let startTime = null;

    const animateCount = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = window.requestAnimationFrame(animateCount);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [duration, shouldStart, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function StatisticItem({ statistic, index, shouldStart }) {
  return (
    <article
      style={{
        "--stat-delay": `${250 + index * 140}ms`,
      }}
      className="stats-item-reveal min-w-0 text-center"
    >
      <p
        aria-label={`${statistic.value}${statistic.suffix}`}
        className="m-0 font-number text-[clamp(82px,7vw,104px)] font-normal leading-[0.82] tracking-[0.015em] text-[#c1a082] max-[1280px]:text-[clamp(76px,7.4vw,94px)] max-[900px]:text-[clamp(78px,11vw,94px)] max-[600px]:text-[clamp(80px,25vw,100px)] max-[380px]:text-[78px]"
      >
        <span aria-hidden="true">
          <Counter
            value={statistic.value}
            suffix={statistic.suffix}
            duration={1700 + index * 100}
            shouldStart={shouldStart}
          />
        </span>
      </p>

      <p className="mb-0 mt-[18px] font-script text-[clamp(35px,3.15vw,46px)] font-normal leading-[0.9] tracking-[0.005em] text-[#545250] max-[1280px]:text-[clamp(32px,3.3vw,42px)] max-[900px]:mt-[17px] max-[900px]:text-[clamp(35px,5vw,43px)] max-[600px]:mt-4 max-[600px]:text-[clamp(37px,12vw,46px)] max-[380px]:text-[37px]">
        {statistic.label}
      </p>
    </article>
  );
}

export default function Stats() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.25,
    rootMargin: "0px 0px -60px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="stats-heading"
      className={`stats-reveal-scope section-shell min-h-[400px] w-full overflow-hidden bg-white max-[1280px]:min-h-[455px] max-[900px]:min-h-0 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <h2
          id="stats-heading"
          className="stats-heading-reveal mx-auto m-0 max-w-[770px] text-center font-primary text-[clamp(35px,3vw,43px)] font-normal uppercase leading-[1.15] tracking-[0.075em] text-[#171717] max-[1280px]:max-w-[720px] max-[1280px]:text-[39px] max-[900px]:max-w-[650px] max-[900px]:text-[clamp(31px,4.6vw,38px)] max-[900px]:tracking-[0.065em] max-[600px]:max-w-[430px] max-[600px]:text-[clamp(27px,7.3vw,34px)] max-[600px]:leading-[1.2] max-[600px]:tracking-[0.055em] max-[380px]:text-[25px]"
        >
          <span className="block max-[600px]:inline">
            Helping Couples Bring to Life
          </span>{" "}
          <span className="block max-[600px]:inline">
            Their Wedding Dreams
          </span>
        </h2>

        <div className="mt-[72px] grid grid-cols-4 items-start gap-[50px] max-[1280px]:mt-[68px] max-[1280px]:gap-8 max-[900px]:mx-auto max-[900px]:mt-[67px] max-[900px]:max-w-[700px] max-[900px]:grid-cols-2 max-[900px]:gap-x-[35px] max-[900px]:gap-y-[65px] max-[600px]:mt-[58px] max-[600px]:max-w-[400px] max-[600px]:grid-cols-1 max-[600px]:gap-[52px] max-[380px]:mt-[52px] max-[380px]:gap-[47px]">
          {statistics.map((statistic, index) => (
            <StatisticItem
              key={statistic.id}
              statistic={statistic}
              index={index}
              shouldStart={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}