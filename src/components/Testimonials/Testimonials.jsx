import { useCallback, useEffect, useRef, useState } from "react";

import quoteMark from "../../assets/icons/quote-mark.svg";
import testimonialOne from "../../assets/images/testimonial-1.png";
import testimonialTwo from "../../assets/images/testimonial-2.png";
import testimonialThree from "../../assets/images/testimonial-3.png";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

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
      "Every photograph feels warm, elegant, and completely authentic. Tessa made us feel comfortable and transformed our memories into timeless art.",
    image: testimonialTwo,
    imageAlt:
      "Amelia and James smiling together during their wedding celebration",
  },
  {
    id: 3,
    name: "Olivia & Daniel",
    message:
      "From the quiet moments to the joyful celebrations, every detail was captured beautifully. We could not have imagined a more meaningful experience.",
    image: testimonialThree,
    imageAlt: "Olivia and Daniel enjoying an intimate wedding moment",
  },
];

const AUTOPLAY_DELAY = 5000;
const SWIPE_DISTANCE = 45;
const MAX_DRAG_DISTANCE = 130;

function TestimonialSlide({ testimonial, index, isActive }) {
  const contentState = isActive
    ? "translate-y-0 opacity-100"
    : "translate-y-6 opacity-0";

  const imageState = isActive ? "scale-100" : "scale-[1.07]";

  return (
    <article
      id={`testimonial-slide-${testimonial.id}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${testimonials.length}`}
      aria-hidden={!isActive}
      className="w-full shrink-0 basis-full"
    >
      <div className="grid min-h-[450px] w-full grid-cols-2 max-[1280px]:min-h-[430px] max-[1024px]:min-h-[405px] max-[800px]:mx-auto max-[800px]:min-h-0 max-[800px]:max-w-[620px] max-[800px]:grid-cols-1">
        <div className="relative z-[2] min-w-0 border border-[#e2d1c1] bg-white max-[800px]:row-start-2">
          <div className="flex h-full min-h-[448px] flex-col items-center justify-center px-[52px] pb-[45px] pt-[50px] text-center max-[1280px]:min-h-[428px] max-[1280px]:px-[42px] max-[1024px]:min-h-[403px] max-[1024px]:px-[35px] max-[1024px]:py-10 max-[800px]:min-h-[370px] max-[800px]:px-[45px] max-[800px]:pb-[42px] max-[800px]:pt-[45px] max-[560px]:min-h-[350px] max-[560px]:px-6 max-[560px]:pb-9 max-[560px]:pt-[39px] max-[380px]:min-h-[335px] max-[380px]:px-[18px]">
            <img
              src={quoteMark}
              alt=""
              aria-hidden="true"
              className={`mb-[31px] h-auto w-[58px] transition-[opacity,transform] duration-[650ms] [transition-timing-function:var(--ease-elegant)] [transition-delay:250ms] max-[1024px]:mb-[25px] max-[1024px]:w-[52px] max-[560px]:mb-[23px] max-[560px]:w-[46px] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${contentState}`}
            />

            <blockquote
              className={`m-0 max-w-[500px] font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-[#555351] transition-[opacity,transform] duration-700 [transition-timing-function:var(--ease-elegant)] [transition-delay:330ms] max-[1200px]:text-[19px] max-[800px]:max-w-[430px] max-[600px]:text-[17px] max-[380px]:max-w-[300px] max-[380px]:text-[16px] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${contentState}`}
            >
              {testimonial.message}
            </blockquote>

            <p
              className={`mb-0 mt-[74px] font-primary text-[23px] font-normal uppercase leading-none tracking-[0.04em] text-[#5d5b59] transition-[opacity,transform] duration-700 [transition-timing-function:var(--ease-elegant)] [transition-delay:420ms] max-[1280px]:mt-[65px] max-[1280px]:text-[22px] max-[1024px]:mt-[52px] max-[1024px]:text-[21px] max-[800px]:mt-[46px] max-[560px]:mt-[39px] max-[560px]:text-[19px] max-[380px]:text-[18px] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${contentState}`}
            >
              {testimonial.name}
            </p>
          </div>
        </div>

        <figure className="m-0 h-[450px] min-w-0 overflow-hidden bg-[#dfd8cf] max-[1280px]:h-[430px] max-[1024px]:h-[405px] max-[800px]:row-start-1 max-[800px]:h-auto max-[800px]:aspect-[4/3.2] max-[560px]:aspect-[4/3.8]">
          <img
            src={testimonial.image}
            alt={testimonial.imageAlt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`h-full w-full object-cover object-center transition-transform duration-[1200ms] [transition-timing-function:var(--ease-elegant)] motion-reduce:scale-100 motion-reduce:transition-none ${imageState}`}
          />
        </figure>
      </div>
    </article>
  );
}

