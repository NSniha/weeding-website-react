import { useEffect, useRef } from "react";

import weddingIcon from "../../assets/icons/wedding-service.svg";
import portraitIcon from "../../assets/icons/portrait-service.svg";
import engagementIcon from "../../assets/icons/engagement-service.svg";

import "./services.css";

const services = [
  {
    id: 1,
    title: "Wedding",
    price: "$2999",
    icon: weddingIcon,
    href: "#wedding-service",
  },
  {
    id: 2,
    title: "Portrait",
    price: "$399",
    icon: portraitIcon,
    href: "#portrait-service",
  },
  {
    id: 3,
    title: "Engagement",
    price: "$1999",
    icon: engagementIcon,
    href: "#engagement-service",
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="services-section"
      aria-labelledby="services-heading"
    >
      <div className="services-container">
        <header className="services-header">
          <p className="services-eyebrow services-reveal">
            Services
          </p>

          <h2
            id="services-heading"
            className="services-heading services-reveal"
          >
            What I Offer
          </h2>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-card"
              style={{
                "--service-delay": `${220 + index * 150}ms`,
              }}
            >
              <div className="service-card__icon-wrapper">
                <img
                  src={service.icon}
                  alt=""
                  className="service-card__icon"
                  aria-hidden="true"
                />
              </div>

              <h3 className="service-card__title">
                {service.title}
              </h3>

              <div className="service-card__pricing">
                <p className="service-card__label">
                  Per Session
                </p>

                <p className="service-card__price">
                  {service.price}
                </p>
              </div>

              <a
                href={service.href}
                className="service-card__button"
                aria-label={`View more details about ${service.title} photography`}
              >
                More Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}