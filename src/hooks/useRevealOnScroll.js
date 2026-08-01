import { useEffect, useRef, useState } from "react";

export default function useRevealOnScroll({
  threshold = 0.18,
  rootMargin = "0px 0px -60px",
  once = true,
  disabled = false,
} = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(disabled);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const isObserverSupported =
      typeof window.IntersectionObserver !== "undefined";

    if (disabled || prefersReducedMotion || !isObserverSupported) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled, once, rootMargin, threshold]);

  return {
    elementRef,
    isVisible,
  };
}