import { Link } from "react-router-dom";

import portfolioWeddingOne from "../../assets/images/portfolio-wedding-1.png";
import portfolioWeddingTwo from "../../assets/images/portfolio-wedding-2.png";
import portfolioWeddingThree from "../../assets/images/portfolio-wedding-3.png";

import portfolioEngagementOne from "../../assets/images/portfolio-engagement-1.png";
import portfolioEngagementTwo from "../../assets/images/portfolio-engagement-2.png";
import portfolioEngagementThree from "../../assets/images/portfolio-engagement-3.png";

import portfolioPortraitOne from "../../assets/images/portfolio-portrait-1.png";
import portfolioPortraitTwo from "../../assets/images/portfolio-portrait-2.png";
import portfolioPortraitThree from "../../assets/images/portfolio-portrait-3.png";

import portfolioPromiseImage from "../../assets/images/portfolio-promise.png";
import portfolioBeautifulImage from "../../assets/images/portfolio-beautiful.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubpageHero from "../../components/SubpageHero/SubpageHero";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./portfolio-page.css";

const portfolioItems = [
  {
    id: 1,
    name: "Sarah & Luke",
    category: "Wedding",
    slug: "sarah-luke-wedding",
    image: portfolioWeddingOne,
    imageAlt: "Sarah and Luke sharing a quiet wedding moment",
  },
  {
    id: 2,
    name: "Richard & Jane",
    category: "Wedding",
    slug: "richard-jane-wedding",
    image: portfolioWeddingTwo,
    imageAlt: "Richard and Jane celebrating their winter wedding",
  },
  {
    id: 3,
    name: "Gareth & Eva",
    category: "Wedding",
    slug: "gareth-eva-wedding",
    image: portfolioWeddingThree,
    imageAlt: "Gareth and Eva smiling together on their wedding day",
  },
  {
    id: 4,
    name: "Sarah & Luke",
    category: "Engagement",
    slug: "sarah-luke-engagement",
    image: portfolioEngagementOne,
    imageAlt: "Sarah and Luke during their engagement session",
  },
  {
    id: 5,
    name: "Richard & Jane",
    category: "Engagement",
    slug: "richard-jane-engagement",
    image: portfolioEngagementTwo,
    imageAlt: "Richard and Jane embracing during their engagement session",
  },
  {
    id: 6,
    name: "Gareth & Eva",
    category: "Engagement",
    slug: "gareth-eva-engagement",
    image: portfolioEngagementThree,
    imageAlt: "Gareth and Eva enjoying an outdoor engagement session",
  },
  {
    id: 7,
    name: "Sarah",
    category: "Portrait",
    slug: "sarah-portrait",
    image: portfolioPortraitOne,
    imageAlt: "Portrait session with Sarah",
  },
  {
    id: 8,
    name: "Jane",
    category: "Portrait",
    slug: "jane-portrait",
    image: portfolioPortraitTwo,
    imageAlt: "Portrait session with Jane in a field",
  },
  {
    id: 9,
    name: "Angeline",
    category: "Portrait",
    slug: "angeline-portrait",
    image: portfolioPortraitThree,
    imageAlt: "Outdoor portrait session with Angeline",
  },
];

const primaryButtonClasses =
  "inline-flex min-h-[68px] min-w-[181px] items-center justify-center border border-transparent bg-[#e8dfd7] px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] no-underline transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:outline-none max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] motion-reduce:transform-none";

const outlineButtonClasses =
  "inline-flex min-h-[68px] min-w-[181px] items-center justify-center border border-[#d4bda8] bg-white px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] no-underline transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.14)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:outline-none max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] motion-reduce:transform-none";

function getRevealStyle(delay) {
  return {
    "--portfolio-delay": `${delay}ms`,
  };
}

function PortfolioCard({ item, index }) {
  return (
    <article
      style={getRevealStyle(240 + index * 85)}
      className="portfolio-reveal portfolio-card min-w-0"
    >
      <Link
        to={`/portfolio/${item.slug}`}
        aria-label={`View ${item.name} ${item.category} portfolio`}
        className="portfolio-card__link group block h-full text-inherit no-underline focus-visible:outline-none"
      >
        <figure className="portfolio-card__media m-0 aspect-[4/4.65] w-full overflow-hidden bg-[#ded8cf]">
          <img
            src={item.image}
            alt={item.imageAlt}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            className="portfolio-card__image block h-full w-full object-cover object-center"
          />
        </figure>

        <div className="portfolio-card__content bg-[#f5f4f2] px-5 pb-[16px] pt-[14px] text-center max-[600px]:px-[14px]">
          <h2 className="portfolio-card__name m-0 font-script text-[39px] font-normal leading-[0.88] tracking-[0.005em] text-heading max-[1280px]:text-[36px] max-[1024px]:text-[34px] max-[600px]:text-[31px] max-[380px]:text-[28px]">
            {item.name}
          </h2>

          <p className="portfolio-card__category mb-0 mt-[9px] font-eyebrow text-[15px] font-normal uppercase leading-none tracking-[0.27em] text-accent-text max-[1280px]:text-[14px] max-[1024px]:text-[13px] max-[600px]:text-[12px]">
            {item.category}
          </p>
        </div>
      </Link>
    </article>
  );
}

