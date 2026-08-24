import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import blogImageOne from "../../assets/images/about-bouquet-soft.png";
import blogImageTwo from "../../assets/images/portfolio-portrait-2.png";
import blogImageThree from "../../assets/images/portfolio-wedding-2.png";
import blogImageFour from "../../assets/images/portfolio-engagement-2.png";
import blogImageFive from "../../assets/images/portfolio-portrait-3.png";
import blogImageSix from "../../assets/images/portfolio-engagement-3.png";

import quoteMark from "../../assets/icons/quote-mark.svg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubpageHero from "../../components/SubpageHero/SubpageHero";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./blog-details-page.css";

const blogPosts = [
  {
    id: 1,
    title: "Thoughtful Wedding Gifts for the Bride & Groom",
    slug: "thoughtful-wedding-gifts",
    date: "28 July 2026",
    category: "Wedding",
    image: blogImageOne,
    imageAlt: "Elegant wedding gifts arranged in soft natural light",
    gallery: [
      {
        src: blogImageOne,
        alt: "Elegant wedding gifts arranged in soft natural light",
      },
      {
        src: blogImageFive,
        alt: "Wedding stationery surrounded by delicate natural details",
      },
      {
        src: blogImageThree,
        alt: "Beautifully wrapped gifts prepared for a wedding celebration",
      },
    ],
    paragraphs: [
      "The most meaningful wedding gifts are rarely defined by their price. They become special because of the story attached to them, the thought behind the gesture, and the memories they continue to carry long after the celebration has ended.",
      "Consider pieces that feel connected to the couple rather than simply traditional. A handwritten letter, a beautifully made keepsake, a collection of photographs, or something created especially for their home can become a quiet reminder of one of the most important days of their lives.",
    ],
    quote:
      "The most beautiful gifts are the ones that continue telling the story long after the wedding day has passed.",
    closing:
      "Whatever you choose, let intention guide the decision. A thoughtful gift does not need to be elaborate; it simply needs to feel sincere, personal, and connected to the people receiving it.",
  },
  {
    id: 2,
    title: "How to Create a Wedding Day That Feels Like You",
    slug: "wedding-day-that-feels-like-you",
    date: "16 July 2026",
    category: "Planning",
    image: blogImageTwo,
    imageAlt: "Soft romantic wedding details with elegant styling",
    gallery: [
      {
        src: blogImageTwo,
        alt: "Soft romantic wedding details with elegant styling",
      },
      {
        src: blogImageFour,
        alt: "A relaxed couple sharing a quiet moment together",
      },
      {
        src: blogImageOne,
        alt: "Thoughtfully arranged wedding details",
      },
    ],
    paragraphs: [
      "The celebrations people remember most are rarely the ones built around every passing trend. They are the weddings where each decision feels connected to the couple and where guests immediately understand the atmosphere they wanted to create.",
      "Begin with the experiences that matter to you both. Think about how you want the morning to feel, the people you want close to you, the pace of the ceremony, and the moments you would regret rushing through.",
    ],
    quote:
      "A timeless celebration begins when you stop designing for expectations and start creating from your own story.",
    closing:
      "When the choices are personal, the visual details naturally become more meaningful. Your wedding does not need to look like anyone else's to be beautiful—it only needs to feel completely like you.",
  },
  {
    id: 3,
    title: "The Beauty of Quiet Moments on Your Wedding Day",
    slug: "beauty-of-quiet-wedding-moments",
    date: "03 July 2026",
    category: "Photography",
    image: blogImageThree,
    imageAlt: "A couple sharing a meaningful wedding moment",
    gallery: [
      {
        src: blogImageThree,
        alt: "A couple sharing a meaningful wedding moment",
      },
      {
        src: blogImageSix,
        alt: "A relaxed romantic portrait in natural light",
      },
      {
        src: blogImageTwo,
        alt: "An intimate portrait captured in a peaceful setting",
      },
    ],
    paragraphs: [
      "A wedding day moves quickly. Between greetings, traditions, photographs, and celebrations, some of its most meaningful moments can happen almost unnoticed.",
      "These quieter exchanges often become the photographs couples return to most. A reassuring hand before the ceremony, a parent's expression from across the room, or a few peaceful seconds together can hold more feeling than anything carefully planned.",
    ],
    quote:
      "Not every unforgettable wedding photograph comes from a grand moment. Sometimes the smallest ones carry the greatest meaning.",
    closing:
      "Leaving room for these moments is one of the reasons a relaxed timeline matters. When there is space to simply experience the day, the photographs have room to become honest.",
  },
  {
    id: 4,
    title: "Five Ways to Feel Natural in Front of the Camera",
    slug: "feel-natural-in-front-of-camera",
    date: "21 June 2026",
    category: "Portraits",
    image: blogImageFour,
    imageAlt: "A relaxed couple photographed together outdoors",
    gallery: [
      {
        src: blogImageFour,
        alt: "A relaxed couple photographed together outdoors",
      },
      {
        src: blogImageSix,
        alt: "A couple enjoying a natural engagement portrait",
      },
      {
        src: blogImageTwo,
        alt: "An elegant portrait captured in soft natural light",
      },
    ],
    paragraphs: [
      "Feeling comfortable in photographs has very little to do with knowing how to pose. The strongest portraits usually begin when attention shifts away from the camera and back toward the person standing beside you.",
      "Movement helps enormously. Walk together, talk, adjust your clothes, hold hands, or simply take a moment to settle into the surroundings. Small actions create natural expressions far more effectively than trying to hold a perfect position.",
    ],
    quote:
      "You do not need to perform for the camera. You only need enough space to forget that it is there.",
    closing:
      "Good direction should feel gentle rather than restrictive. The goal is not to manufacture a version of you, but to create the conditions where genuine personality can come through naturally.",
  },
  {
    id: 5,
    title: "Choosing the Perfect Details for a Timeless Celebration",
    slug: "timeless-wedding-details",
    date: "08 June 2026",
    category: "Inspiration",
    image: blogImageFive,
    imageAlt: "Elegant wedding styling with delicate natural details",
    gallery: [
      {
        src: blogImageFive,
        alt: "Elegant wedding styling with delicate natural details",
      },
      {
        src: blogImageOne,
        alt: "Beautiful wedding stationery and keepsakes",
      },
      {
        src: blogImageThree,
        alt: "Refined details prepared for a wedding celebration",
      },
    ],
    paragraphs: [
      "Timeless wedding design is not about avoiding personality. It is about choosing details because they have meaning rather than because they happen to be popular in a particular season.",
      "Natural textures, restrained palettes, thoughtful stationery, and beautifully made pieces tend to photograph especially well because they complement the people and atmosphere instead of competing with them.",
    ],
    quote:
      "Elegance becomes timeless when every detail has a reason to be there.",
    closing:
      "Choose fewer things with greater intention. When each element belongs to the same visual story, the celebration feels considered without ever becoming over-designed.",
  },
  {
    id: 6,
    title: "Why Your Engagement Session Matters More Than You Think",
    slug: "why-engagement-sessions-matter",
    date: "24 May 2026",
    category: "Engagement",
    image: blogImageSix,
    imageAlt: "A couple enjoying a relaxed engagement photography session",
    gallery: [
      {
        src: blogImageSix,
        alt: "A couple enjoying a relaxed engagement photography session",
      },
      {
        src: blogImageFour,
        alt: "A couple embracing during their engagement photographs",
      },
      {
        src: blogImageTwo,
        alt: "A soft portrait created during an engagement session",
      },
    ],
    paragraphs: [
      "An engagement session is valuable for more than creating beautiful photographs before the wedding. It gives you time to experience being photographed without the schedule and emotion of the wedding day around you.",
      "That familiarity changes everything. You begin to understand how gentle direction feels, how naturally movement translates into photographs, and how little you actually need to think about the camera.",
    ],
    quote:
      "An engagement session is not practice for pretending—it is time to become comfortable enough to simply be yourselves.",
    closing:
      "By the time the wedding arrives, the photography process already feels familiar. Instead of wondering what to do, you can remain present and trust that the story is being preserved naturally.",
  },
];

