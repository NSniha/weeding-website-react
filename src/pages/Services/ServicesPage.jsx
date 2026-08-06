import { useState } from "react";
import { Link } from "react-router-dom";

import weddingPackageImage from "../../assets/images/service-wedding.png";
import portraitPackageImage from "../../assets/images/service-portrait.png";
import engagementPackageImage from "../../assets/images/service-engagement.png";

import processBrideImage from "../../assets/images/process-bride.png";
import processTableImage from "../../assets/images/process-table.png";
import processPortraitImage from "../../assets/images/process-portrait.png";
import processVenueImage from "../../assets/images/process-venue.png";
import processCoupleImage from "../../assets/images/process-couple.png";

import qualityTableImage from "../../assets/images/quality-service-table.png";
import qualityRingsImage from "../../assets/images/quality-service-rings.png";

import awardLeafIcon from "../../assets/icons/award-leaf.svg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubpageHero from "../../components/SubpageHero/SubpageHero";
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

const faqItems = [
  {
    id: 1,
    question: "What is your photography style?",
    answer:
      "My style is elegant, natural, and emotion-focused. I combine thoughtfully guided portraits with genuine candid moments to create photographs that feel timeless and personal.",
  },
  {
    id: 2,
    question: "How far in advance should we book your services?",
    answer:
      "Most couples reserve their date between six and twelve months in advance. Popular wedding dates may book earlier, so reaching out once your date is confirmed is recommended.",
  },
  {
    id: 3,
    question: "Do you require a deposit, and what are your payment terms?",
    answer:
      "A non-refundable retainer is required to secure your date. The remaining balance and payment schedule will be clearly outlined in your photography agreement.",
  },
  {
    id: 4,
    question: "Can we customize a photography package to fit our needs?",
    answer:
      "Yes. Coverage time, additional photographers, albums, engagement sessions, and other options can be customized around your celebration.",
  },
  {
    id: 5,
    question: "How soon after the event will I receive my photos?",
    answer:
      "Your carefully edited online gallery is normally delivered within six to eight weeks. A smaller preview collection is shared shortly after the wedding.",
  },
];

function getPackageRevealStyle(delay) {
  return {
    "--package-delay": `${delay}ms`,
  };
}

function getPromiseRevealStyle(delay) {
  return {
    "--promise-delay": `${delay}ms`,
  };
}

function getProcessRevealStyle(delay) {
  return {
    "--process-delay": `${delay}ms`,
  };
}