function SliderDots({ activeIndex, onSelect }) {
  return (
    <div
      role="tablist"
      aria-label="Choose testimonial"
      className="mt-[27px] flex items-center justify-center gap-[7px] max-[800px]:mt-[23px] max-[560px]:mt-5"
    >
      {testimonials.map((testimonial, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={testimonial.id}
            type="button"
            role="tab"
            aria-controls={`testimonial-slide-${testimonial.id}`}
            aria-label={`Show testimonial from ${testimonial.name}`}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(index)}
            className="group inline-flex h-[28px] w-[32px] cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-[#b99372]"
          >
            <span
              className={`block h-[7px] rounded-full transition-[width,background-color,transform] duration-300 group-hover:scale-[1.15] group-hover:bg-[#b99372] group-focus-visible:bg-[#b99372] ${
                isActive
                  ? "w-6 bg-[#b99372]"
                  : "w-[7px] bg-[#d8c7b8]"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  const pointerStartX = useRef(null);
  const dragDistanceRef = useRef(0);

  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.14,
    rootMargin: "0px 0px -70px",
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const showSlide = useCallback((index) => {
    setActiveIndex(index);
    setAutoplayKey((currentKey) => currentKey + 1);
  }, []);

  const showNextSlide = useCallback(() => {
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % testimonials.length,
    );
  }, []);

  const showPreviousSlide = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  }, []);

  useEffect(() => {
    if (!isVisible || isDragging) {
      return undefined;
    }

    const autoplayTimer = window.setTimeout(
      showNextSlide,
      AUTOPLAY_DELAY,
    );

    return () => {
      window.clearTimeout(autoplayTimer);
    };
  }, [
    activeIndex,
    autoplayKey,
    isDragging,
    isVisible,
    showNextSlide,
  ]);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerStartX.current = event.clientX;
    dragDistanceRef.current = 0;

    setDragOffset(0);
    setIsDragging(true);

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (pointerStartX.current === null) {
      return;
    }

    const distance = event.clientX - pointerStartX.current;
    const limitedDistance = Math.max(
      -MAX_DRAG_DISTANCE,
      Math.min(MAX_DRAG_DISTANCE, distance),
    );

    dragDistanceRef.current = distance;
    setDragOffset(limitedDistance);
  };

  const finishDragging = (event) => {
    if (pointerStartX.current === null) {
      return;
    }

    const distance = dragDistanceRef.current;

    pointerStartX.current = null;
    dragDistanceRef.current = 0;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    setDragOffset(0);
    setAutoplayKey((currentKey) => currentKey + 1);

    if (Math.abs(distance) < SWIPE_DISTANCE) {
      return;
    }

    if (distance < 0) {
      showNextSlide();
      return;
    }

    showPreviousSlide();
  };

  const cancelDragging = (event) => {
    pointerStartX.current = null;
    dragDistanceRef.current = 0;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextSlide();
      setAutoplayKey((currentKey) => currentKey + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousSlide();
      setAutoplayKey((currentKey) => currentKey + 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      showSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      showSlide(testimonials.length - 1);
    }
  };

  const trackTransform = `translate3d(calc(-${
    activeIndex * 100
  }% + ${dragOffset}px), 0, 0)`;

  return (
    <section
      ref={elementRef}
      aria-labelledby="testimonials-heading"
      className={`testimonials-reveal-scope section-shell overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <header className="section-header site-container">
        <p className="testimonials-heading-reveal section-eyebrow">
          Testimonials
        </p>

        <h2
          id="testimonials-heading"
          className="testimonials-heading-reveal testimonials-heading-delay section-title"
        >
          Client Testimonials
        </h2>
      </header>

      <div className="testimonials-slider-reveal mt-[65px] w-full overflow-hidden bg-[#f6f6f6] pb-[31px] pt-[76px] max-[1280px]:mt-[57px] max-[1280px]:pt-[68px] max-[1024px]:mt-14 max-[1024px]:pb-7 max-[1024px]:pt-[58px] max-[768px]:mt-12 max-[768px]:pb-[27px] max-[768px]:pt-[45px] max-[480px]:mt-[41px] max-[480px]:pb-[22px] max-[480px]:pt-6">
        <div className="site-container">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            aria-live="off"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDragging}
            onPointerCancel={cancelDragging}
            className={`w-full touch-pan-y overflow-hidden outline-none ${
              isDragging
                ? "cursor-grabbing select-none"
                : "cursor-grab"
            }`}
          >
            <div
              className={`flex w-full will-change-transform ${
                isDragging
                  ? "transition-none"
                  : "transition-transform duration-[900ms] [transition-timing-function:var(--ease-elegant)]"
              } motion-reduce:transition-none`}
              style={{ transform: trackTransform }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialSlide
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>

          <SliderDots
            activeIndex={activeIndex}
            onSelect={showSlide}
          />
        </div>
      </div>
    </section>
  );
}