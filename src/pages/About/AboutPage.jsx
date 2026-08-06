import { Link } from "react-router-dom";

import storyPortraitImage from "../../assets/images/about-story.png";

import galleryImageOne from "../../assets/images/about-gallery-1.png";
import galleryImageTwo from "../../assets/images/about-gallery-2.png";
import galleryImageThree from "../../assets/images/process-bride.png";
import galleryImageFour from "../../assets/images/about-gallery-4.png";

import bouquetDetailImage from "../../assets/images/process-couple.png";
import bouquetSoftImage from "../../assets/images/about-bouquet-soft.png";

import storyLensBeachImage from "../../assets/images/about-lens-beach.png";
import storyLensArchitectureImage from "../../assets/images/about-lens-architecture.png";

import floralDivider from "../../assets/icons/award-leaf-bottom.svg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubpageHero from "../../components/SubpageHero/SubpageHero";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./about-page.css";

const storyParagraphs = [
  "Photography has always been my way of preserving the moments that pass too quickly—the quiet glances, joyful laughter, and meaningful details that make every celebration unique.",
  "My approach is calm, thoughtful, and deeply personal. I take time to understand your story so that your photographs feel honest, effortless, and completely your own.",
  "Each gallery is created with care, blending natural emotion with an elegant editorial perspective to produce images you will treasure for generations.",
];

const galleryImages = [
  {
    id: 1,
    image: galleryImageOne,
    imageAlt: "Newly married couple sharing a quiet moment in the mountains",
    imagePosition: "center",
  },
  {
    id: 2,
    image: galleryImageTwo,
    imageAlt: "Bride and groom standing closely together",
    imagePosition: "center",
  },
  {
    id: 3,
    image: galleryImageThree,
    imageAlt: "Bride walking through a peaceful woodland setting",
    imagePosition: "center",
  },
  {
    id: 4,
    image: galleryImageFour,
    imageAlt: "Bride and groom embracing beneath a flowing wedding veil",
    imagePosition: "center",
  },
];

const personalFacts = [
  {
    id: 1,
    number: "1",
    description:
      "I believe the most meaningful photographs happen when you feel completely comfortable being yourself.",
  },
  {
    id: 2,
    number: "2",
    description:
      "Quiet details, honest emotions, and the people you love most are always at the heart of my work.",
  },
  {
    id: 3,
    number: "3",
    description:
      "My approach blends gentle direction with natural storytelling, creating images that remain timeless and personal.",
  },
];

const actionButtonClasses =
  "inline-flex min-h-[68px] min-w-[181px] items-center justify-center border border-transparent bg-[#e8dfd7] px-7 py-[15px] font-primary text-[21px] font-normal leading-none text-[#504d4a] no-underline transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:-translate-y-[3px] focus-visible:border-accent focus-visible:bg-accent focus-visible:text-white focus-visible:shadow-[0_14px_28px_rgba(104,79,58,0.16)] focus-visible:outline-none max-[600px]:min-h-[59px] max-[600px]:min-w-[160px] max-[600px]:text-[19px] motion-reduce:transform-none";

function getRevealStyle(delay) {
  return {
    "--about-delay": `${delay}ms`,
  };
}

function SectionHeading({
  eyebrow,
  title,
  headingId,
  headingTag: HeadingTag = "h2",
  uppercase = false,
  align = "center",
}) {
  const alignmentClasses =
    align === "left"
      ? "text-left max-[900px]:text-center"
      : "text-center";

  return (
    <header className={`about-section-heading ${alignmentClasses}`}>
      <p
        style={getRevealStyle(80)}
        className="about-heading-reveal section-eyebrow"
      >
        {eyebrow}
      </p>

      <HeadingTag
        id={headingId}
        style={getRevealStyle(180)}
        className={`about-heading-reveal about-heading-reveal--title section-title ${
          uppercase ? "uppercase" : ""
        }`}
      >
        {title}
      </HeadingTag>
    </header>
  );
}

