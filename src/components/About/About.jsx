import { useEffect, useRef } from "react";

import awardLeaf from "../../assets/icons/award-leaf.svg";
import quoteMark from "../../assets/icons/quote-mark.svg";
import floralDivider from "../../assets/icons/floral-divider.svg";
import photographerImage from "../../assets/images/photographer.png";

import "./about.css";

function useRevealOnScroll() {
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
        threshold: 0.18,
        rootMargin: "0px 0px -60px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return sectionRef;
}

function AwardIntro() {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      ref={sectionRef}
      className="award-intro reveal-section"
      aria-labelledby="award-heading"
    >
      <div className="award-intro__inner">
        <img
          src={awardLeaf}
          alt=""
          className="award-intro__leaf reveal-item"
          aria-hidden="true"
        />

        <p className="award-intro__eyebrow reveal-item">
          Award Winning Photography
        </p>

        <h2
          id="award-heading"
          className="award-intro__heading reveal-item"
        >
          Showcasing your big day in a memorable
          <span>and unforgettable way.</span>
        </h2>
      </div>
    </section>
  );
}

function PhotographerIntroduction() {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="photographer reveal-section"
      aria-labelledby="photographer-heading"
    >
      <div className="photographer__grid">
        <figure className="photographer__media reveal-item">
          <img
            src={photographerImage}
            alt="Wedding photographer Tessa holding her camera"
            className="photographer__photo"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <article className="photographer__content">
          <img
            src={quoteMark}
            alt=""
            className="photographer__quote reveal-item"
            aria-hidden="true"
          />

          <h2
            id="photographer-heading"
            className="photographer__heading reveal-item"
          >
            Hello, My Name is Tessa
          </h2>

          <div className="photographer__description reveal-item">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
              tristique purus vehicula felis velit ac. Tempus velit morbi
              accumsan id sit interdum lacus turpis ac. Integer malesuada
              sagittis placerat eget.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
              tristique purus vehicula felis velit ac. Tempus velit morbi
              accumsan id sit interdum lacus turpis ac. Integer malesuada
              sagittis placerat.
            </p>
          </div>

          <img
            src={floralDivider}
            alt=""
            className="photographer__divider reveal-item"
            aria-hidden="true"
          />

          <p className="photographer__signature reveal-item">
            Tessa.M
          </p>

          <a
            href="#portfolio"
            className="photographer__button reveal-item"
          >
            Learn More
          </a>
        </article>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <AwardIntro />
      <PhotographerIntroduction />
    </>
  );
}