import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./page-hero.css";

export default function PageHero({
  image,
  imageAlt,
  imagePosition = "center",
  eager = true,
}) {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -20px",
  });

  return (
    <section
      ref={elementRef}
      aria-label={imageAlt}
      className={`page-hero relative h-[392px] w-full overflow-hidden bg-[#ddd8cf] max-[1280px]:h-[365px] max-[1024px]:h-[335px] max-[768px]:h-[300px] max-[600px]:h-[265px] max-[480px]:h-[235px] max-[380px]:h-[215px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <img
        src={image}
        alt={imageAlt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        className="page-hero__image block h-full w-full object-cover"
        style={{
          objectPosition: imagePosition,
        }}
      />
    </section>
  );
}