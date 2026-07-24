import heroImage from "../../assets/images/wedding-hero.png";
import "./hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="wedding-hero"
      aria-labelledby="hero-title"
    >
      <div className="wedding-hero__media">
        <img
          src={heroImage}
          alt=""
          className="wedding-hero__image"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          aria-hidden="true"
        />
      </div>

      <div
        className="wedding-hero__overlay"
        aria-hidden="true"
      />

      <div className="wedding-hero__content">
        <p className="wedding-hero__subtitle">
          Your Dream Wedding Awaits
        </p>

        <h1
          id="hero-title"
          className="wedding-hero__title"
        >
          Artistic Wedding Photography
        </h1>
      </div>
    </section>
  );
}