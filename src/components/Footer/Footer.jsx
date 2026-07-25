import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "./footer.css";

const leftNavigation = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
];

const rightNavigation = [
  { id: 4, label: "Portfolio", href: "#portfolio" },
  { id: 5, label: "Stories", href: "#featured-story" },
  { id: 6, label: "Contact", href: "#contact" },
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
      href="#home"
      className="footer-logo"
      aria-label="Tessa Morgan Photography home"
    >
      <span className="footer-logo__name">
        Tessa Morgan
      </span>

      <span className="footer-logo__caption">
        Photography
      </span>
    </a>
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
      className={`site-footer ${isVisible ? "is-visible" : ""}`}
    >
      <div className="site-footer__container">
        <div className="site-footer__navigation footer-reveal">
          <nav
            className="site-footer__nav site-footer__nav--left"
            aria-label="Footer left navigation"
          >
            {leftNavigation.map((link) => (
              <a key={link.id} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <FooterLogo />

          <nav
            className="site-footer__nav site-footer__nav--right"
            aria-label="Footer right navigation"
          >
            {rightNavigation.map((link) => (
              <a key={link.id} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="site-footer__description footer-reveal">
          Preserving honest emotions, graceful details, and unforgettable
          celebrations through timeless wedding photography.
        </p>

        <div className="site-footer__socials footer-reveal">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.id}
              href={socialLink.href}
              target="_blank"
              rel="noreferrer"
              aria-label={socialLink.label}
            >
              <img
                src={socialLink.icon}
                alt=""
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <p className="site-footer__copyright footer-reveal">
          Copyright © {currentYear} Tessa Morgan Photography. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}