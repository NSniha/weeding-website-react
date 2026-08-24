import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import portfolioWeddingOne from "../../assets/images/testimonial-1.png";
import portfolioWeddingTwo from "../../assets/images/portfolio-wedding-2.png";
import portfolioWeddingThree from "../../assets/images/portfolio-wedding-3.png";

import portfolioEngagementOne from "../../assets/images/portfolio-engagement-1.png";
import portfolioEngagementTwo from "../../assets/images/portfolio-engagement-2.png";
import portfolioEngagementThree from "../../assets/images/portfolio-engagement-3.png";

import portfolioPortraitOne from "../../assets/images/portfolio-portrait-1.png";
import portfolioPortraitTwo from "../../assets/images/portfolio-portrait-2.png";
import portfolioPortraitThree from "../../assets/images/portfolio-portrait-3.png";

import creativeLeaf from "../../assets/icons/creative-leaf.svg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./portfolio-details-page.css";

const imagePool = [
  {
    src: portfolioWeddingOne,
    alt: "A newly married couple sharing a quiet moment together",
  },
  {
    src: portfolioEngagementOne,
    alt: "A couple embracing during an intimate outdoor session",
  },
  {
    src: portfolioPortraitOne,
    alt: "An elegant bridal portrait in soft natural light",
  },
  {
    src: portfolioWeddingTwo,
    alt: "A couple celebrating together on their wedding day",
  },
  {
    src: portfolioPortraitTwo,
    alt: "A romantic portrait surrounded by soft countryside light",
  },
  {
    src: portfolioWeddingThree,
    alt: "A joyful wedding portrait filled with natural emotion",
  },
  {
    src: portfolioEngagementTwo,
    alt: "An intimate engagement portrait of a couple together",
  },
  {
    src: portfolioPortraitThree,
    alt: "A graceful outdoor portrait in warm natural light",
  },
  {
    src: portfolioEngagementThree,
    alt: "A couple enjoying a relaxed engagement session outdoors",
  },
];

function buildGallery(startIndex) {
  return Array.from({ length: 6 }, (_, index) => {
    return imagePool[(startIndex + index) % imagePool.length];
  });
}

const projects = [
  {
    id: 1,
    name: "Sarah & Luke",
    category: "Wedding",
    slug: "sarah-luke-wedding",
    date: "18 May 2026",
    cover: portfolioWeddingOne,
    coverAlt: "Sarah and Luke sharing a quiet wedding moment",
    galleryStart: 0,
    description:
      "A gentle spring celebration filled with quiet glances, effortless elegance, and the people who matter most. Sarah and Luke wanted their photographs to feel honest rather than posed, allowing every embrace, laugh, and fleeting detail to become part of a beautifully personal story.",
  },
  {
    id: 2,
    name: "Richard & Jane",
    category: "Wedding",
    slug: "richard-jane-wedding",
    date: "24 January 2026",
    cover: portfolioWeddingTwo,
    coverAlt: "Richard and Jane celebrating their winter wedding",
    galleryStart: 2,
    description:
      "Richard and Jane created an intimate winter celebration shaped by candlelight, heartfelt conversation, and understated details. Their gallery preserves the warmth of the day with a refined editorial approach while keeping every moment completely natural.",
  },
  {
    id: 3,
    name: "Gareth & Eva",
    category: "Wedding",
    slug: "gareth-eva-wedding",
    date: "12 September 2025",
    cover: portfolioWeddingThree,
    coverAlt: "Gareth and Eva smiling together on their wedding day",
    galleryStart: 4,
    description:
      "An elegant late-summer wedding where joyful energy met timeless romance. Gareth and Eva's story unfolded through spontaneous laughter, soft portraits, and meaningful moments shared with the people closest to them.",
  },
  {
    id: 4,
    name: "Sarah & Luke",
    category: "Engagement",
    slug: "sarah-luke-engagement",
    date: "07 February 2026",
    cover: portfolioEngagementOne,
    coverAlt: "Sarah and Luke during their engagement session",
    galleryStart: 1,
    description:
      "A relaxed engagement session designed around movement, conversation, and the natural connection Sarah and Luke share. The result is a collection of photographs that feels warm, effortless, and unmistakably theirs.",
  },
  {
    id: 5,
    name: "Richard & Jane",
    category: "Engagement",
    slug: "richard-jane-engagement",
    date: "18 October 2025",
    cover: portfolioEngagementTwo,
    coverAlt: "Richard and Jane embracing during their engagement session",
    galleryStart: 3,
    description:
      "Set against the soft colors of autumn, Richard and Jane's engagement session focused on quiet intimacy and genuine interaction. Every frame was created to feel editorial yet completely unforced.",
  },
  {
    id: 6,
    name: "Gareth & Eva",
    category: "Engagement",
    slug: "gareth-eva-engagement",
    date: "05 July 2025",
    cover: portfolioEngagementThree,
    coverAlt: "Gareth and Eva enjoying an outdoor engagement session",
    galleryStart: 5,
    description:
      "A sunlit afternoon of exploration and laughter became the perfect setting for Gareth and Eva's engagement story. Their photographs are light, romantic, and full of the energy that defines them as a couple.",
  },
  {
    id: 7,
    name: "Sarah",
    category: "Portrait",
    slug: "sarah-portrait",
    date: "14 March 2026",
    cover: portfolioPortraitOne,
    coverAlt: "Portrait session with Sarah",
    galleryStart: 6,
    description:
      "Sarah's portrait session celebrates graceful simplicity, soft movement, and confident femininity. The photographs combine natural expression with an editorial sensibility to create a collection that feels both modern and timeless.",
  },
  {
    id: 8,
    name: "Jane",
    category: "Portrait",
    slug: "jane-portrait",
    date: "22 August 2025",
    cover: portfolioPortraitTwo,
    coverAlt: "Portrait session with Jane in a field",
    galleryStart: 7,
    description:
      "A quiet countryside portrait session shaped by warm light, subtle movement, and authentic expression. Jane's gallery was created to feel thoughtful, refined, and beautifully uncomplicated.",
  },
  {
    id: 9,
    name: "Angeline",
    category: "Portrait",
    slug: "angeline-portrait",
    date: "02 June 2026",
    cover: portfolioPortraitThree,
    coverAlt: "Outdoor portrait session with Angeline",
    galleryStart: 8,
    description:
      "Angeline's portrait story blends effortless confidence with a softer, romantic atmosphere. Natural light and relaxed direction allowed every photograph to feel personal, expressive, and completely genuine.",
  },
].map((project) => ({
  ...project,
  gallery: buildGallery(project.galleryStart),
}));