function HighlightedWorks() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="portfolio-heading"
      className={`portfolio-reveal-scope portfolio-works overflow-hidden bg-white pb-[110px] pt-[94px] max-[1280px]:pb-[100px] max-[1280px]:pt-[88px] max-[1024px]:pb-[90px] max-[1024px]:pt-[82px] max-[768px]:pb-[80px] max-[768px]:pt-[72px] max-[600px]:pb-[70px] max-[600px]:pt-[62px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p
            style={getRevealStyle(80)}
            className="portfolio-reveal section-eyebrow"
          >
            Portfolio
          </p>

          <h1
            id="portfolio-heading"
            style={getRevealStyle(180)}
            className="portfolio-reveal section-title uppercase"
          >
            Highlighted Works
          </h1>
        </header>

        <div className="mt-[65px] grid w-full grid-cols-3 gap-x-[58px] gap-y-[72px] max-[1280px]:mt-[60px] max-[1280px]:gap-x-[44px] max-[1280px]:gap-y-[64px] max-[1024px]:mt-14 max-[1024px]:gap-x-[32px] max-[1024px]:gap-y-[56px] max-[760px]:grid-cols-2 max-[760px]:gap-x-5 max-[760px]:gap-y-[44px] max-[600px]:mt-12 max-[480px]:mt-[41px] max-[480px]:grid-cols-1 max-[480px]:gap-y-[38px]">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div
          style={getRevealStyle(1040)}
          className="portfolio-reveal mt-[72px] flex justify-center max-[1024px]:mt-[64px] max-[600px]:mt-[54px]"
        >
          <Link
            to="/contact"
            className={outlineButtonClasses}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioPromise() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="portfolio-promise-heading"
      className={`portfolio-reveal-scope portfolio-promise relative isolate flex min-h-[500px] w-full items-center overflow-hidden bg-[#d8d1c7] max-[1280px]:min-h-[465px] max-[1024px]:min-h-[430px] max-[768px]:min-h-[390px] max-[600px]:min-h-[355px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <figure
        style={getRevealStyle(0)}
        className="portfolio-reveal portfolio-promise__media absolute inset-0 -z-[2] m-0 overflow-hidden"
      >
        <img
          src={portfolioPromiseImage}
          alt="Bride and groom sharing a romantic wedding moment"
          loading="lazy"
          decoding="async"
          className="portfolio-promise__image block h-full w-full object-cover object-center"
        />
      </figure>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-[1] bg-black/[0.025]"
      />

      <div className="site-container">
        <div
          style={getRevealStyle(160)}
          className="portfolio-reveal portfolio-promise__box mx-auto w-full max-w-[970px] bg-white/[0.86] p-[15px] max-[1280px]:max-w-[900px] max-[1024px]:max-w-[790px] max-[768px]:p-[12px] max-[600px]:p-[9px]"
        >
          <div className="flex min-h-[238px] flex-col items-center justify-center border border-[#c8a27d] px-[54px] py-[36px] text-center max-[1024px]:min-h-[218px] max-[768px]:min-h-[198px] max-[768px]:px-[36px] max-[600px]:min-h-[182px] max-[600px]:px-[22px]">
            <h2
              id="portfolio-promise-heading"
              style={getRevealStyle(280)}
              className="portfolio-reveal m-0 font-script text-[59px] font-normal leading-[0.9] tracking-[0.005em] text-accent max-[1280px]:text-[56px] max-[1024px]:text-[52px] max-[600px]:text-[48px] max-[480px]:text-[44px]"
            >
              My Promise
            </h2>

            <p
              style={getRevealStyle(400)}
              className="portfolio-reveal mx-auto mb-0 mt-[25px] max-w-[720px] font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-heading max-[1200px]:text-[19px] max-[600px]:mt-[21px] max-[600px]:text-[17px] max-[380px]:text-[16px]"
            >
              I guarantee breathtaking wedding photos that perfectly capture
              the magic of your special day, or your money back
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <SubpageHero
          ariaLabel="Tessa Morgan Photography portfolio"
          imageAlt="Bride and groom sharing a quiet wedding moment"
        />

        <HighlightedWorks />

        <PortfolioPromise />

        <StayBeautiful />

      </main>

      <Footer />
    </div>
  );
}