function MyStory() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="about-story-heading"
      className={`about-reveal-scope about-story section-shell overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="About"
          title="My Story"
          headingId="about-story-heading"
          headingTag="h1"
          uppercase
        />

        <div className="mt-[65px] grid w-full grid-cols-[0.94fr_1.06fr] items-stretch gap-[64px] max-[1280px]:mt-[60px] max-[1280px]:gap-[52px] max-[1024px]:mt-14 max-[1024px]:gap-10 max-[800px]:grid-cols-1 max-[800px]:gap-0 max-[768px]:mt-12 max-[480px]:mt-[41px]">
          <figure
            style={getRevealStyle(280)}
            className="about-reveal about-reveal--left about-story__media m-0 aspect-[4/4.65] w-full min-w-0 overflow-hidden bg-[#efefed] max-[600px]:aspect-[4/4.8]"
          >
            <img
              src={storyPortraitImage}
              alt="Tessa Morgan smiling outdoors"
              loading="eager"
              decoding="async"
              className="about-story__image block h-full w-full object-cover object-center"
            />
          </figure>

          <div className="flex w-full min-w-0 flex-col justify-center py-[10px] max-[800px]:px-5 max-[800px]:pb-0 max-[800px]:pt-[50px] max-[480px]:px-1">
            <div className="space-y-[22px] font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-body max-[1200px]:text-[19px] max-[600px]:space-y-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
              {storyParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  style={getRevealStyle(300 + index * 100)}
                  className="about-reveal about-reveal--right m-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <img
              src={floralDivider}
              alt=""
              aria-hidden="true"
              style={getRevealStyle(620)}
              className="about-reveal about-story__divider mx-auto mt-[29px] h-auto w-[92px] object-contain max-[600px]:mt-[25px] max-[600px]:w-[80px]"
            />

            <div
              style={getRevealStyle(720)}
              className="about-reveal mt-[25px] flex justify-center"
            >
              <Link to="/portfolio" className={actionButtonClasses}>
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryGallery() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-label="Selected wedding photographs"
      className={`about-reveal-scope about-gallery overflow-hidden bg-white pb-14 pt-14 max-[1280px]:pb-[84px] max-[1280px]:pt-[64px] max-[1024px]:pb-[76px] max-[1024px]:pt-[58px] max-[768px]:pb-[68px] max-[768px]:pt-[52px] max-[480px]:pb-[60px] max-[480px]:pt-[46px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="grid w-full grid-cols-4 gap-[52px] max-[1280px]:gap-[38px] max-[1024px]:gap-7 max-[760px]:grid-cols-2 max-[760px]:gap-5 max-[480px]:gap-[14px]">
          {galleryImages.map((galleryImage, index) => (
            <figure
              key={galleryImage.id}
              style={getRevealStyle(80 + index * 120)}
              className="about-reveal about-gallery__item m-0 aspect-[3/4.35] w-full min-w-0 overflow-hidden bg-[#ded8cf]"
            >
              <img
                src={galleryImage.image}
                alt={galleryImage.imageAlt}
                loading="lazy"
                decoding="async"
                className="about-gallery__image block h-full w-full object-cover"
                style={{
                  objectPosition: galleryImage.imagePosition,
                }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactCard({ fact, className, delay }) {
  return (
    <article
      style={getRevealStyle(delay)}
      className={`about-reveal about-facts__cell about-facts__card flex min-w-0 flex-col items-center justify-center bg-white px-[42px] py-[42px] text-center max-[1280px]:px-[35px] max-[1100px]:px-7 max-[900px]:px-[38px] max-[600px]:min-h-[360px] max-[480px]:min-h-[330px] max-[480px]:px-[27px] max-[380px]:min-h-[315px] max-[380px]:px-5 ${className}`}
    >
      <p className="m-0 font-number text-[67px] font-normal leading-[0.85] tracking-[-0.02em] text-accent max-[1280px]:text-[63px] max-[1024px]:text-[59px] max-[768px]:text-[55px] max-[480px]:text-[51px]">
        {fact.number}
      </p>

      <span
        aria-hidden="true"
        className="mt-[25px] block h-px w-[112px] bg-[#d4ae8b] max-[480px]:mt-[22px] max-[480px]:w-[96px]"
      />

      <p className="mb-0 mt-[21px] max-w-[275px] font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-body max-[1200px]:max-w-[250px] max-[1200px]:text-[19px] max-[900px]:max-w-[285px] max-[600px]:max-w-[340px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
        {fact.description}
      </p>
    </article>
  );
}

function FactImage({
  image,
  imageAlt,
  className,
  delay,
  imagePosition = "center",
}) {
  return (
    <figure
      style={getRevealStyle(delay)}
      className={`about-reveal about-facts__cell about-facts__media m-0 min-w-0 overflow-hidden bg-[#ded8cf] ${className}`}
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className="about-facts__image block h-full w-full object-cover"
        style={{
          objectPosition: imagePosition,
        }}
      />
    </figure>
  );
}

function AboutFacts() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="about-facts-heading"
      className={`about-reveal-scope about-facts section-shell overflow-hidden bg-white ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Get to Know Me"
          title="A Few Facts About Myself"
          headingId="about-facts-heading"
        />

        <div className="about-facts__grid mt-10 w-full max-[1280px]:mt-10 max-[1024px]:mt-14 max-[768px]:mt-12 max-[480px]:mt-[41px]">
          <FactImage
            image={galleryImageThree}
            imageAlt="Bride walking through a woodland wedding setting"
            className="about-facts__image-one"
            delay={280}
          />

          <FactCard
            fact={personalFacts[0]}
            className="about-facts__fact-one"
            delay={380}
          />

          <FactImage
            image={bouquetDetailImage}
            imageAlt="Bride and groom holding a softly colored wedding bouquet"
            className="about-facts__image-two"
            delay={480}
          />

          <FactCard
            fact={personalFacts[1]}
            className="about-facts__fact-two"
            delay={580}
          />

          <FactImage
            image={bouquetSoftImage}
            imageAlt="Pastel bridal bouquet held beside the bride"
            className="about-facts__image-three"
            delay={680}
          />

          <FactCard
            fact={personalFacts[2]}
            className="about-facts__fact-three"
            delay={780}
          />
        </div>
      </div>
    </section>
  );
}

function StoryLens() {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={elementRef}
      aria-labelledby="story-lens-heading"
      className={`about-reveal-scope about-lens overflow-hidden bg-white pb-10 pt-[88px] max-[1280px]:pb-10 max-[1280px]:pt-[80px] max-[1024px]:pb-[88px] max-[1024px]:pt-[74px] max-[768px]:pb-[78px] max-[768px]:pt-[68px] max-[480px]:pb-[65px] max-[480px]:pt-[58px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <div className="about-lens__stage relative min-h-[500px] w-full max-[900px]:flex max-[900px]:min-h-0 max-[900px]:flex-col">
          <div
            aria-hidden="true"
            className="about-lens__background absolute inset-x-0 top-[130px] z-0 h-[166px] w-full bg-[#f4f4f4] max-[900px]:hidden"
          />

          <div className="relative z-[3] w-[54%] pt-[24px] max-[1024px]:w-[51%] max-[900px]:order-1 max-[900px]:w-full max-[900px]:pt-0 max-[900px]:text-center">
            <SectionHeading
              eyebrow="Crafting Memories"
              title="Your Story, My Lens"
              headingId="story-lens-heading"
              align="left"
            />

            <div
              style={getRevealStyle(300)}
              className="about-reveal about-reveal--left mt-[37px] max-w-[470px] max-[900px]:mx-auto max-[900px]:mt-[31px] max-[900px]:bg-[#f4f4f4] max-[900px]:px-[42px] max-[900px]:py-[38px] max-[600px]:px-[30px] max-[600px]:py-[34px] max-[480px]:px-[24px]"
            >
              <p className="m-0 font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-body max-[1200px]:text-[19px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
                Your wedding day is a once-in-a-lifetime celebration, and
                choosing the right photographer is essential to preserving its
                beauty for years to come. It would be an honor to tell your
                story with care, honesty, and intention.
              </p>
            </div>

            <div
              style={getRevealStyle(420)}
              className="about-reveal about-reveal--left mt-[51px] max-[900px]:mt-[32px]"
            >
              <Link to="/contact" className={actionButtonClasses}>
                Book Now
              </Link>
            </div>
          </div>

          <figure
            style={getRevealStyle(300)}
            className="about-reveal about-reveal--right about-lens__media about-lens__media--beach absolute right-[23%] top-0 z-[2] m-0 h-[320px] w-[24%] overflow-hidden bg-[#ded8cf] max-[1100px]:right-[22%] max-[1100px]:h-[300px] max-[1024px]:right-[21%] max-[1024px]:h-[280px] max-[900px]:relative max-[900px]:right-auto max-[900px]:top-auto max-[900px]:order-2 max-[900px]:mt-[48px] max-[900px]:h-auto max-[900px]:w-[58%] max-[900px]:self-start max-[900px]:aspect-[3/4] max-[600px]:mt-10 max-[600px]:w-[72%]"
          >
            <img
              src={storyLensBeachImage}
              alt="Bride and groom embracing beside the sea"
              loading="lazy"
              decoding="async"
              className="about-lens__image block h-full w-full object-cover object-center"
            />
          </figure>

          <figure
            style={getRevealStyle(440)}
            className="about-reveal about-reveal--right about-lens__media about-lens__media--architecture absolute bottom-0 right-0 z-[4] m-0 h-[325px] w-[25%] overflow-hidden bg-[#ded8cf] max-[1100px]:h-[305px] max-[1024px]:h-[285px] max-[900px]:relative max-[900px]:bottom-auto max-[900px]:right-auto max-[900px]:order-3 max-[900px]:mt-[-115px] max-[900px]:h-auto max-[900px]:w-[58%] max-[900px]:self-end max-[900px]:aspect-[3/4] max-[600px]:mt-[-88px] max-[600px]:w-[72%]"
          >
            <img
              src={storyLensArchitectureImage}
              alt="Bride and groom standing on the steps of an elegant building"
              loading="lazy"
              decoding="async"
              className="about-lens__image block h-full w-full object-cover object-center"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <SubpageHero
          ariaLabel="About Tessa Morgan Photography"
          imageAlt="Bride and groom sharing a quiet wedding moment"
        />

        <MyStory />

        <StoryGallery />

        <AboutFacts />

        <StoryLens />

        {/* Add the next About Page section below this comment. */}
      </main>

      <Footer />
    </div>
  );
}