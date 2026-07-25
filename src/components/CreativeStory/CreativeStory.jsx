import { useEffect, useRef } from "react";

import coupleImage from "../../assets/images/creative-couple.jpg";
import creativeLeaf from "../../assets/icons/creative-leaf.svg";

import "./creative-story.css";

export default function CreativeStory() {
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
      ref={sectionRef}
      className="creative-story"
      aria-labelledby="creative-story-title"
    >
      <div className="creative-story__media">
        <img
          src={coupleImage}
          alt="A happy newly married couple walking together on the beach"
          className="creative-story__image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <article className="creative-story__card">
        <div className="creative-story__card-inner">
          <img
            src={creativeLeaf}
            alt=""
            className="creative-story__leaf creative-story__reveal"
            aria-hidden="true"
          />

          <h2
            id="creative-story-title"
            className="creative-story__title creative-story__reveal"
          >
            <span>Creative, Passionate,</span>
            <span>Artistic</span>
          </h2>

          <p className="creative-story__description creative-story__reveal">
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi
            accumsan
          </p>
        </div>
      </article>
    </section>
  );
}