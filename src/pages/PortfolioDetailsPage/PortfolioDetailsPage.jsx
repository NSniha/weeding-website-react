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
import SubpageHero from "../../components/SubpageHero/SubpageHero";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./portfolio-details-page.css";

const galleryPool = [
  {
    src: portfolioWeddingOne,
    alt: "A newly married couple sharing a quiet wedding moment",
  },
  {
    src: portfolioWeddingTwo,
    alt: "A romantic wedding portrait filled with natural emotion",
  },
  {
    src: portfolioWeddingThree,
    alt: "A joyful couple celebrating together on their wedding day",
  },
  {
    src: portfolioEngagementOne,
    alt: "A couple embracing during an intimate outdoor session",
  },
  {
    src: portfolioEngagementTwo,
    alt: "A relaxed engagement portrait surrounded by natural light",
  },
  {
    src: portfolioEngagementThree,
    alt: "A couple enjoying a romantic outdoor engagement session",
  },
  {
    src: portfolioPortraitOne,
    alt: "An elegant bridal portrait in soft natural light",
  },
  {
    src: portfolioPortraitTwo,
    alt: "A graceful portrait photographed in the countryside",
  },
  {
    src: portfolioPortraitThree,
    alt: "An elegant outdoor portrait with soft romantic styling",
  },
];

function createGallery(cover, coverAlt, startIndex) {
  const remainingImages = Array.from({ length: 5 }, (_, index) => {
    return galleryPool[(startIndex + index) % galleryPool.length];
  });

  return [
    {
      src: cover,
      alt: coverAlt,
    },
    ...remainingImages,
  ];
}

const portfolioProjects = [
  {
    id: 1,
    name: "Sarah & Luke",
    category: "Wedding",
    slug: "sarah-luke-wedding",
    date: "18 May 2026",
    cover: portfolioWeddingOne,
    coverAlt: "Sarah and Luke sharing a quiet wedding moment",
    description:
      "Sarah and Luke celebrated their wedding with an atmosphere that felt intimate, graceful, and completely their own. From quiet exchanges before the ceremony to joyful moments surrounded by family and friends, every photograph was created to preserve the emotion of the day with honesty and timeless elegance.",
    galleryStart: 1,
  },
  {
    id: 2,
    name: "Richard & Jane",
    category: "Wedding",
    slug: "richard-jane-wedding",
    date: "24 January 2026",
    cover: portfolioWeddingTwo,
    coverAlt: "Richard and Jane celebrating their winter wedding",
    description:
      "Richard and Jane chose a beautifully intimate winter celebration filled with warm light, thoughtful details, and heartfelt moments. Their gallery balances refined editorial portraits with the genuine interactions that made their wedding feel so personal.",
    galleryStart: 2,
  },
  {
    id: 3,
    name: "Gareth & Eva",
    category: "Wedding",
    slug: "gareth-eva-wedding",
    date: "12 September 2025",
    cover: portfolioWeddingThree,
    coverAlt: "Gareth and Eva smiling together on their wedding day",
    description:
      "Gareth and Eva's celebration was full of movement, laughter, and effortless romance. Their photographs tell the story of a joyful day through elegant portraits, emotional exchanges, and the smaller details that made the experience unforgettable.",
    galleryStart: 3,
  },
  {
    id: 4,
    name: "Sarah & Luke",
    category: "Engagement",
    slug: "sarah-luke-engagement",
    date: "07 February 2026",
    cover: portfolioEngagementOne,
    coverAlt: "Sarah and Luke during their engagement session",
    description:
      "A relaxed engagement session shaped around movement, conversation, and natural connection. Sarah and Luke wanted photographs that felt effortless and sincere, creating a collection filled with warmth, intimacy, and quiet anticipation.",
    galleryStart: 4,
  },
  {
    id: 5,
    name: "Richard & Jane",
    category: "Engagement",
    slug: "richard-jane-engagement",
    date: "18 October 2025",
    cover: portfolioEngagementTwo,
    coverAlt: "Richard and Jane embracing during their engagement session",
    description:
      "Soft autumn light and a peaceful setting created the perfect atmosphere for Richard and Jane's engagement story. Their session combines natural expressions with an editorial approach while keeping every moment relaxed and genuine.",
    galleryStart: 5,
  },
  {
    id: 6,
    name: "Gareth & Eva",
    category: "Engagement",
    slug: "gareth-eva-engagement",
    date: "05 July 2025",
    cover: portfolioEngagementThree,
    coverAlt: "Gareth and Eva enjoying an outdoor engagement session",
    description:
      "Gareth and Eva spent the afternoon exploring, laughing, and enjoying time together in beautiful natural surroundings. Their engagement gallery feels light, romantic, and full of the connection that defines their relationship.",
    galleryStart: 6,
  },
  {
    id: 7,
    name: "Sarah",
    category: "Portrait",
    slug: "sarah-portrait",
    date: "14 March 2026",
    cover: portfolioPortraitOne,
    coverAlt: "Portrait session with Sarah",
    description:
      "Sarah's portrait session was created around quiet confidence, soft movement, and elegant simplicity. Natural light and thoughtful direction resulted in photographs that feel refined while remaining completely authentic.",
    galleryStart: 7,
  },
  {
    id: 8,
    name: "Jane",
    category: "Portrait",
    slug: "jane-portrait",
    date: "22 August 2025",
    cover: portfolioPortraitTwo,
    coverAlt: "Portrait session with Jane in a field",
    description:
      "A peaceful countryside setting allowed Jane's portrait session to unfold naturally. Warm light, subtle movement, and an understated editorial approach created a collection that feels timeless, feminine, and effortless.",
    galleryStart: 8,
  },
  {
    id: 9,
    name: "Angeline",
    category: "Portrait",
    slug: "angeline-portrait",
    date: "02 June 2026",
    cover: portfolioPortraitThree,
    coverAlt: "Outdoor portrait session with Angeline",
    description:
      "Angeline's portrait story blends confidence with a softer romantic atmosphere. Every photograph focuses on natural expression and graceful movement, resulting in a gallery that feels personal, modern, and beautifully understated.",
    galleryStart: 0,
  },
].map((project) => ({
  ...project,
  gallery: createGallery(
    project.cover,
    project.coverAlt,
    project.galleryStart,
  ),
}));