function getRevealStyle(delay) {
  return {
    "--detail-delay": `${delay}ms`,
  };
}

function GalleryImage({
  image,
  index,
  className,
  imageClassName = "",
  onOpen,
}) {
  return (
    <button
      type="button"
      aria-label={`Open gallery image ${index + 1}`}
      onClick={(event) => onOpen(index, event.currentTarget)}
      className={`portfolio-detail-gallery-button portfolio-detail-reveal group relative m-0 block w-full cursor-zoom-in overflow-hidden border-0 bg-[#e2ded8] p-0 text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
      style={getRevealStyle(420 + index * 95)}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className={`portfolio-detail-gallery-image block h-full w-full object-cover object-center ${imageClassName}`}
      />
    </button>
  );
}

function PortfolioStory({ project, onOpenLightbox }) {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -50px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="portfolio-detail-heading"
      className={`portfolio-detail-scope overflow-hidden bg-white pb-[112px] pt-[170px] max-[1280px]:pb-[104px] max-[1280px]:pt-[160px] max-[1024px]:pb-[94px] max-[1024px]:pt-[148px] max-[768px]:pb-[82px] max-[768px]:pt-[132px] max-[600px]:pb-[70px] max-[600px]:pt-[118px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="mx-auto w-full max-w-[970px]">
          <header className="text-center">
            <p
              style={getRevealStyle(50)}
              className="portfolio-detail-reveal section-eyebrow"
            >
              Gallery
            </p>

            <h1
              id="portfolio-detail-heading"
              style={getRevealStyle(140)}
              className="portfolio-detail-reveal mb-0 mt-[25px] font-primary text-[clamp(44px,4.2vw,60px)] font-normal uppercase leading-[1.02] tracking-[0.055em] text-heading max-[600px]:mt-[20px] max-[600px]:text-[clamp(36px,10vw,46px)] max-[480px]:tracking-[0.035em]"
            >
              {project.name}
            </h1>

            <div
              style={getRevealStyle(230)}
              className="portfolio-detail-reveal mx-auto mt-[30px] flex items-center justify-center gap-[112px] font-primary text-[18px] font-normal leading-none text-[#555351] max-[900px]:gap-[72px] max-[600px]:mt-[25px] max-[600px]:flex-col max-[600px]:gap-[13px] max-[600px]:text-[17px]"
            >
              <p className="m-0">
                Date:{" "}
                <span className="ml-[7px] font-script text-[25px] leading-none text-accent max-[600px]:text-[23px]">
                  {project.date}
                </span>
              </p>

              <p className="m-0">
                Category:{" "}
                <span className="ml-[7px] font-script text-[25px] leading-none text-accent max-[600px]:text-[23px]">
                  {project.category}
                </span>
              </p>
            </div>
          </header>

          <button
            type="button"
            aria-label={`Open featured photograph from ${project.name}`}
            onClick={(event) => onOpenLightbox(0, event.currentTarget)}
            style={getRevealStyle(320)}
            className="portfolio-detail-reveal portfolio-detail-cover group relative mt-[24px] block aspect-[2/1] w-full cursor-zoom-in overflow-hidden border-0 bg-[#ddd7cf] p-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent max-[700px]:aspect-[4/3]"
          >
            <img
              src={project.gallery[0].src}
              alt={project.gallery[0].alt}
              decoding="async"
              className="portfolio-detail-cover-image block h-full w-full object-cover object-center"
            />
          </button>

          <p
            style={getRevealStyle(400)}
            className="portfolio-detail-reveal mx-auto mb-0 mt-[57px] max-w-[665px] text-center font-primary text-[19px] font-normal leading-[1.42] tracking-[0.005em] text-[#504e4c] max-[900px]:mt-[50px] max-[600px]:mt-[40px] max-[600px]:max-w-[480px] max-[600px]:text-[17px] max-[380px]:text-[16px]"
          >
            {project.description}
          </p>

          <div className="mt-[58px] max-[900px]:mt-[50px] max-[600px]:mt-[42px]">
            <div className="grid grid-cols-[0.72fr_1fr] gap-[70px] max-[1100px]:gap-[52px] max-[900px]:gap-[36px] max-[700px]:grid-cols-1 max-[700px]:gap-6">
              <GalleryImage
                image={project.gallery[1]}
                index={1}
                onOpen={onOpenLightbox}
                className="h-[485px] max-[1100px]:h-[440px] max-[900px]:h-[390px] max-[700px]:h-auto max-[700px]:aspect-[4/5]"
              />

              <GalleryImage
                image={project.gallery[2]}
                index={2}
                onOpen={onOpenLightbox}
                className="h-[485px] max-[1100px]:h-[440px] max-[900px]:h-[390px] max-[700px]:h-auto max-[700px]:aspect-[4/4.4]"
              />
            </div>

            <div className="mt-[58px] grid grid-cols-[1.64fr_1fr] gap-[74px] max-[1100px]:mt-[52px] max-[1100px]:gap-[54px] max-[900px]:mt-[42px] max-[900px]:gap-[38px] max-[700px]:mt-6 max-[700px]:grid-cols-1 max-[700px]:gap-6">
              <GalleryImage
                image={project.gallery[3]}
                index={3}
                onOpen={onOpenLightbox}
                className="h-[485px] max-[1100px]:h-[440px] max-[900px]:h-[390px] max-[700px]:h-auto max-[700px]:aspect-[4/4.3]"
              />

              <GalleryImage
                image={project.gallery[4]}
                index={4}
                onOpen={onOpenLightbox}
                className="h-[485px] max-[1100px]:h-[440px] max-[900px]:h-[390px] max-[700px]:h-auto max-[700px]:aspect-[4/5.2]"
              />
            </div>

            <GalleryImage
              image={project.gallery[5]}
              index={5}
              onOpen={onOpenLightbox}
              className="mt-[58px] aspect-[2/1] max-[1100px]:mt-[52px] max-[900px]:mt-[42px] max-[700px]:mt-6 max-[700px]:aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MoreWorks({ currentProject }) {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.1,
    rootMargin: "0px 0px -40px",
  });

  const moreWorks = useMemo(() => {
    return projects
      .filter((project) => project.slug !== currentProject.slug)
      .slice(0, 4);
  }, [currentProject.slug]);

  return (
    <section
      ref={elementRef}
      aria-labelledby="more-works-heading"
      className={`more-works-scope overflow-hidden bg-white pb-[108px] max-[1280px]:pb-[98px] max-[1024px]:pb-[88px] max-[768px]:pb-[76px] max-[600px]:pb-[65px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="mx-auto w-full max-w-[970px]">
          <header className="text-center">
            <img
              src={creativeLeaf}
              alt=""
              aria-hidden="true"
              style={getRevealStyle(60)}
              className="portfolio-detail-reveal mx-auto h-auto w-[44px] object-contain max-[600px]:w-[39px]"
            />

            <h2
              id="more-works-heading"
              style={getRevealStyle(150)}
              className="portfolio-detail-reveal mb-0 mt-[20px] font-primary text-[42px] font-normal leading-none tracking-[0.04em] text-heading max-[768px]:text-[39px] max-[600px]:mt-[17px] max-[600px]:text-[36px]"
            >
              More Works
            </h2>
          </header>

          <div className="mt-[50px] grid grid-cols-4 gap-[37px] max-[1024px]:gap-[28px] max-[760px]:grid-cols-2 max-[760px]:gap-[28px] max-[600px]:mt-[40px] max-[480px]:gap-[18px]">
            {moreWorks.map((work, index) => (
              <article
                key={work.id}
                style={getRevealStyle(250 + index * 90)}
                className="portfolio-detail-reveal min-w-0"
              >
                <Link
                  to={`/portfolio/${work.slug}`}
                  aria-label={`View ${work.name} ${work.category} gallery`}
                  className="more-work-card group block text-inherit no-underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <figure className="m-0 aspect-[4/4.7] w-full overflow-hidden bg-[#ddd8d1]">
                    <img
                      src={work.cover}
                      alt={work.coverAlt}
                      loading="lazy"
                      decoding="async"
                      className="more-work-card__image block h-full w-full object-cover object-center"
                    />
                  </figure>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryLightbox({
  project,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
  closeButtonRef,
}) {
  if (activeIndex === null) {
    return null;
  }

  const image = project.gallery[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} gallery viewer`}
      className="portfolio-lightbox fixed inset-0 z-[250] flex items-center justify-center bg-black/[0.9] px-[76px] py-[60px] max-[768px]:px-[48px] max-[600px]:px-[20px] max-[600px]:py-[70px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-[28px] top-[24px] flex h-[46px] w-[46px] cursor-pointer items-center justify-center border-0 bg-transparent text-white/90 transition-[opacity,transform] duration-300 hover:rotate-90 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:right-[14px] max-[600px]:top-[14px]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[29px] w-[29px]"
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
        aria-label="Previous image"
        onClick={onPrevious}
        className="absolute left-[22px] top-1/2 flex h-[54px] w-[54px] -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent text-white/90 transition-[opacity,transform] duration-300 hover:-translate-x-[4px] hover:-translate-y-1/2 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:left-[4px] max-[600px]:h-[44px] max-[600px]:w-[44px]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[34px] w-[34px]"
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
          key={`${project.slug}-${activeIndex}`}
          src={image.src}
          alt={image.alt}
          className="portfolio-lightbox__image max-h-[82vh] max-w-full object-contain"
        />
      </figure>

      <button
        type="button"
        aria-label="Next image"
        onClick={onNext}
        className="absolute right-[22px] top-1/2 flex h-[54px] w-[54px] -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent text-white/90 transition-[opacity,transform] duration-300 hover:translate-x-[4px] hover:-translate-y-1/2 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:right-[4px] max-[600px]:h-[44px] max-[600px]:w-[44px]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[34px] w-[34px]"
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

      <p className="absolute bottom-[22px] left-1/2 m-0 -translate-x-1/2 font-primary text-[15px] tracking-[0.12em] text-white/75 max-[600px]:bottom-[18px]">
        {activeIndex + 1} / {project.gallery.length}
      </p>
    </div>
  );
}

export default function PortfolioDetailsPage() {
  const { slug } = useParams();

  const project = useMemo(() => {
    return projects.find((item) => item.slug === slug);
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
    if (!project) return;

    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === 0
        ? project.gallery.length - 1
        : currentIndex - 1;
    });
  }, [project]);

  const showNextImage = useCallback(() => {
    if (!project) return;

    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return (currentIndex + 1) % project.gallery.length;
    });
  }, [project]);

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

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <PortfolioStory
          project={project}
          onOpenLightbox={openLightbox}
        />

        <MoreWorks currentProject={project} />
      </main>

      <Footer />

      <GalleryLightbox
        project={project}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
        closeButtonRef={closeButtonRef}
      />
    </div>
  );
}