import { Link } from "react-router-dom";

import serviceHeroImage from "../../assets/images/page-hero.png";
import weddingPackageImage from "../../assets/images/service-wedding.png";
import portraitPackageImage from "../../assets/images/service-portrait.png";
import engagementPackageImage from "../../assets/images/service-engagement.png";

import processBrideImage from "../../assets/images/process-bride.png";
import processTableImage from "../../assets/images/process-table.png";
import processPortraitImage from "../../assets/images/process-portrait.png";
import processVenueImage from "../../assets/images/process-venue.png";
import processCoupleImage from "../../assets/images/process-couple.png";

import awardLeafIcon from "../../assets/icons/award-leaf.svg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./services-page.css";

const photographyPackages = [
  {
    id: 1,
    title: "Wedding",
    image: weddingPackageImage,
    imageAlt: "Bride and groom standing together on their wedding day",
    features: [
      "500+ High-Quality Photos",
      "6 Hours HD Footage",
      "*Additional Photographer subject to charge",
      "*Videographer subject to charge",
    ],
    price: "$799",
  },
  {
    id: 2,
    title: "Portrait",
    image: portraitPackageImage,
    imageAlt: "Elegant portrait of a woman",
    features: [
      "At least 10 High Quality Photos",
      "Professionally Edited",
      "Hourly rates applied",
      "*Videographer subject to charge",
    ],
    price: "$399",
  },
  {
    id: 3,
    title: "Engagement",
    image: engagementPackageImage,
    imageAlt: "Couple celebrating their engagement outdoors",
    features: [
      "200 High-Quality Photos",
      "3 Hours HD Footage",
      "*Additional Photographer subject to charge",
      "*Videographer subject to charge",
    ],
    price: "$799",
  },
];

const processItems = [
  {
    id: 1,
    type: "image",
    image: processBrideImage,
    imageAlt: "Bride walking through an outdoor wedding setting",
    imagePosition: "center",
  },
  {
    id: 2,
    type: "step",
    number: "1",
    title: "Breaking the Ice",
    description:
      "We begin with a relaxed conversation so you feel comfortable, confident, and completely natural in front of the camera.",
  },
  {
    id: 3,
    type: "image",
    image: processTableImage,
    imageAlt: "Wedding reception table decorated with flowers and candles",
    imagePosition: "center",
  },
  {
    id: 4,
    type: "step",
    number: "2",
    title: "Planning & Preparation",
    description:
      "Together we plan every meaningful detail, from the timeline and locations to the photographs that matter most to you.",
  },
  {
    id: 5,
    type: "image",
    image: processPortraitImage,
    imageAlt: "Bride holding an elegant white wedding bouquet",
    imagePosition: "center",
  },
  {
    id: 6,
    type: "step",
    number: "3",
    title: "Session Coverage",
    description:
      "On the day, I quietly document honest emotions, graceful details, and joyful moments as they naturally unfold.",
  },
  {
    id: 7,
    type: "image",
    image: processVenueImage,
    imageAlt: "Outdoor wedding ceremony venue decorated with flowers",
    imagePosition: "center",
  },
  {
    id: 8,
    type: "step",
    number: "4",
    title: "Post-Production & Delivery",
    description:
      "Each photograph is carefully refined and delivered in a timeless gallery created for you to revisit for years to come.",
  },
  {
    id: 9,
    type: "image",
    image: processCoupleImage,
    imageAlt: "Bride and groom holding a wedding bouquet together",
    imagePosition: "center",
  },
];

function getPackageRevealStyle(delay) {
  return {
    "--package-delay": `${delay}ms`,
  };
}

function getProcessRevealStyle(delay) {
  return {
    "--process-delay": `${delay}ms`,
  };
}

