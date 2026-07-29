import serviceHeroImage from "../../assets/images/services-hero.png";
import weddingPackageImage from "../../assets/images/service-wedding.png";
import portraitPackageImage from "../../assets/images/service-portrait.png";
import engagementPackageImage from "../../assets/images/service-engagement.png";

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

function getRevealStyle(delay) {
  return {
    "--package-delay": `${delay}ms`,
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
      style={getRevealStyle(220 + index * 150)}
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

      <h2 className="package-card__title mb-0 mt-[43px] text-center font-script text-[61px] font-normal leading-[0.82] tracking-[0.005em] text-[#5b5957] max-[1280px]:mt-[39px] max-[1280px]:text-[56px] max-[1024px]:text-[54px] max-[600px]:mt-[34px] max-[600px]:text-[51px] max-[380px]:text-[47px]">
        {photographyPackage.title}
      </h2>

      <div
        className={`mt-[29px] flex min-h-[385px] flex-col border-l border-[#d9bda4] px-[39px] pb-[6px] max-[1280px]:min-h-[370px] max-[1280px]:px-[30px] max-[1024px]:min-h-[355px] max-[760px]:min-h-0 max-[760px]:border-r max-[760px]:px-[34px] max-[480px]:px-[27px] max-[380px]:px-[23px] ${
          showRightBorder ? "border-r" : ""
        }`}
      >
        <ul className="m-0 list-none space-y-[13px] p-0 font-primary text-[21px] font-normal leading-[1.28] tracking-[-0.01em] text-[#64615e] max-[1200px]:text-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
          {photographyPackage.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="mt-auto pt-[39px] text-center max-[760px]:pt-10">
          <p className="m-0 font-eyebrow text-[17px] font-normal uppercase leading-[1.2] tracking-[0.25em] text-[#c09b7a] max-[1200px]:text-[15px] max-[600px]:text-[13px]">
            Per Session
          </p>

          <p className="mb-0 mt-[21px] font-primary text-[52px] font-normal leading-[0.85] tracking-[-0.02em] text-[#595755] max-[1280px]:text-[48px] max-[600px]:mt-[17px] max-[600px]:text-[45px]">
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
      className={`packages-section overflow-hidden bg-white pb-[92px] pt-[128px] max-[1280px]:pb-[86px] max-[1280px]:pt-[112px] max-[1024px]:pb-[80px] max-[1024px]:pt-[96px] max-[768px]:pb-[72px] max-[768px]:pt-[80px] max-[480px]:pb-[64px] max-[480px]:pt-[67px] max-[380px]:pb-[58px] max-[380px]:pt-[60px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p
            style={getRevealStyle(0)}
            className="packages-heading-reveal section-eyebrow"
          >
            Services
          </p>

          <h1
            id="photography-packages-heading"
            style={getRevealStyle(100)}
            className="packages-heading-reveal section-title uppercase"
          >
            Photography Packages
          </h1>
        </header>

        <div className="mx-auto mt-[78px] grid grid-cols-3 gap-x-[52px] gap-y-[72px] max-[1280px]:mt-[70px] max-[1280px]:gap-x-[38px] max-[1024px]:mt-[62px] max-[1024px]:max-w-[860px] max-[1024px]:grid-cols-2 max-[1024px]:gap-x-7 max-[760px]:mt-[54px] max-[760px]:max-w-[470px] max-[760px]:grid-cols-1 max-[760px]:gap-y-[62px] max-[480px]:mt-[45px]">
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
          style={getRevealStyle(760)}
          className="package-button-reveal mt-[68px] flex justify-center max-[1024px]:mt-[62px] max-[600px]:mt-[54px]"
        >
          <a
            href="/contact"
            className="inline-flex min-h-[68px] min-w-[276px] items-center justify-center border border-[#d9bda4] bg-white px-[38px] py-[15px] font-primary text-[21px] font-normal uppercase leading-none tracking-[0.02em] text-[#56524f] no-underline transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:outline-none max-[600px]:min-h-[59px] max-[600px]:min-w-[230px] max-[600px]:text-[18px] motion-reduce:transform-none"
          >
            Get in Touch
          </a>
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

        {/* =====================================================
            Add the next Services Page section below this comment.
        ====================================================== */}
      </main>

      <Footer />
    </div>
  );
}