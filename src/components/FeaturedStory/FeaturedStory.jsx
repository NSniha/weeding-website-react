import brideImage from "../../assets/images/featured-bride.png";
import coupleImage from "../../assets/images/featured-couple.png";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./featured-story.css";

function getRevealStyle(delay) {
  return {
    "--featured-delay": `${delay}ms`,
  };
}

export default function FeaturedStory() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.14,
    rootMargin: "0px 0px -70px",
  });

  return (
    <section
      id="portfolio"
      ref={elementRef}
      aria-labelledby="featured-story-heading"
      className={`featured-story-scope relative min-h-[932px] w-full overflow-hidden bg-white pt-[84px] max-[1280px]:min-h-[850px] max-[1280px]:pt-[76px] max-[1050px]:min-h-[790px] max-[1050px]:pt-[70px] max-[850px]:min-h-0 max-[850px]:py-[70px] max-[600px]:py-[59px] max-[380px]:py-[54px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <header className="section-header relative z-[3]">
        <p
          style={getRevealStyle(0)}
          className="featured-story-reveal section-eyebrow"
        >
          Portfolio
        </p>

        <h2
          id="featured-story-heading"
          style={getRevealStyle(100)}
          className="featured-story-reveal section-title"
        >
          Featured Story
        </h2>
      </header>

      <div className="relative mt-[65px] h-[655px] w-full max-[1280px]:mt-[57px] max-[1280px]:h-[600px] max-[1050px]:mt-[52px] max-[1050px]:h-[560px] max-[850px]:mx-auto max-[850px]:grid max-[850px]:h-auto max-[850px]:w-[calc(100%-56px)] max-[850px]:grid-cols-2 max-[850px]:gap-7 max-[600px]:mt-[42px] max-[600px]:w-[calc(100%-30px)] max-[600px]:grid-cols-1 max-[600px]:gap-5 max-[380px]:mt-[38px] max-[380px]:w-[calc(100%-22px)]">
        <article
          style={getRevealStyle(180)}
          className="featured-story-reveal featured-story-reveal--left absolute left-0 top-[146px] z-[1] flex h-[324px] w-[39.05%] items-center bg-surface max-[1280px]:top-[130px] max-[1280px]:h-[300px] max-[1280px]:w-[38%] max-[1050px]:top-[115px] max-[1050px]:h-[285px] max-[1050px]:w-[40%] max-[850px]:relative max-[850px]:inset-auto max-[850px]:col-span-2 max-[850px]:col-start-1 max-[850px]:row-start-2 max-[850px]:h-auto max-[850px]:min-h-[300px] max-[850px]:w-full max-[850px]:px-[45px] max-[850px]:py-12 max-[600px]:col-span-1 max-[600px]:row-start-3 max-[600px]:min-h-[290px] max-[600px]:px-[23px] max-[600px]:py-[43px] max-[380px]:px-[18px] max-[380px]:py-[39px]"
        >
          <div className="ml-[clamp(52px,7.3vw,105px)] w-[min(calc(100%-80px),455px)] pb-[3px] max-[1280px]:ml-[55px] max-[1280px]:w-[calc(100%-60px)] max-[1050px]:ml-[38px] max-[1050px]:w-[calc(100%-48px)] max-[850px]:mx-auto max-[850px]:w-full max-[850px]:max-w-[600px] max-[850px]:p-0 max-[850px]:text-center">
            <p className="m-0 font-number text-[73px] font-medium leading-[0.82] tracking-[0.09em] text-[#bd8e60] max-[1280px]:text-[66px] max-[1050px]:text-[60px] max-[850px]:text-[64px] max-[600px]:text-[59px] max-[380px]:text-[54px]">
              01
            </p>

            <h3 className="mb-0 mt-[26px] whitespace-nowrap font-script text-[46px] font-normal leading-none tracking-[0.005em] text-[#595755] max-[1280px]:mt-6 max-[1280px]:text-[40px] max-[1050px]:mt-[22px] max-[1050px]:whitespace-normal max-[1050px]:text-[36px] max-[850px]:mt-[23px] max-[850px]:text-[44px] max-[600px]:mt-[22px] max-[600px]:text-[40px] max-[380px]:text-[36px]">
              Ricardo &amp; Michelle
            </h3>

            <p className="mb-0 mt-[19px] max-w-[430px] font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-[#565452] max-[1280px]:mt-[17px] max-[1280px]:max-w-[350px] max-[1200px]:text-[19px] max-[1050px]:mt-4 max-[1050px]:max-w-[315px] max-[850px]:mx-auto max-[850px]:mt-[18px] max-[850px]:max-w-[520px] max-[600px]:mt-[17px] max-[600px]:max-w-[330px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
              A heartfelt celebration shaped by quiet glances, joyful laughter,
              and meaningful details, preserved in timeless photographs that
              will bring every emotion back for years to come.
            </p>
          </div>
        </article>

        <figure
          style={getRevealStyle(310)}
          className="featured-story-reveal featured-story-reveal--up group absolute left-[39.05%] top-0 z-[2] m-0 h-[472px] w-[27.36%] overflow-hidden bg-[#e3dfd8] max-[1280px]:left-[38%] max-[1280px]:h-[430px] max-[1280px]:w-[28%] max-[1050px]:left-[40%] max-[1050px]:h-[400px] max-[1050px]:w-[28%] max-[850px]:relative max-[850px]:inset-auto max-[850px]:col-start-1 max-[850px]:row-start-1 max-[850px]:h-auto max-[850px]:w-full max-[850px]:aspect-[4/5] max-[600px]:col-start-1 max-[600px]:row-start-1 max-[600px]:aspect-[4/4.8]"
        >
          <img
            src={coupleImage}
            alt="Ricardo and Michelle sharing a romantic moment near a waterfall"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-elegant group-hover:scale-[1.045] motion-reduce:transition-none"
          />
        </figure>

        <figure
          style={getRevealStyle(470)}
          className="featured-story-reveal featured-story-reveal--right group absolute left-[69.03%] top-0 z-[2] m-0 h-[472px] w-[25.9%] overflow-hidden bg-[#e3dfd8] max-[1280px]:left-[69%] max-[1280px]:h-[430px] max-[1280px]:w-[26%] max-[1050px]:left-[70.5%] max-[1050px]:h-[400px] max-[1050px]:w-[26%] max-[850px]:relative max-[850px]:inset-auto max-[850px]:col-start-2 max-[850px]:row-start-1 max-[850px]:h-auto max-[850px]:w-full max-[850px]:aspect-[4/5] max-[600px]:col-start-1 max-[600px]:row-start-2 max-[600px]:aspect-[4/4.8]"
        >
          <img
            src={brideImage}
            alt="Michelle holding an elegant wedding bouquet"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-elegant group-hover:scale-[1.045] motion-reduce:transition-none"
          />
        </figure>

        <div
          style={getRevealStyle(650)}
          className="featured-story-reveal absolute right-[5.05%] top-[529px] z-[3] max-[1280px]:right-[5%] max-[1280px]:top-[485px] max-[1050px]:right-[3.5%] max-[1050px]:top-[450px] max-[850px]:relative max-[850px]:inset-auto max-[850px]:col-span-2 max-[850px]:col-start-1 max-[850px]:row-start-3 max-[850px]:mt-2 max-[850px]:justify-self-center max-[600px]:col-span-1 max-[600px]:row-start-4 max-[600px]:mt-[5px]"
        >
          <a
            href="#gallery"
            aria-label="View Ricardo and Michelle's wedding gallery"
            className="inline-flex min-h-[68px] min-w-[181px] items-center justify-center border border-transparent bg-accent-soft px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] no-underline transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_30px_rgba(83,61,44,0.15)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:shadow-[0_14px_30px_rgba(83,61,44,0.15)] max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] motion-reduce:transform-none"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}