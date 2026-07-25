import { useEffect, useRef } from "react";

import coupleImage from "../../assets/images/featured-couple.png";
import brideImage from "../../assets/images/featured-bride.png";

import "./featured-story.css";

export default function FeaturedStory() {
  const sectionRef = useRef(null);

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

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="featured-story"
      aria-labelledby="featured-story-heading"
    >
      <header className="featured-story__header">
        <p className="featured-story__eyebrow featured-story__heading-reveal">
          Portfolio
        </p>

        <h2
          id="featured-story-heading"
          className="featured-story__heading featured-story__heading-reveal"
        >
          Featured Story
        </h2>
      </header>

      <div className="featured-story__stage">
        <article className="featured-story__information">
          <div className="featured-story__information-inner">
            <p className="featured-story__number">01</p>

            <h3 className="featured-story__couple-name">
              Ricardo &amp; Michelle
            </h3>

            <p className="featured-story__description">
              A romantic celebration filled with quiet glances, joyful
              laughter, and beautifully captured moments that will remain
              timeless forever.
            </p>
          </div>
        </article>

        <figure className="featured-story__image-frame featured-story__image-frame--main">
          <img
            src={coupleImage}
            alt="Ricardo and Michelle sharing a romantic moment near a waterfall"
            className="featured-story__image"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <figure className="featured-story__image-frame featured-story__image-frame--secondary">
          <img
            src={brideImage}
            alt="Michelle holding an elegant wedding bouquet"
            className="featured-story__image"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <a
          href="#gallery"
          className="featured-story__button"
          aria-label="View Ricardo and Michelle's wedding gallery"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
}