function getRevealStyle(delay) {
  return {
    "--detail-delay": `${delay}ms`,
  };
}

function GalleryImage({
  image,
  index,
  onOpen,
  className = "",
  imageClassName = "",
}) {
  return (
    <button
      type="button"
      aria-label={`Open gallery photograph ${index + 1}`}
      onClick={(event) => onOpen(index, event.currentTarget)}
      style={getRevealStyle(440 + index * 90)}
      className={`portfolio-detail-reveal portfolio-gallery-item group relative block w-full cursor-zoom-in overflow-hidden border-0 bg-[#ded8cf] p-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className={`portfolio-gallery-image block h-full w-full object-cover object-center ${imageClassName}`}
      />
    </button>
  );
}

function PortfolioGallery({ project, onOpenLightbox }) {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -55px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="portfolio-detail-heading"
      className={`portfolio-detail-scope overflow-hidden bg-white pb-[110px] pt-[94px] max-[1280px]:pb-[100px] max-[1280px]:pt-[88px] max-[1024px]:pb-[90px] max-[1024px]:pt-[82px] max-[768px]:pb-[80px] max-[768px]:pt-[72px] max-[600px]:pb-[70px] max-[600px]:pt-[62px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p
            style={getRevealStyle(80)}
            className="portfolio-detail-reveal section-eyebrow"
          >
            Gallery
          </p>

          <h1
            id="portfolio-detail-heading"
            style={getRevealStyle(170)}
            className="portfolio-detail-reveal section-title uppercase"
          >
            {project.name}
          </h1>

          <div
            style={getRevealStyle(260)}
            className="portfolio-detail-reveal mx-auto mt-[30px] flex items-center justify-center gap-[118px] font-primary text-[21px] font-normal leading-none text-[#555351] max-[1200px]:text-[19px] max-[1024px]:gap-[82px] max-[700px]:gap-[52px] max-[600px]:mt-[25px] max-[600px]:flex-col max-[600px]:gap-[13px] max-[600px]:text-[17px] max-[380px]:text-[16px]"
          >
            <p className="m-0">
              Date:
              <span className="ml-[8px] font-script text-[28px] font-normal leading-none text-accent max-[600px]:text-[24px]">
                {project.date}
              </span>
            </p>

            <p className="m-0">
              Category:
              <span className="ml-[8px] font-script text-[28px] font-normal leading-none text-accent max-[600px]:text-[24px]">
                {project.category}
              </span>
            </p>
          </div>
        </header>

        <button
          type="button"
          aria-label={`Open featured photograph from ${project.name}`}
          onClick={(event) => onOpenLightbox(0, event.currentTarget)}
          style={getRevealStyle(340)}
          className="portfolio-detail-reveal portfolio-featured-image group mt-[34px] block aspect-[2.18/1] w-full cursor-zoom-in overflow-hidden border-0 bg-[#ded8cf] p-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent max-[1024px]:aspect-[2/1] max-[700px]:mt-[29px] max-[700px]:aspect-[4/3]"
        >
          <img
            src={project.gallery[0].src}
            alt={project.gallery[0].alt}
            decoding="async"
            className="portfolio-featured-image__photo block h-full w-full object-cover object-center"
          />
        </button>

        <p
          style={getRevealStyle(430)}
          className="portfolio-detail-reveal mx-auto mb-0 mt-[58px] max-w-[760px] text-center font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-body max-[1200px]:text-[19px] max-[1024px]:mt-[52px] max-[600px]:mt-[40px] max-[600px]:max-w-[520px] max-[600px]:text-[17px] max-[380px]:text-[16px]"
        >
          {project.description}
        </p>

        <div className="mt-[64px] max-[1024px]:mt-[58px] max-[600px]:mt-[46px]">
          <div className="grid w-full grid-cols-[0.76fr_1.06fr] gap-x-[70px] max-[1280px]:gap-x-[58px] max-[1024px]:gap-x-[42px] max-[800px]:gap-x-[30px] max-[700px]:grid-cols-1 max-[700px]:gap-y-[26px]">
            <GalleryImage
              image={project.gallery[1]}
              index={1}
              onOpen={onOpenLightbox}
              className="h-[560px] max-[1280px]:h-[520px] max-[1024px]:h-[470px] max-[800px]:h-[420px] max-[700px]:h-auto max-[700px]:aspect-[4/5]"
            />

            <GalleryImage
              image={project.gallery[2]}
              index={2}
              onOpen={onOpenLightbox}
              className="h-[560px] max-[1280px]:h-[520px] max-[1024px]:h-[470px] max-[800px]:h-[420px] max-[700px]:h-auto max-[700px]:aspect-[4/4.5]"
            />
          </div>

          <div className="mt-[66px] grid w-full grid-cols-[1.38fr_0.84fr] gap-x-[76px] max-[1280px]:mt-[60px] max-[1280px]:gap-x-[62px] max-[1024px]:mt-[54px] max-[1024px]:gap-x-[44px] max-[800px]:gap-x-[30px] max-[700px]:mt-[26px] max-[700px]:grid-cols-1 max-[700px]:gap-y-[26px]">
            <GalleryImage
              image={project.gallery[3]}
              index={3}
              onOpen={onOpenLightbox}
              className="h-[520px] max-[1280px]:h-[490px] max-[1024px]:h-[450px] max-[800px]:h-[400px] max-[700px]:h-auto max-[700px]:aspect-[4/4.1]"
            />

            <GalleryImage
              image={project.gallery[4]}
              index={4}
              onOpen={onOpenLightbox}
              className="h-[520px] max-[1280px]:h-[490px] max-[1024px]:h-[450px] max-[800px]:h-[400px] max-[700px]:h-auto max-[700px]:aspect-[4/5]"
            />
          </div>

          <GalleryImage
            image={project.gallery[5]}
            index={5}
            onOpen={onOpenLightbox}
            className="mt-[66px] aspect-[2.18/1] max-[1280px]:mt-[60px] max-[1024px]:mt-[54px] max-[1024px]:aspect-[2/1] max-[700px]:mt-[26px] max-[700px]:aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}

function MoreWorks({ currentProject }) {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.12,
    rootMargin: "0px 0px -45px",
  });

  const moreWorks = useMemo(() => {
    return portfolioProjects
      .filter((project) => project.slug !== currentProject.slug)
      .slice(0, 4);
  }, [currentProject.slug]);

  return (
    <section
      ref={elementRef}
      aria-labelledby="more-works-heading"
      className={`portfolio-more-works portfolio-detail-scope overflow-hidden bg-white pb-[110px] max-[1280px]:pb-[100px] max-[1024px]:pb-[90px] max-[768px]:pb-[80px] max-[600px]:pb-[70px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <img
            src={creativeLeaf}
            alt=""
            aria-hidden="true"
            style={getRevealStyle(60)}
            className="portfolio-detail-reveal mx-auto h-auto w-[49px] object-contain max-[600px]:w-[43px]"
          />

          <h2
            id="more-works-heading"
            style={getRevealStyle(150)}
            className="portfolio-detail-reveal mb-0 mt-[19px] font-primary text-[44px] font-normal leading-none tracking-[0.035em] text-heading max-[1024px]:text-[42px] max-[600px]:mt-[16px] max-[600px]:text-[38px] max-[380px]:text-[35px]"
          >
            More Works
          </h2>
        </header>

        <div className="mt-[54px] grid w-full grid-cols-4 gap-x-[42px] max-[1280px]:mt-[50px] max-[1280px]:gap-x-[34px] max-[1024px]:gap-x-[28px] max-[760px]:grid-cols-2 max-[760px]:gap-x-[24px] max-[760px]:gap-y-[30px] max-[600px]:mt-[42px] max-[480px]:gap-x-[16px]">
          {moreWorks.map((work, index) => (
            <article
              key={work.id}
              style={getRevealStyle(250 + index * 90)}
              className="portfolio-detail-reveal min-w-0"
            >
              <Link
                to={`/portfolio/${work.slug}`}
                aria-label={`View ${work.name} ${work.category} portfolio`}
                className="portfolio-more-card group block text-inherit no-underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <figure className="m-0 aspect-[4/4.7] w-full overflow-hidden bg-[#ded8cf]">
                  <img
                    src={work.cover}
                    alt={work.coverAlt}
                    loading="lazy"
                    decoding="async"
                    className="portfolio-more-card__image block h-full w-full object-cover object-center"
                  />
                </figure>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryLightbox({
  project,
  activeIndex,
  closeButtonRef,
  onClose,
  onPrevious,
  onNext,
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
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className="portfolio-lightbox fixed inset-0 z-[300] flex items-center justify-center bg-black/[0.91] px-[78px] py-[58px] max-[768px]:px-[52px] max-[600px]:px-[20px] max-[600px]:py-[65px]"
    >
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-[27px] top-[22px] flex h-[48px] w-[48px] cursor-pointer items-center justify-center border-0 bg-transparent text-white transition-[opacity,transform] duration-300 hover:rotate-90 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:right-[12px] max-[600px]:top-[12px]"
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
        className="absolute left-[20px] top-1/2 flex h-[55px] w-[55px] -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent text-white transition-[opacity,transform] duration-300 hover:-translate-x-[4px] hover:-translate-y-1/2 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:left-[2px] max-[600px]:h-[44px] max-[600px]:w-[44px]"
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
          key={`${project.slug}-${activeIndex}`}
          src={image.src}
          alt={image.alt}
          className="portfolio-lightbox__image max-h-[82vh] max-w-full object-contain"
        />
      </figure>

      <button
        type="button"
        aria-label="Next photograph"
        onClick={onNext}
        className="absolute right-[20px] top-1/2 flex h-[55px] w-[55px] -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent text-white transition-[opacity,transform] duration-300 hover:translate-x-[4px] hover:-translate-y-1/2 hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white max-[600px]:right-[2px] max-[600px]:h-[44px] max-[600px]:w-[44px]"
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
        {activeIndex + 1} / {project.gallery.length}
      </p>
    </div>
  );
}

export default function PortfolioDetailsPage() {
  const { slug } = useParams();

  const project = useMemo(() => {
    return portfolioProjects.find((item) => item.slug === slug);
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
    if (!project) {
      return;
    }

    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return currentIndex === 0
        ? project.gallery.length - 1
        : currentIndex - 1;
    });
  }, [project]);

  const showNextImage = useCallback(() => {
    if (!project) {
      return;
    }

    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

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
        <SubpageHero
          ariaLabel={`${project.name} ${project.category} portfolio gallery`}
          imageAlt="Bride and groom sharing a quiet wedding moment"
        />

        <PortfolioGallery
          project={project}
          onOpenLightbox={openLightbox}
        />

        <MoreWorks currentProject={project} />
      </main>

      <Footer />

      <GalleryLightbox
        project={project}
        activeIndex={lightboxIndex}
        closeButtonRef={closeButtonRef}
        onClose={closeLightbox}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
      />
    </div>
  );
}