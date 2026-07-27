import coupleImage from "../../assets/images/creative-couple.png";
import creativeLeaf from "../../assets/icons/creative-leaf.svg";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./creative-story.css";

function getRevealStyle(delay) {
  return { "--creative-delay": `${delay}ms` };
}

export default function CreativeStory() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.18,
    rootMargin: "0px 0px -70px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="creative-story-title"
      className={`creative-story-scope relative isolate h-[clamp(640px,50vw,720px)] w-full overflow-hidden bg-surface max-[1280px]:h-[clamp(610px,54vw,690px)] max-[1050px]:h-[620px] max-[850px]:h-auto max-[850px]:pb-[70px] max-[600px]:pb-[54px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="creative-story-media absolute inset-y-0 left-0 h-full w-[75.45%] overflow-hidden bg-[#e3dfda] max-[1280px]:w-[74%] max-[1050px]:w-[72%] max-[850px]:relative max-[850px]:inset-auto max-[850px]:aspect-[16/11] max-[850px]:h-auto max-[850px]:w-full max-[600px]:aspect-[4/4.7] max-[380px]:aspect-[4/5.1]">
        <img
          src={coupleImage}
          alt="A newly married couple walking together along the beach"
          loading="lazy"
          decoding="async"
          className="creative-story-image h-full w-full object-cover object-center max-[600px]:object-[51%_center]"
        />
      </div>

      <article className="creative-story-card absolute right-[9.05%] top-1/2 z-[2] h-[82.3%] w-[min(30.75vw,440px)] bg-white/[0.94] p-[11px] shadow-[0_14px_45px_rgba(74,61,50,0.025)] backdrop-blur-[1px] max-[1280px]:right-[6%] max-[1280px]:h-[82%] max-[1280px]:w-[min(34vw,420px)] max-[1050px]:right-[4%] max-[1050px]:h-[80%] max-[1050px]:w-[40%] max-[1050px]:min-w-[385px] max-[850px]:relative max-[850px]:right-auto max-[850px]:top-auto max-[850px]:mx-auto max-[850px]:mt-[-105px] max-[850px]:h-auto max-[850px]:min-h-[530px] max-[850px]:w-[min(calc(100%-70px),590px)] max-[600px]:mt-[-62px] max-[600px]:min-h-[490px] max-[600px]:min-w-0 max-[600px]:w-[calc(100%-30px)] max-[600px]:p-2 max-[380px]:mt-[-48px] max-[380px]:min-h-[465px] max-[380px]:w-[calc(100%-22px)]">
        <div className="flex h-full w-full flex-col items-center justify-start border border-accent-border px-[34px] pb-[30px] pt-[clamp(25px,2.1vw,31px)] text-center text-body max-[1280px]:px-[30px] max-[850px]:min-h-[508px] max-[850px]:px-[45px] max-[850px]:pb-[38px] max-[850px]:pt-[31px] max-[600px]:min-h-[474px] max-[600px]:px-[22px] max-[600px]:pb-[31px] max-[600px]:pt-[27px] max-[380px]:min-h-[449px] max-[380px]:px-[17px]">
          <img
            src={creativeLeaf}
            alt=""
            aria-hidden="true"
            style={getRevealStyle(480)}
            className="creative-story-reveal h-[clamp(91px,7.2vw,104px)] w-[clamp(55px,4.4vw,64px)] object-contain max-[850px]:h-[96px] max-[850px]:w-[58px] max-[600px]:h-[80px] max-[600px]:w-[48px] max-[380px]:h-[74px] max-[380px]:w-[44px]"
          />

          <h2
            id="creative-story-title"
            style={getRevealStyle(610)}
            className="creative-story-reveal mb-0 mt-5 font-script text-[clamp(47px,3.85vw,56px)] font-normal leading-[1.08] tracking-[0.005em] text-[#62615f] max-[1280px]:text-[clamp(44px,4.2vw,52px)] max-[1050px]:text-[46px] max-[850px]:mt-[18px] max-[850px]:text-[clamp(45px,7vw,54px)] max-[600px]:mt-[17px] max-[600px]:text-[clamp(39px,11.5vw,48px)] max-[600px]:leading-[1.04] max-[380px]:text-[38px]"
          >
            <span className="block">Emotion-Led, Romantic,</span>
            <span className="block">Timeless</span>
          </h2>

          <p
            style={getRevealStyle(740)}
            className="creative-story-reveal mx-auto mb-0 mt-[29px] max-w-[315px] font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-[#555351] max-[1200px]:text-[19px] max-[1050px]:max-w-[285px] max-[850px]:mt-[27px] max-[850px]:max-w-[340px] max-[600px]:max-w-[285px] max-[600px]:text-[17px] max-[380px]:max-w-[260px] max-[380px]:text-[16px]"
          >
            Your wedding deserves photographs that feel natural, refined, and
            deeply personal—honest moments preserved with an artistic eye for
            generations to come.
          </p>
        </div>
      </article>
    </section>
  );
}