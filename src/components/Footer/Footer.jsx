import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./footer.css";

const leftNavigation = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
];

const rightNavigation = [
  { id: 4, label: "Portfolio", href: "/portfolio" },
  { id: 5, label: "Blog", href: "/blog" },
  { id: 6, label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    id: 1,
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: facebookIcon,
  },
  {
    id: 2,
    label: "Twitter",
    href: "https://twitter.com/",
    icon: twitterIcon,
  },
  {
    id: 3,
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: youtubeIcon,
  },
  {
    id: 4,
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: instagramIcon,
  },
];

function FooterLogo() {
  return (
    <a
      href="/"
      aria-label="Tessa Morgan Photography home"
      className="flex flex-col items-center justify-center text-center text-[#181818] no-underline max-[850px]:order-1"
    >
      <span className="whitespace-nowrap font-script text-[38px] font-normal leading-[0.78] max-[1100px]:text-[35px] max-[560px]:text-[34px]">
        Tessa Morgan
      </span>

      <span className="mt-3 pl-[5px] text-[5.5px] font-medium uppercase leading-none tracking-[0.68em] [font-family:Arial,Helvetica,sans-serif]">
        Photography
      </span>
    </a>
  );
}

function FooterNavigation({ links, position }) {
  const responsiveOrder =
    position === "left"
      ? "max-[850px]:order-2"
      : "max-[850px]:order-3";

  return (
    <nav
      aria-label={`Footer ${position} navigation`}
      className={`flex min-w-0 items-center justify-between max-[850px]:w-full max-[850px]:flex-wrap max-[850px]:justify-center max-[850px]:gap-x-[42px] max-[850px]:gap-y-[22px] max-[560px]:grid max-[560px]:grid-cols-3 max-[560px]:justify-items-center max-[560px]:gap-x-[25px] max-[560px]:gap-y-5 max-[560px]:text-center max-[380px]:grid-cols-2 ${responsiveOrder}`}
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="footer-nav-link whitespace-nowrap text-center font-primary text-[17px] font-normal uppercase leading-none tracking-[0.025em] text-[#454341] no-underline max-[1100px]:text-[15px] max-[850px]:text-[16px] max-[560px]:justify-self-center max-[560px]:text-[13px]"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function FooterSocials() {
  return (
    <div className="site-footer__socials footer-reveal mt-[29px] flex items-center justify-center gap-[21px] max-[560px]:mt-[26px] max-[560px]:gap-[18px]">
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.id}
          href={socialLink.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLink.label}
          className="footer-social-link flex h-[25px] w-[25px] items-center justify-center rounded-full"
        >
          <img
            src={socialLink.icon}
            alt=""
            aria-hidden="true"
            className="block h-[25px] w-[25px]"
          />
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  const { elementRef, isVisible } = useRevealOnScroll({
    threshold: 0.12,
    rootMargin: "0px 0px -20px",
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={elementRef}
      className={`site-footer w-full overflow-hidden bg-[#f7f7f7] md:mt-14 mt-5 pb-[30px] pt-[35px] max-[850px]:pb-[35px] max-[850px]:pt-[45px] max-[560px]:pb-[30px] max-[560px]:pt-[42px] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="mx-auto w-[min(calc(100%_-_120px),1080px)] max-[1100px]:w-[calc(100%_-_70px)] max-[850px]:w-[calc(100%_-_48px)] max-[560px]:w-[calc(100%_-_30px)]">
        <div className="footer-reveal grid grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)] items-center gap-[42px] max-[1100px]:grid-cols-[minmax(0,1fr)_195px_minmax(0,1fr)] max-[1100px]:gap-7 max-[850px]:flex max-[850px]:flex-col max-[850px]:gap-[35px] max-[560px]:gap-[31px]">
          <FooterNavigation
            links={leftNavigation}
            position="left"
          />

          <FooterLogo />

          <FooterNavigation
            links={rightNavigation}
            position="right"
          />
        </div>

        <p className="site-footer__description footer-reveal mx-auto mb-0 mt-[55px] max-w-[545px] text-center font-primary text-[19px] font-normal leading-[1.4] text-[#5f5c59] max-[850px]:mt-[45px] max-[560px]:mt-[39px] max-[560px]:max-w-[380px] max-[560px]:text-[17px] max-[380px]:text-[16px]">
          Preserving honest emotions, graceful details, and unforgettable
          celebrations through timeless wedding photography.
        </p>

        <FooterSocials />

        <p className="site-footer__copyright footer-reveal mx-0 mb-0 mt-[27px] text-center font-primary text-[14px] font-normal leading-[1.4] text-[#4f4c49] max-[560px]:mx-auto max-[560px]:mt-6 max-[560px]:max-w-[320px] max-[560px]:text-[13px]">
          Copyright © {currentYear} Tessa Morgan Photography. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}