function getRevealStyle(delay) {
  return {
    "--blog-detail-delay": `${delay}ms`,
  };
}

function ArticleImage({
  image,
  index,
  onOpen,
  className = "",
}) {
  return (
    <button
      type="button"
      aria-label={`Open article photograph ${index + 1}`}
      onClick={(event) => onOpen(index, event.currentTarget)}
      style={getRevealStyle(120 + index * 90)}
      className={`blog-detail-reveal blog-detail-image-button group relative block w-full cursor-zoom-in overflow-hidden border-0 bg-[#ded8cf] p-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
        className="blog-detail-image block h-full w-full object-cover object-center"
      />
    </button>
  );
}

function BlogArticleIntro({ post, onOpen }) {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -55px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="blog-detail-heading"
      className={`blog-detail-scope overflow-hidden bg-white pt-[94px] max-[1280px]:pt-[88px] max-[1024px]:pt-[82px] max-[768px]:pt-[72px] max-[600px]:pt-[62px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="mx-auto w-full max-w-[900px]">
          <header className="section-header">
            <p
              style={getRevealStyle(60)}
              className="blog-detail-reveal section-eyebrow"
            >
              Blog
            </p>

            <h1
              id="blog-detail-heading"
              style={getRevealStyle(150)}
              className="blog-detail-reveal mx-auto max-w-[850px] section-title uppercase"
            >
              {post.title}
            </h1>

            <div
              style={getRevealStyle(240)}
              className="blog-detail-reveal mt-[50px] grid grid-cols-2 gap-[60px] text-left font-primary text-[21px] font-normal leading-none text-[#555351] max-[1200px]:text-[19px] max-[700px]:mt-[40px] max-[600px]:grid-cols-1 max-[600px]:gap-[13px] max-[600px]:text-center max-[600px]:text-[17px] max-[380px]:text-[16px]"
            >
              <p className="m-0">
                Date:
                <span className="ml-[9px] font-script text-[28px] font-normal leading-none text-accent max-[600px]:text-[24px]">
                  {post.date}
                </span>
              </p>

              <p className="m-0">
                Category:
                <span className="ml-[9px] font-script text-[28px] font-normal leading-none text-accent max-[600px]:text-[24px]">
                  {post.category}
                </span>
              </p>
            </div>
          </header>

          <ArticleImage
            image={post.gallery[0]}
            index={0}
            onOpen={onOpen}
            className="mt-[30px] aspect-[1.67/1] max-[700px]:aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}

function BlogArticleBody({ post, onOpen }) {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.1,
    rootMargin: "0px 0px -55px",
  });

  return (
    <section
      ref={elementRef}
      className={`blog-detail-scope overflow-hidden bg-white pt-[70px] max-[1024px]:pt-[62px] max-[600px]:pt-[48px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="mx-auto w-full max-w-[900px]">
          <div
            style={getRevealStyle(60)}
            className="blog-detail-reveal mx-auto max-w-[760px]"
          >
            {post.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`m-0 font-primary text-[21px] font-normal leading-[1.5] tracking-[-0.005em] text-body max-[1200px]:text-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px] ${
                  index > 0
                    ? "mt-[28px] max-[600px]:mt-[23px]"
                    : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <blockquote
            style={getRevealStyle(180)}
            className="blog-detail-reveal mx-auto mb-0 mt-[55px] max-w-[760px] max-[600px]:mt-[45px]"
          >
            <img
              src={quoteMark}
              alt=""
              aria-hidden="true"
              className="mb-[14px] block h-auto w-[34px] object-contain opacity-80 max-[600px]:w-[30px]"
            />

            <p className="m-0 max-w-[720px] font-primary text-[39px] font-normal leading-[1.28] tracking-[0.005em] text-heading max-[1024px]:text-[36px] max-[768px]:text-[33px] max-[600px]:text-[29px] max-[380px]:text-[26px]">
              {post.quote}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function BlogArticleGallery({ post, onOpen }) {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.1,
    rootMargin: "0px 0px -55px",
  });

  return (
    <section
      ref={elementRef}
      className={`blog-detail-scope overflow-hidden bg-white pb-[106px] pt-[62px] max-[1280px]:pb-[98px] max-[1024px]:pb-[90px] max-[1024px]:pt-[56px] max-[768px]:pb-[80px] max-[600px]:pb-[70px] max-[600px]:pt-[45px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="mx-auto w-full max-w-[900px]">
          <div className="grid grid-cols-2 gap-[48px] max-[900px]:gap-[34px] max-[600px]:grid-cols-1 max-[600px]:gap-[24px]">
            <ArticleImage
              image={post.gallery[1]}
              index={1}
              onOpen={onOpen}
              className="aspect-[1.2/1]"
            />

            <ArticleImage
              image={post.gallery[2]}
              index={2}
              onOpen={onOpen}
              className="aspect-[1.2/1]"
            />
          </div>

          <p
            style={getRevealStyle(340)}
            className="blog-detail-reveal mx-auto mb-0 mt-[48px] max-w-[760px] font-primary text-[21px] font-normal leading-[1.5] tracking-[-0.005em] text-body max-[1200px]:text-[19px] max-[600px]:mt-[38px] max-[600px]:text-[17px] max-[380px]:text-[16px]"
          >
            {post.closing}
          </p>

          <div
            style={getRevealStyle(440)}
            className="blog-detail-reveal mt-[105px] border-t border-[#d6d2cd] pt-[19px] max-[1024px]:mt-[88px] max-[600px]:mt-[68px] max-[600px]:pt-[17px]"
          >
            <div className="flex items-center justify-between gap-8">
              <Link
                to="/blog"
                className="blog-detail-bottom-link inline-flex items-center font-primary text-[19px] font-normal tracking-[0.025em] text-[#575451] no-underline max-[600px]:text-[17px]"
              >
                <span
                  aria-hidden="true"
                  className="mr-[8px]"
                >
                  ←
                </span>

                Go Back
              </Link>

              <Link
                to="/portfolio"
                className="blog-detail-bottom-link inline-flex items-center text-right font-primary text-[19px] font-normal tracking-[0.025em] text-[#575451] no-underline max-[600px]:text-[17px]"
              >
                View Gallery

                <span
                  aria-hidden="true"
                  className="ml-[8px]"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogLightbox({
  post,
  activeIndex,
  closeButtonRef,
  onClose,
  onPrevious,
  onNext,
}) {
  if (activeIndex === null) {
    return null;
  }

  const image = post.gallery[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${post.title} image gallery`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className="blog-lightbox fixed inset-0 z-[300] flex items-center justify-center bg-black/[0.91] px-[78px] py-[58px] max-[768px]:px-[50px] max-[600px]:px-[18px] max-[600px]:py-[65px]"
    >
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Close image viewer"
        onClick={onClose}
        className="absolute right-[27px] top-[22px] flex h-[48px] w-[48px] cursor-pointer items-center justify-center border-0 bg-transparent text-white transition-[opacity,transform] duration-300 hover:rotate-90 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:right-[11px] max-[600px]:top-[11px]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[30px] w-[30px]"
        >
          <path
            d="M5 5L19 19M19 5L5 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Previous photograph"
        onClick={onPrevious}
        className="absolute left-[20px] top-1/2 flex h-[55px] w-[55px] -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent text-white transition-[opacity,transform] duration-300 hover:-translate-x-1 hover:-translate-y-1/2 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:left-0 max-[600px]:h-[44px] max-[600px]:w-[44px]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[35px] w-[35px]"
        >
          <path
            d="M15 5L8 12L15 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <figure className="m-0 flex max-h-full max-w-[1180px] items-center justify-center">
        <img
          key={`${post.slug}-${activeIndex}`}
          src={image.src}
          alt={image.alt}
          className="blog-lightbox__image max-h-[82vh] max-w-full object-contain"
        />
      </figure>

      <button
        type="button"
        aria-label="Next photograph"
        onClick={onNext}
        className="absolute right-[20px] top-1/2 flex h-[55px] w-[55px] -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent text-white transition-[opacity,transform] duration-300 hover:translate-x-1 hover:-translate-y-1/2 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:right-0 max-[600px]:h-[44px] max-[600px]:w-[44px]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[35px] w-[35px]"
        >
          <path
            d="M9 5L16 12L9 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className="absolute bottom-[22px] left-1/2 m-0 -translate-x-1/2 font-primary text-[15px] tracking-[0.12em] text-white/75">
        {activeIndex + 1} / {post.gallery.length}
      </p>
    </div>
  );
}

export default function BlogDetailsPage() {
  const { slug } = useParams();

  const post = useMemo(() => {
    return blogPosts.find((blogPost) => blogPost.slug === slug);
  }, [slug]);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    setLightboxIndex(null);
  }, [slug]);

  const openLightbox = useCallback((index, triggerElement) => {
    lastTriggerRef.current = triggerElement;
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);

    window.setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 0);
  }, []);

  const showPreviousImage = useCallback(() => {
    if (!post) {
      return;
    }

    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return currentIndex === 0
        ? post.gallery.length - 1
        : currentIndex - 1;
    });
  }, [post]);

  const showNextImage = useCallback(() => {
    if (!post) {
      return;
    }

    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex + 1) % post.gallery.length;
    });
  }, [post]);

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [
    closeLightbox,
    lightboxIndex,
    showNextImage,
    showPreviousImage,
  ]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <SubpageHero
          ariaLabel={`${post.title} wedding photography journal`}
          imageAlt="A romantic wedding moment photographed by Tessa Morgan"
        />

        <BlogArticleIntro
          post={post}
          onOpen={openLightbox}
        />

        <BlogArticleBody
          post={post}
        />

        <BlogArticleGallery
          post={post}
          onOpen={openLightbox}
        />
      </main>

      <Footer />

      <BlogLightbox
        post={post}
        activeIndex={lightboxIndex}
        closeButtonRef={closeButtonRef}
        onClose={closeLightbox}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
      />
    </div>
  );
}