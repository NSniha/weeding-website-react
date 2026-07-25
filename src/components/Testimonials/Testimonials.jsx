import { useEffect, useRef, useState } from "react";

import quoteMark from "../../assets/icons/quote-mark.svg";
import testimonialOne from "../../assets/images/testimonial-1.png";
import testimonialTwo from "../../assets/images/testimonial-2.png";
import testimonialThree from "../../assets/images/testimonial-3.png";

import "./testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Luke",
    message:
      "Tessa captured every emotion so naturally. Looking through our photographs feels like reliving the most beautiful moments of our wedding day.",
    image: testimonialOne,
    imageAlt: "Sarah and Luke sharing a romantic moment on their wedding day",
  },
  {
    id: 2,
    name: "Amelia & James",
    message:
      "Every photograph feels warm, elegant, and completely authentic. Tessa made us feel comfortable and turned our memories into timeless art.",
    image: testimonialTwo,
    imageAlt: "Amelia and James smiling together during their wedding celebration",
  },
  {
    id: 3,
    name: "Olivia & Daniel",
    message:
      "From the quiet moments to the joyful celebrations, every detail was captured beautifully. We could not have imagined a more perfect experience.",
    image: testimonialThree,
    imageAlt: "Olivia and Daniel enjoying an intimate wedding moment",
  },
];

const AUTOPLAY_DELAY = 5000;
const SWIPE_DISTANCE = 45;

export default function Testimonials() {
  const sectionRef = useRef(null);
  const pointerStartX = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showNextSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const showPreviousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  };

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

        section.classList.add("is-visible");
        observer.unobserve(section);
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -70px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const autoplayTimer = window.setInterval(
      showNextSlide,
      AUTOPLAY_DELAY,
    );

    return () => {
      window.clearInterval(autoplayTimer);
    };
  }, [isPaused]);

  const handlePointerDown = (event) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    const distance = event.clientX - pointerStartX.current;

    if (Math.abs(distance) < SWIPE_DISTANCE) {
      return;
    }

    if (distance < 0) {
      showNextSlide();
      return;
    }

    showPreviousSlide();
  };

  return (
    <section
      ref={sectionRef}
      className="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <header className="testimonials__header">
        <h2
          id="testimonials-heading"
          className="testimonials__heading"
        >
          Client Testimonials
        </h2>
      </header>

      <div
        className="testimonials__slider"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div className="testimonials__viewport">
          <div
            className="testimonials__track"
            style={{
              transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className={`testimonial-slide ${
                  index === activeIndex ? "is-active" : ""
                }`}
                aria-hidden={index !== activeIndex}
                aria-label={`${index + 1} of ${testimonials.length}`}
              >
                <div className="testimonial-slide__layout">
                  <div className="testimonial-slide__card">
                    <div className="testimonial-slide__card-inner">
                      <img
                        src={quoteMark}
                        alt=""
                        className="testimonial-slide__quote"
                        aria-hidden="true"
                      />

                      <blockquote className="testimonial-slide__message">
                        {testimonial.message}
                      </blockquote>

                      <p className="testimonial-slide__name">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>

                  <figure className="testimonial-slide__media">
                    <img
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      className="testimonial-slide__image"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="testimonials__dots"
          role="tablist"
          aria-label="Choose testimonial"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              className={`testimonials__dot ${
                index === activeIndex ? "is-active" : ""
              }`}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-selected={index === activeIndex}
              role="tab"
              onClick={() => setActiveIndex(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}