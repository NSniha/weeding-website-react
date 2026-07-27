import heroImage from "../../assets/images/wedding-hero.png";
import "./hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative h-svh min-h-[760px] w-full overflow-hidden bg-[#d6d2cb] max-[1024px]:min-h-[700px] max-[768px]:min-h-[680px] max-[480px]:min-h-[650px]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
          aria-hidden="true"
          className="hero-image-reveal h-auto w-full object-cover object-center max-[1024px]:object-[43%_center] max-[768px]:h-full max-[768px]:object-[39%_center] max-[480px]:object-[36%_center]"
        />
      </div>

      <div className="hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <div className="hero-content-position absolute left-1/2 top-[39.5%] z-[2] w-[min(calc(100%-70px),1120px)] -translate-x-1/2 text-center max-[1280px]:top-[40%] max-[1280px]:w-[min(calc(100%-56px),1000px)] max-[1024px]:top-[41%] max-[1024px]:w-[min(calc(100%-44px),820px)] max-[768px]:top-[42%] max-[768px]:w-[calc(100%-34px)] max-[480px]:top-[39.5%] max-[480px]:w-[calc(100%-28px)]">
        <p className="hero-content-reveal hero-subtitle-reveal m-0 text-[clamp(56px,4.7vw,68px)] font-normal leading-none tracking-normal text-[#c5a586] [font-family:'Allura',cursive] [text-shadow:0_2px_12px_rgba(67,45,29,0.04)] max-[1280px]:text-[clamp(50px,5vw,62px)] max-[1024px]:text-[clamp(46px,7vw,59px)] max-[768px]:mx-auto max-[768px]:max-w-[620px] max-[768px]:text-[clamp(41px,9.8vw,56px)] max-[768px]:leading-[0.98] max-[480px]:max-w-[360px] max-[480px]:text-[clamp(37px,11.6vw,48px)] max-[480px]:leading-[0.94] max-[360px]:text-[36px]">
          Your Dream Wedding Awaits
        </p>

        <h1
          id="hero-title"
          className="hero-content-reveal hero-title-reveal mx-auto mt-[34px] max-w-[1100px] font-primary text-[clamp(62px,5.25vw,76px)] font-normal leading-[0.98] tracking-[-0.015em] text-white [text-shadow:0_3px_15px_rgba(0,0,0,0.065)] max-[1280px]:mt-7 max-[1280px]:text-[clamp(56px,5.7vw,69px)] max-[1024px]:mt-[25px] max-[1024px]:text-[clamp(53px,7.4vw,67px)] max-[768px]:mt-[23px] max-[768px]:max-w-[650px] max-[768px]:text-[clamp(46px,10.4vw,61px)] max-[480px]:mt-6 max-[480px]:max-w-[390px] max-[480px]:text-[clamp(42px,13vw,55px)] max-[480px]:leading-[0.95] max-[360px]:text-[40px]"
        >
          Artistic Wedding Photography
        </h1>
      </div>
    </section>
  );
}