import awardLeaf from "../../assets/icons/award-leaf.svg";
import floralDivider from "../../assets/icons/floral-divider.svg";
import quoteMark from "../../assets/icons/quote-mark.svg";
import photographerImage from "../../assets/images/photographer.png";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./about.css";

function getRevealStyle(delay) {
  return { "--reveal-delay": `${delay}ms` };
}

function AwardIntro() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="award-heading"
      className={`about-reveal-scope flex min-h-[545px] w-full items-center overflow-hidden bg-surface-soft pb-[86px] pt-[90px] max-[1200px]:min-h-[480px] max-[1200px]:py-[75px] max-[900px]:min-h-[430px] max-[900px]:py-[70px] max-[600px]:min-h-[390px] max-[600px]:py-[60px] max-[380px]:min-h-[360px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container max-w-[1120px] text-center">
        <img
          src={awardLeaf}
          alt=""
          aria-hidden="true"
          style={getRevealStyle(80)}
          className="about-reveal mx-auto mb-[25px] h-auto w-[68px] max-[900px]:mb-[21px] max-[900px]:w-[59px] max-[600px]:mb-[19px] max-[600px]:w-[53px]"
        />

        <p
          style={getRevealStyle(180)}
          className="about-reveal m-0 font-eyebrow text-[20px] font-normal uppercase leading-[1.3] tracking-[0.26em] text-[#c19a76] max-[900px]:text-[16px] max-[900px]:tracking-[0.23em] max-[600px]:text-[12px] max-[600px]:leading-[1.55] max-[600px]:tracking-[0.22em] max-[380px]:mx-auto max-[380px]:max-w-[290px]"
        >
          Award Winning Photography
        </p>

        <h2
          id="award-heading"
          style={getRevealStyle(300)}
          className="about-reveal mx-auto mb-0 mt-[43px] max-w-[1030px] font-primary text-[clamp(48px,4.15vw,61px)] font-normal leading-[1.08] tracking-[-0.018em] text-body max-[1200px]:max-w-[900px] max-[900px]:mt-[34px] max-[900px]:max-w-[740px] max-[900px]:text-[clamp(39px,6vw,51px)] max-[600px]:mt-[29px] max-[600px]:text-[clamp(35px,10vw,44px)] max-[600px]:leading-[1.03] max-[380px]:text-[33px]"
        >
          Preserving your most meaningful moments in a timeless
            and unforgettable way.
        </h2>
      </div>
    </section>
  );
}

function PhotographerIntroduction() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      id="about"
      ref={elementRef}
      aria-labelledby="photographer-heading"
      className={`about-reveal-scope w-full overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="grid min-h-[860px] grid-cols-[minmax(0,48.1%)_minmax(0,51.9%)] max-[1200px]:min-h-[760px] max-[1200px]:grid-cols-[minmax(0,47%)_minmax(0,53%)] max-[900px]:min-h-0 max-[900px]:grid-cols-1">
        <figure
          style={getRevealStyle(80)}
          className="about-reveal about-reveal--left relative m-0 min-h-[860px] overflow-hidden bg-[#e2e2e0] max-[1200px]:min-h-[760px] max-[900px]:aspect-[5/4] max-[900px]:min-h-0 max-[600px]:aspect-[5/6]"
        >
          <img
            src={photographerImage}
            alt="Wedding photographer Tessa holding her camera"
            loading="lazy"
            decoding="async"
            className="about-photo h-full w-full object-cover object-center max-[900px]:object-[center_35%] max-[600px]:object-[46%_center]"
          />
        </figure>

        <article className="flex min-w-0 flex-col items-center justify-center px-[clamp(55px,7vw,112px)] py-[68px] text-center text-[#504e4c] max-[1200px]:px-[55px] max-[1200px]:py-[60px] max-[900px]:min-h-[690px] max-[900px]:px-[60px] max-[900px]:pb-[78px] max-[900px]:pt-[72px] max-[600px]:min-h-0 max-[600px]:px-[22px] max-[600px]:pb-[65px] max-[600px]:pt-[60px] max-[380px]:px-[18px]">
          <img
            src={quoteMark}
            alt=""
            aria-hidden="true"
            style={getRevealStyle(180)}
            className="about-reveal mb-[35px] h-auto w-[72px] max-[900px]:mb-[29px] max-[900px]:w-[65px] max-[600px]:mb-6 max-[600px]:w-[57px]"
          />

          <h2
            id="photographer-heading"
            style={getRevealStyle(300)}
            className="about-reveal m-0 font-primary text-[clamp(40px,3.3vw,51px)] font-normal leading-[1.1] tracking-[-0.012em] text-[#545250] max-[600px]:text-[clamp(34px,9.5vw,42px)] max-[380px]:text-[33px]"
          >
            Hello, My Name is Tessa
          </h2>

          <div
            style={getRevealStyle(420)}
            className="about-reveal mt-[35px] w-[min(100%,610px)] font-primary text-[21px] font-normal leading-[1.38] text-[#504e4c] max-[1200px]:text-[19px] max-[900px]:max-w-[630px] max-[600px]:mt-[27px] max-[600px]:text-[17px] max-[600px]:leading-[1.42] max-[380px]:text-[16px]"
          >
            <p className="m-0">
              I believe wedding photography should feel as genuine as the
              moments themselves. My approach is calm, thoughtful, and focused
              on capturing the quiet emotions, joyful laughter, and meaningful
              details that make your celebration uniquely yours.
            </p>

            <p className="mb-0 mt-[29px] max-[600px]:mt-[22px]">
              From the first look to the final dance, I create elegant and
              heartfelt photographs that allow you to relive your wedding day
              for years to come. Every image is carefully crafted to preserve
              not only how your day looked, but also how it truly felt.
            </p>
          </div>

          <img
            src={floralDivider}
            alt=""
            aria-hidden="true"
            style={getRevealStyle(520)}
            className="about-reveal mt-[38px] h-auto w-[min(100%,295px)] max-[600px]:mt-[31px] max-[600px]:w-[min(100%,255px)]"
          />

          <p
            style={getRevealStyle(620)}
            className="about-reveal mb-0 mt-7 font-script text-[59px] font-normal leading-[0.9] tracking-[0.015em] text-[#464442] max-[1200px]:text-[54px] max-[600px]:mt-6 max-[600px]:text-[50px] max-[380px]:text-[46px]"
          >
            Tessa.M
          </p>

          <div
            style={getRevealStyle(720)}
            className="about-reveal mt-[27px] max-[600px]:mt-[23px]"
          >
            <a
              href="#portfolio"
              className="inline-flex min-h-[68px] min-w-[181px] items-center justify-center border border-transparent bg-[#e8dfd7] px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] no-underline transition-[color,background-color,border-color,transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:shadow-[0_14px_28px_rgba(104,79,58,0.16)] max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px]"
            >
              Discover My Story
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <AwardIntro />
      <PhotographerIntroduction />
    </>
  );
}