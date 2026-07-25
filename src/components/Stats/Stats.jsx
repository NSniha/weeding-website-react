import { useEffect, useRef, useState } from "react";

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

function Counter({
  value,
  suffix = "",
  duration = 1700,
  shouldStart,
}) {
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
    let startTime;

    const animateCount = (currentTime) => {
      if (!startTime) {
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
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(section);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -60px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`stats-section ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="stats-heading"
    >
      <div className="stats-container">
        <h2
          id="stats-heading"
          className="stats-heading"
        >
          <span>Helping Couples Bring to Life</span>
          <span>Their Wedding Dreams</span>
        </h2>

        <div className="stats-grid">
          {statistics.map((statistic, index) => (
            <article
              key={statistic.id}
              className="stat-item"
              style={{
                "--stat-delay": `${250 + index * 140}ms`,
              }}
            >
              <p
                className="stat-item__number"
                aria-label={`${statistic.value}${statistic.suffix}`}
              >
                <Counter
                  value={statistic.value}
                  suffix={statistic.suffix}
                  shouldStart={isVisible}
                  duration={1700 + index * 100}
                />
              </p>

              <p className="stat-item__label">
                {statistic.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}