function getFaqRevealStyle(delay) {
  return {
    "--faq-delay": `${delay}ms`,
  };
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
                showRightBorder={index === photographyPackages.length - 1}
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

function ServicePromise() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="service-promise-heading"
      className={`service-promise flex min-h-[350px] w-full items-center overflow-hidden bg-surface-soft pb-[86px] pt-[90px] max-[1200px]:min-h-[350px] max-[1200px]:py-[75px] max-[900px]:min-h-[430px] max-[900px]:py-[70px] max-[600px]:min-h-[390px] max-[600px]:py-[60px] max-[380px]:min-h-[360px] ${
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

function FaqItem({ item, isOpen, onToggle, index }) {
  const questionId = `faq-question-${item.id}`;
  const answerId = `faq-answer-${item.id}`;

  return (
    <article
      style={getFaqRevealStyle(180 + index * 90)}
      className={`faq-item faq-item-reveal border-b border-[#dedbd8] ${
        isOpen ? "is-open" : ""
      }`}
    >
      <h3 className="m-0">
        <button
          id={questionId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
          className="group grid w-full cursor-pointer grid-cols-[42px_minmax(0,1fr)] items-center gap-[27px] border-0 bg-transparent px-0 py-[22px] text-left max-[900px]:grid-cols-[36px_minmax(0,1fr)] max-[900px]:gap-[21px] max-[600px]:grid-cols-[30px_minmax(0,1fr)] max-[600px]:gap-4 max-[600px]:py-[19px]"
        >
          <span
            aria-hidden="true"
            className="faq-plus relative block h-[30px] w-[30px] text-[#b9865d] max-[600px]:h-[25px] max-[600px]:w-[25px]"
          >
            <span className="absolute left-1/2 top-1/2 block h-px w-full -translate-x-1/2 -translate-y-1/2 bg-current" />

            <span className="faq-plus__vertical absolute left-1/2 top-1/2 block h-full w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
          </span>

          <span className="font-primary text-[21px] font-normal uppercase leading-[1.25] tracking-[0.01em] text-heading transition-colors duration-300 group-hover:text-[#aa7d59] group-focus-visible:text-[#aa7d59] max-[1200px]:text-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
            {item.question}
          </span>
        </button>
      </h3>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className="faq-answer"
      >
        <div className="faq-answer__inner">
          <p className="mb-[24px] ml-[69px] mt-0 max-w-[770px] pr-5 font-primary text-[19px] font-normal leading-[1.5] text-body max-[900px]:ml-[57px] max-[600px]:mb-[20px] max-[600px]:ml-[46px] max-[600px]:pr-0 max-[600px]:text-[17px] max-[380px]:text-[16px]">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

function ServiceFaq() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.1,
    rootMargin: "0px 0px -70px",
  });

  const toggleFaq = (faqId) => {
    setOpenFaqId((currentId) => (currentId === faqId ? null : faqId));
  };

  return (
    <section
      ref={elementRef}
      aria-labelledby="service-faq-heading"
      className={`service-faq section-shell overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p className="faq-heading-reveal section-eyebrow">
            FAQ
          </p>

          <h2
            id="service-faq-heading"
            className="faq-heading-reveal faq-heading-delay section-title"
          >
            Any Queries?
          </h2>
        </header>

        <div className="mx-auto mt-[65px] w-full max-w-[1030px] max-[1280px]:mt-[60px] max-[1024px]:mt-14 max-[768px]:mt-12 max-[480px]:mt-[41px]">
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openFaqId === item.id}
              onToggle={() => toggleFaq(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityService() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.12,
    rootMargin: "0px 0px -70px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="quality-service-heading"
      className={`quality-service overflow-hidden bg-white pb-10 pt-[44px] max-[1280px]:pb-10 max-[1024px]:pb-[90px] max-[900px]:pt-[36px] max-[768px]:pb-[80px] max-[480px]:pb-[68px] max-[480px]:pt-[28px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="relative mx-auto h-[680px] w-full max-w-[1050px] max-[1100px]:h-[630px] max-[900px]:h-[590px] max-[800px]:flex max-[800px]:h-auto max-[800px]:max-w-[620px] max-[800px]:flex-col">
          <figure className="quality-service__left-media absolute left-0 top-0 z-[2] m-0 h-[520px] w-[330px] overflow-hidden bg-[#ded8cf] max-[1100px]:h-[485px] max-[1100px]:w-[305px] max-[900px]:h-[450px] max-[900px]:w-[280px] max-[800px]:relative max-[800px]:left-auto max-[800px]:top-auto max-[800px]:h-auto max-[800px]:w-full max-[800px]:aspect-[4/4.65]">
            <img
              src={qualityTableImage}
              alt="Elegant wedding reception table prepared for guests"
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover object-center"
            />
          </figure>

          <h2
            id="quality-service-heading"
            className="quality-service__title absolute left-[36%] top-[47px] z-[4] m-0 whitespace-nowrap font-script text-[67px] font-normal leading-none tracking-[0.005em] text-[#555351] max-[1100px]:left-[35%] max-[1100px]:text-[62px] max-[900px]:top-[39px] max-[900px]:text-[57px] max-[800px]:static max-[800px]:z-[4] max-[800px]:mx-auto max-[800px]:mt-[-25px] max-[800px]:whitespace-normal max-[800px]:text-center max-[600px]:text-[54px] max-[480px]:mt-[-20px] max-[480px]:text-[49px] max-[380px]:text-[45px]"
          >
            Quality Service
          </h2>

          <div className="quality-service__panel absolute left-[18%] top-[155px] z-[1] min-h-[405px] w-[70%] bg-[#f4f4f4] px-[52px] pb-[45px] pt-[38px] max-[1100px]:top-[145px] max-[1100px]:min-h-[385px] max-[1100px]:px-[45px] max-[900px]:left-[17%] max-[900px]:top-[132px] max-[900px]:min-h-[365px] max-[900px]:w-[73%] max-[900px]:px-[38px] max-[800px]:relative max-[800px]:left-auto max-[800px]:top-auto max-[800px]:z-[1] max-[800px]:mt-[-8px] max-[800px]:min-h-0 max-[800px]:w-full max-[800px]:px-[48px] max-[800px]:pb-[46px] max-[800px]:pt-[50px] max-[600px]:px-[34px] max-[600px]:pb-[42px] max-[600px]:pt-[45px] max-[480px]:px-[26px]">
            <div className="ml-[31%] max-w-[520px] max-[800px]:ml-0 max-[800px]:max-w-none max-[800px]:text-center">
              <p className="m-0 font-primary text-[21px] font-normal leading-[1.38] tracking-[0.015em] text-[#4f4c49] max-[1200px]:text-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
                On your big day, you can count on me to turn fleeting moments
                into timeless treasures you will cherish for generations.
              </p>

              <Link
                to="/contact"
                className="mt-[28px] inline-flex min-h-[68px] min-w-[181px] items-center justify-center border border-transparent bg-[#e8dfd7] px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] no-underline transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:outline-none max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] motion-reduce:transform-none"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          <figure className="quality-service__rings-media absolute bottom-0 left-[37%] z-[3] m-0 h-[265px] w-[59%] overflow-hidden bg-[#ded8cf] max-[1100px]:h-[245px] max-[900px]:h-[225px] max-[900px]:w-[61%] max-[800px]:relative max-[800px]:bottom-auto max-[800px]:left-auto max-[800px]:z-[3] max-[800px]:h-auto max-[800px]:w-full max-[800px]:aspect-[16/8.8]">
            <img
              src={qualityRingsImage}
              alt="Two gold wedding rings resting on delicate fabric"
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover object-center"
            />
          </figure>
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
        <SubpageHero
          ariaLabel="Wedding photography services"
          imageAlt="Bride and groom sharing a quiet wedding moment"
        />

        <PhotographyPackages />

        <ServicePromise />

        <ServiceProcess />

        <ServiceFaq />

        <QualityService />

        {/* Add the next Services Page section below this comment. */}
      </main>

      <Footer />
    </div>
  );
}