import engagementIcon from "../../assets/icons/engagement-service.svg";
import portraitIcon from "../../assets/icons/portrait-service.svg";
import weddingIcon from "../../assets/icons/wedding-service.svg";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./services.css";

const services = [
  {
    id: 1,
    title: "Wedding",
    price: "$2999",
    icon: weddingIcon,
    href: "#wedding-service",
  },
  {
    id: 2,
    title: "Portrait",
    price: "$399",
    icon: portraitIcon,
    href: "#portrait-service",
  },
  {
    id: 3,
    title: "Engagement",
    price: "$1999",
    icon: engagementIcon,
    href: "#engagement-service",
  },
];

function getRevealStyle(delay) {
  return {
    "--services-delay": `${delay}ms`,
  };
}

function ServiceCard({ service, index }) {
  return (
    <article
      style={getRevealStyle(220 + index * 150)}
      className="services-card-reveal group flex min-h-[552px] min-w-0 flex-col items-center bg-surface px-[34px] pb-9 pt-11 text-center transition-shadow duration-[350ms] hover:shadow-[0_22px_55px_rgba(71,57,45,0.07)] max-[1280px]:min-h-[530px] max-[1280px]:px-[25px] max-[1024px]:min-h-[525px] max-[480px]:min-h-[500px] max-[480px]:px-[22px] max-[480px]:pb-8 max-[480px]:pt-9 max-[360px]:min-h-[480px]"
    >
      <div className="flex h-[162px] w-full items-center justify-center max-[480px]:h-[150px]">
        <img
          src={service.icon}
          alt=""
          aria-hidden="true"
          className="h-[155px] w-auto object-contain transition-transform duration-500 ease-elegant group-hover:-translate-y-[7px] max-[480px]:h-[143px] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>

      <h3 className="mb-0 mt-1 font-script text-[61px] font-normal leading-[0.95] tracking-[0.01em] text-[#5a5957] max-[1280px]:text-[55px] max-[480px]:text-[53px] max-[360px]:text-[49px]">
        {service.title}
      </h3>

      <div className="mt-[49px] max-[480px]:mt-10">
        <p className="m-0 font-primary text-[21px] font-normal leading-[1.38] tracking-[0.06em] text-[#666462] max-[1200px]:text-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
          Per Session
        </p>

        <p className="mb-0 mt-[9px] font-primary text-[37px] font-normal leading-none tracking-[0.06em] text-[#666462] max-[480px]:text-[34px]">
          {service.price}
        </p>
      </div>

      <a
        href={service.href}
        aria-label={`View more details about ${service.title} photography`}
        className="mt-[51px] inline-flex min-h-[68px] min-w-[181px] items-center justify-center border border-transparent bg-[#e8dfd7] px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] no-underline transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:shadow-[0_14px_28px_rgba(104,79,58,0.16)] max-[600px]:mt-[43px] max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] motion-reduce:transform-none"
      >
        More Details
      </a>
    </article>
  );
}

export default function Services() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.14,
    rootMargin: "0px 0px -60px",
  });

  return (
    <section
      id="services"
      ref={elementRef}
      aria-labelledby="services-heading"
      className={`services-reveal-scope section-shell overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p
            style={getRevealStyle(0)}
            className="services-heading-reveal section-eyebrow"
          >
            Services
          </p>

          <h2
            id="services-heading"
            style={getRevealStyle(100)}
            className="services-heading-reveal section-title"
          >
            What I Offer
          </h2>
        </header>

        <div className="mx-auto mt-[65px] grid grid-cols-3 gap-[66px] max-[1280px]:gap-[38px] max-[1024px]:mt-14 max-[1024px]:max-w-[820px] max-[1024px]:grid-cols-2 max-[1024px]:gap-8 max-[760px]:mt-12 max-[760px]:max-w-[450px] max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[480px]:mt-[41px] max-[480px]:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={
                index === services.length - 1
                  ? "max-[1024px]:col-span-2 max-[1024px]:mx-auto max-[1024px]:w-[calc((100%-32px)/2)] max-[760px]:col-span-1 max-[760px]:w-full"
                  : ""
              }
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}