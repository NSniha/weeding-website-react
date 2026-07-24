import "./hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="wedding-hero"
      aria-labelledby="wedding-hero-title"
    >
      <div
        className="wedding-hero__image"
        role="img"
        aria-label="Bride and groom sharing an intimate wedding moment"
      />

      <div className="wedding-hero__light" aria-hidden="true" />

      <div className="wedding-hero__content">
        <p className="wedding-hero__subtitle">
          Your Dream Wedding Awaits
        </p>

        <h1
          id="wedding-hero-title"
          className="wedding-hero__title"
        >
          Artistic Wedding Photography
        </h1>
      </div>
    </section>
  );
}