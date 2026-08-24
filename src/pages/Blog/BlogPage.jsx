import { Link } from "react-router-dom";

import blogImageOne from "../../assets/images/about-bouquet-soft.png";
import blogImageTwo from "../../assets/images/portfolio-portrait-2.png";
import blogImageThree from "../../assets/images/portfolio-wedding-2.png";
import blogImageFour from "../../assets/images/portfolio-engagement-2.png";
import blogImageFive from "../../assets/images/portfolio-portrait-3.png";
import blogImageSix from "../../assets/images/portfolio-engagement-3.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubpageHero from "../../components/SubpageHero/SubpageHero";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./blog-page.css";

const blogPosts = [
  {
    id: 1,
    title: "Thoughtful Wedding Gifts for the Bride & Groom",
    slug: "thoughtful-wedding-gifts",
    date: "28 July 2026",
    category: "Wedding",
    image: blogImageOne,
    imageAlt: "Elegant wedding details arranged in soft natural light",
    excerpt:
      "Meaningful wedding gifts are more than beautiful objects. Discover thoughtful ideas designed to become lasting reminders of an unforgettable celebration.",
  },
  {
    id: 2,
    title: "How to Create a Wedding Day That Feels Like You",
    slug: "wedding-day-that-feels-like-you",
    date: "16 July 2026",
    category: "Planning",
    image: blogImageTwo,
    imageAlt: "Soft romantic wedding details with elegant styling",
    excerpt:
      "From intimate traditions to personal details, the most memorable celebrations are shaped by the things that genuinely reflect who you are together.",
  },
  {
    id: 3,
    title: "The Beauty of Quiet Moments on Your Wedding Day",
    slug: "beauty-of-quiet-wedding-moments",
    date: "03 July 2026",
    category: "Photography",
    image: blogImageThree,
    imageAlt: "A couple sharing a meaningful moment during a wedding celebration",
    excerpt:
      "Some of the photographs you treasure most will come from moments you barely noticed. Here is why the quieter parts of the day matter so much.",
  },
  {
    id: 4,
    title: "Five Ways to Feel Natural in Front of the Camera",
    slug: "feel-natural-in-front-of-camera",
    date: "21 June 2026",
    category: "Portraits",
    image: blogImageFour,
    imageAlt: "A relaxed couple photographed together outdoors",
    excerpt:
      "Beautiful portraits never need to feel forced. A few simple approaches can help you relax, stay present, and let genuine connection lead the photographs.",
  },
  {
    id: 5,
    title: "Choosing the Perfect Details for a Timeless Celebration",
    slug: "timeless-wedding-details",
    date: "08 June 2026",
    category: "Inspiration",
    image: blogImageFive,
    imageAlt: "Elegant wedding styling with delicate natural details",
    excerpt:
      "Timeless design is less about following trends and more about choosing details with intention. Explore ways to create an atmosphere that will age beautifully.",
  },
  {
    id: 6,
    title: "Why Your Engagement Session Matters More Than You Think",
    slug: "why-engagement-sessions-matter",
    date: "24 May 2026",
    category: "Engagement",
    image: blogImageSix,
    imageAlt: "A couple enjoying a relaxed engagement photography session",
    excerpt:
      "An engagement session gives you time to slow down, become comfortable together in front of the camera, and create photographs that celebrate this season.",
  },
];

function getRevealStyle(delay) {
  return {
    "--blog-delay": `${delay}ms`,
  };
}