function ServicesHero() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -20px",
  });

  return (
    <section
      ref={elementRef}
      aria-label="Wedding photography services"
      className={`services-hero relative h-[392px] w-full overflow-hidden bg-[#ddd8cf] max-[1280px]:h-[365px] max-[1024px]:h-[335px] max-[768px]:h-[300px] max-[600px]:h-[265px] max-[480px]:h-[235px] max-[380px]:h-[215px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <img
        src={serviceHeroImage}
        alt="Bride and groom sharing a quiet wedding moment"
        loading="eager"
        decoding="async"
        className="services-hero__image block h-full w-full object-cover object-center"
      />
    </section>
  );
}

function PackageCard({ photographyPackage, index, showRightBorder }) {
  return (
    <article
      style={getPackageRevealStyle(220 + index * 150)}
      className="package-card-reveal group min-w-0"
    >
      <figure className="package-card__media m-0 aspect-[3/4] w-full overflow-hidden bg-[#ded8cf]">
        <img
          src={photographyPackage.image}
          alt={photographyPackage.imageAlt}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="block h-full w-full object-cover object-center"
        />
      </figure>

      <h2 className="package-card__title mb-0 mt-[43px] text-center font-script text-[59px] font-normal leading-[0.85] tracking-[0.005em] text-heading max-[1280px]:mt-[39px] max-[1280px]:text-[55px] max-[1024px]:text-[52px] max-[600px]:mt-[34px] max-[600px]:text-[48px] max-[380px]:text-[44px]">
        {photographyPackage.title}
      </h2>

      <div
        className={`mt-[29px] flex min-h-[385px] flex-col border-l border-[#d9bda4] px-[39px] pb-[6px] max-[1280px]:min-h-[370px] max-[1280px]:px-[30px] max-[1024px]:min-h-[355px] max-[760px]:min-h-0 max-[760px]:border-r max-[760px]:px-[34px] max-[480px]:px-[27px] max-[380px]:px-[23px] ${
          showRightBorder ? "border-r" : ""
        }`}
      >
        <ul className="m-0 list-none space-y-[13px] p-0 font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-body max-[1200px]:text-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
          {photographyPackage.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="mt-auto pt-[39px] text-center max-[760px]:pt-10">
          <p className="m-0 font-eyebrow text-[15px] font-normal uppercase leading-[1.3] tracking-[0.27em] text-accent-text max-[1280px]:text-[14px] max-[1024px]:text-[13px] max-[768px]:text-[12px] max-[480px]:text-[11px]">
            Per Session
          </p>

          <p className="mb-0 mt-[20px] font-number text-[52px] font-normal leading-none tracking-[-0.02em] text-heading max-[1280px]:text-[49px] max-[1024px]:text-[46px] max-[600px]:mt-[17px] max-[600px]:text-[43px] max-[380px]:text-[40px]">
            {photographyPackage.price}
          </p>
        </div>
      </div>
    </article>
  );
}

function PhotographyPackages() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.1,
    rootMargin: "0px 0px -70px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="photography-packages-heading"
      className={`packages-section section-shell overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p
            style={getPackageRevealStyle(0)}
            className="packages-heading-reveal section-eyebrow"
          >
            Services
          </p>

          <h1
            id="photography-packages-heading"
            style={getPackageRevealStyle(100)}
            className="packages-heading-reveal section-title uppercase"
          >
            Photography Packages
          </h1>
        </header>

        <div className="mt-[65px] grid w-full grid-cols-3 gap-x-[52px] gap-y-[72px] max-[1280px]:mt-[60px] max-[1280px]:gap-x-[38px] max-[1024px]:mt-14 max-[1024px]:grid-cols-2 max-[1024px]:gap-x-7 max-[760px]:mt-12 max-[760px]:grid-cols-1 max-[760px]:gap-y-[62px] max-[480px]:mt-[41px]">
          {photographyPackages.map((photographyPackage, index) => (
            <div
              key={photographyPackage.id}
              className={
                index === photographyPackages.length - 1
                  ? "max-[1024px]:col-span-2 max-[1024px]:mx-auto max-[1024px]:w-[calc((100%_-_28px)/2)] max-[760px]:col-span-1 max-[760px]:w-full"
                  : ""
              }
            >
              <PackageCard
                photographyPackage={photographyPackage}
                index={index}
                showRightBorder={
                  index === photographyPackages.length - 1
                }
              />
            </div>
          ))}
        </div>

        <div
          style={getPackageRevealStyle(760)}
          className="package-button-reveal mt-[68px] flex justify-center max-[1024px]:mt-[62px] max-[600px]:mt-[54px]"
        >
          <Link
            to="/contact"
            className="inline-flex min-h-[68px] min-w-[181px] items-center justify-center border border-transparent bg-[#e8dfd7] px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] no-underline transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:outline-none max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] motion-reduce:transform-none"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

function getPromiseRevealStyle(delay) {
  return {
    "--promise-delay": `${delay}ms`,
  };
}

function ServicePromise() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="service-promise-heading"
      className={`service-promise flex min-h-[360px] w-full items-center overflow-hidden bg-surface-soft pb-[86px] pt-[90px] max-[1200px]:min-h-[480px] max-[1200px]:py-[75px] max-[900px]:min-h-[430px] max-[900px]:py-[70px] max-[600px]:min-h-[390px] max-[600px]:py-[60px] max-[380px]:min-h-[360px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container max-w-[1120px] text-center">
        <img
          src={awardLeafIcon}
          alt=""
          aria-hidden="true"
          style={getPromiseRevealStyle(80)}
          className="service-promise-reveal mx-auto mb-[25px] h-auto w-[68px] object-contain max-[900px]:mb-[21px] max-[900px]:w-[59px] max-[600px]:mb-[19px] max-[600px]:w-[53px]"
        />

        <h2
          id="service-promise-heading"
          style={getPromiseRevealStyle(200)}
          className="service-promise-reveal mx-auto mb-0 max-w-[1030px] font-primary text-[clamp(48px,4.15vw,61px)] font-normal leading-[1.08] tracking-[-0.018em] text-body max-[1200px]:max-w-[900px] max-[900px]:max-w-[740px] max-[900px]:text-[clamp(39px,6vw,51px)] max-[600px]:text-[clamp(35px,10vw,44px)] max-[600px]:leading-[1.03] max-[380px]:text-[33px]"
        >
          Celebrate your love with stunning images that will be cherished for a
          lifetime
        </h2>
      </div>
    </section>
  );
}

function ProcessStep({ item }) {
  return (
    <article className="process-cell process-cell--content flex aspect-[4/5] min-w-0 flex-col items-center justify-center bg-white px-[42px] py-[42px] text-center max-[1280px]:px-[35px] max-[1100px]:px-7 max-[900px]:px-[38px] max-[600px]:aspect-auto max-[600px]:min-h-[360px] max-[480px]:min-h-[330px] max-[480px]:px-[27px] max-[380px]:min-h-[315px] max-[380px]:px-5">
      <p className="m-0 font-number text-[67px] font-normal leading-[0.85] tracking-[-0.02em] text-accent max-[1280px]:text-[63px] max-[1024px]:text-[59px] max-[768px]:text-[55px] max-[480px]:text-[51px]">
        {item.number}
      </p>

      <span
        aria-hidden="true"
        className="mt-[25px] block h-px w-[112px] bg-[#d4ae8b] max-[480px]:mt-[22px] max-[480px]:w-[96px]"
      />

      <h3 className="mb-0 mt-[22px] font-primary text-[21px] font-normal uppercase leading-[1.2] tracking-[0.015em] text-heading max-[1200px]:text-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
        {item.title}
      </h3>

      <p className="mb-0 mt-[21px] max-w-[275px] font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-body max-[1200px]:max-w-[250px] max-[1200px]:text-[19px] max-[900px]:max-w-[285px] max-[600px]:max-w-[340px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
        {item.description}
      </p>
    </article>
  );
}

function ProcessImage({ item, index }) {
  return (
    <figure className="process-cell process-cell--image m-0 aspect-[4/5] min-w-0 overflow-hidden bg-[#ded8cf]">
      <img
        src={item.image}
        alt={item.imageAlt}
        loading={index < 3 ? "eager" : "lazy"}
        decoding="async"
        className="block h-full w-full object-cover"
        style={{
          objectPosition: item.imagePosition,
        }}
      />
    </figure>
  );
}

function ServiceProcess() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -80px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="service-process-heading"
      className={`service-process section-shell overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p className="process-heading-reveal section-eyebrow">
            Process
          </p>

          <h2
            id="service-process-heading"
            className="process-heading-reveal process-heading-delay section-title"
          >
            What to Expect
          </h2>
        </header>

        <div className="mt-[65px] grid w-full grid-cols-3 gap-0 max-[1280px]:mt-[60px] max-[1024px]:mt-14 max-[900px]:grid-cols-2 max-[768px]:mt-12 max-[600px]:grid-cols-1 max-[480px]:mt-[41px]">
          {processItems.map((item, index) => (
            <div
              key={item.id}
              style={getProcessRevealStyle(180 + index * 90)}
              className="process-cell-reveal min-w-0"
            >
              {item.type === "image" ? (
                <ProcessImage
                  item={item}
                  index={index}
                />
              ) : (
                <ProcessStep item={item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <ServicesHero />

        <PhotographyPackages />

        <ServicePromise />

        <ServiceProcess />

        {/* =====================================================
            Add the next Services Page section below this comment.
        ====================================================== */}
      </main>

      <Footer />
    </div>
  );
}