function BlogCard({ post, index }) {
  return (
    <article
      style={getRevealStyle(260 + index * 100)}
      className="blog-reveal min-w-0"
    >
      <Link
        to={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="blog-card group block text-inherit no-underline focus-visible:outline-none"
      >
        <figure className="blog-card__media m-0 aspect-[4/3] w-full overflow-hidden bg-[#ded8cf]">
          <img
            src={post.image}
            alt={post.imageAlt}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            className="blog-card__image block h-full w-full object-cover object-center"
          />
        </figure>

        <div className="pt-[27px] max-[1024px]:pt-[24px] max-[600px]:pt-[21px]">
          <h2 className="blog-card__title m-0 max-w-[520px] font-primary text-[34px] font-normal uppercase leading-[1.08] tracking-[0.035em] text-heading max-[1280px]:text-[31px] max-[1024px]:text-[29px] max-[768px]:text-[28px] max-[600px]:text-[27px] max-[380px]:text-[25px]">
            {post.title}
          </h2>

          <div className="mt-[18px] flex flex-col gap-[8px] max-[600px]:mt-[16px]">
            <p className="m-0 font-primary text-[18px] font-normal leading-[1.25] text-[#555351] max-[1200px]:text-[17px] max-[600px]:text-[16px]">
              Date:
              <span className="ml-[8px] font-script text-[24px] leading-none text-accent max-[600px]:text-[22px]">
                {post.date}
              </span>
            </p>

            <p className="m-0 font-primary text-[18px] font-normal leading-[1.25] text-[#555351] max-[1200px]:text-[17px] max-[600px]:text-[16px]">
              Category:
              <span className="ml-[8px] font-script text-[24px] leading-none text-accent max-[600px]:text-[22px]">
                {post.category}
              </span>
            </p>
          </div>

          <p className="mb-0 mt-[21px] max-w-[510px] font-primary text-[19px] font-normal leading-[1.42] tracking-[-0.005em] text-body max-[1200px]:text-[18px] max-[600px]:mt-[18px] max-[600px]:text-[17px] max-[380px]:text-[16px]">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}

function LatestStories() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.1,
    rootMargin: "0px 0px -60px",
  });

  return (
    <section
      ref={elementRef}
      aria-labelledby="blog-heading"
      className={`blog-reveal-scope overflow-hidden bg-white pb-[110px] pt-[94px] max-[1280px]:pb-[100px] max-[1280px]:pt-[88px] max-[1024px]:pb-[90px] max-[1024px]:pt-[82px] max-[768px]:pb-[80px] max-[768px]:pt-[72px] max-[600px]:pb-[70px] max-[600px]:pt-[62px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="site-container">
        <header className="section-header">
          <p
            style={getRevealStyle(70)}
            className="blog-reveal section-eyebrow"
          >
            Blog
          </p>

          <h1
            id="blog-heading"
            style={getRevealStyle(160)}
            className="blog-reveal section-title uppercase"
          >
            Latest Stories
          </h1>

          <p
            style={getRevealStyle(240)}
            className="blog-reveal mx-auto mb-0 mt-[32px] max-w-[650px] font-primary text-[21px] font-normal leading-[1.38] tracking-[-0.005em] text-body max-[1200px]:text-[19px] max-[768px]:mt-[27px] max-[600px]:max-w-[480px] max-[600px]:text-[17px] max-[380px]:text-[16px]"
          >
            Thoughtful stories, practical advice, and meaningful inspiration
            for couples creating a wedding celebration that feels beautifully
            personal.
          </p>
        </header>

        <div className="mt-[78px] grid w-full grid-cols-2 gap-x-[72px] gap-y-[82px] max-[1280px]:mt-[72px] max-[1280px]:gap-x-[58px] max-[1280px]:gap-y-[74px] max-[1024px]:mt-[66px] max-[1024px]:gap-x-[42px] max-[1024px]:gap-y-[64px] max-[768px]:gap-x-[30px] max-[768px]:gap-y-[56px] max-[650px]:grid-cols-1 max-[650px]:gap-y-[50px] max-[600px]:mt-[54px] max-[480px]:mt-[46px]">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="page" />

      <main id="main-content">
        <SubpageHero
          ariaLabel="Tessa Morgan Photography journal and wedding stories"
          imageAlt="A romantic wedding moment photographed by Tessa Morgan"
        />

        <LatestStories />
      </main>

      <Footer />
    </div>
  );
}