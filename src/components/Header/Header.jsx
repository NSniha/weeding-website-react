import { useEffect, useRef, useState } from "react";
import "./header.css";

const leftNavigation = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
];

const rightNavigation = [
  { id: 4, label: "Portfolio", href: "#portfolio" },
  { id: 5, label: "Blog", href: "#blog" },
  { id: 6, label: "Contact", href: "#contact" },
];

const mobileNavigation = [...leftNavigation, ...rightNavigation];

function Logo({ onClick }) {
  return (
    <a
      href="#home"
      aria-label="Tessa Morgan Photography home"
      onClick={onClick}
      className="
        absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2
        flex-col items-center justify-center text-center text-[#191919]
        no-underline
        min-[1025px]:static min-[1025px]:translate-x-0
        min-[1025px]:translate-y-0
      "
    >
      <span
        className="
          mt-[-3px] block whitespace-nowrap font-script text-[30px]
          font-normal leading-[0.8] tracking-[0.015em]
          min-[481px]:text-[34px]
          min-[1025px]:text-[36px]
          min-[1281px]:text-[39px]
        "
      >
        Tessa Morgan
      </span>

      <span
        className="
          mt-[9px] block pl-[6px]
          [font-family:Arial,Helvetica,sans-serif]
          text-[4.8px] font-medium uppercase leading-none
          tracking-[0.56em]
          min-[481px]:mt-[10px] min-[481px]:text-[5.5px]
          min-[481px]:tracking-[0.62em]
          min-[1025px]:mt-[13px] min-[1025px]:text-[6px]
          min-[1025px]:tracking-[0.72em]
        "
      >
        Photography
      </span>
    </a>
  );
}

function DesktopNavigation({ links, position }) {
  return (
    <nav
      aria-label={`${position} primary navigation`}
      className="
        hidden w-full items-center justify-between
        min-[1025px]:flex
      "
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="
            relative inline-flex items-center whitespace-nowrap
            font-primary text-[16px] font-normal uppercase leading-none
            tracking-[0.045em] text-[#2f2e2d] no-underline
            transition-colors duration-250
            after:absolute after:inset-x-0 after:bottom-[-9px]
            after:h-px after:origin-center after:scale-x-0
            after:bg-current after:opacity-0 after:content-['']
            after:transition-all after:duration-250
            hover:text-[#111]
            hover:after:scale-x-100 hover:after:opacity-75
            focus-visible:text-[#111]
            focus-visible:after:scale-x-100
            focus-visible:after:opacity-75
            min-[1281px]:text-[17.5px]
            min-[1281px]:tracking-[0.055em]
          "
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function MenuButton({ isOpen, onClick, buttonRef }) {
  const commonBarClasses = `
    block h-px w-[25px] bg-[#181818]
    transition-[transform,opacity] duration-350
    min-[481px]:w-[27px]
  `;

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={onClick}
      className="
        relative z-[120] flex h-10 w-10 cursor-pointer
        flex-col items-center justify-center gap-[6px]
        bg-transparent p-0
        min-[481px]:h-11 min-[481px]:w-11
        min-[1025px]:hidden
      "
    >
      <span
        className={`${commonBarClasses} ${
          isOpen ? "translate-y-[7px] rotate-45" : ""
        }`}
      />

      <span
        className={`${commonBarClasses} ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`${commonBarClasses} ${
          isOpen ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}

function MobileNavigationLink({
  link,
  index,
  isMenuOpen,
  onClick,
  linkRef,
}) {
  return (
    <a
      ref={linkRef}
      href={link.href}
      onClick={onClick}
      tabIndex={isMenuOpen ? 0 : -1}
      style={{
        transitionDelay: `${120 + index * 55}ms`,
      }}
      className={`
        group flex items-center justify-between border-b
        border-[rgba(31,29,27,0.1)] px-[2px] py-[14px]
        font-primary text-[18px] font-normal uppercase
        leading-[1.15] tracking-[0.05em] text-[#33312f]
        no-underline transition-[color,padding,opacity,transform]
        duration-450
        hover:px-[7px] hover:text-[#94765e]
        focus-visible:px-[7px] focus-visible:text-[#94765e]
        min-[481px]:py-[15px] min-[481px]:text-[20px]
        min-[481px]:tracking-[0.055em]
        ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-7 opacity-0"
        }
      `}
    >
      <span>{link.label}</span>

      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="
          h-[17px] w-[17px] opacity-60
          transition-[transform,opacity] duration-250
          group-hover:translate-x-[2px]
          group-hover:-translate-y-[2px]
          group-hover:opacity-100
          group-focus-visible:translate-x-[2px]
          group-focus-visible:-translate-y-[2px]
          group-focus-visible:opacity-100
        "
      >
        <path
          d="M7 17L17 7M9 7H17V15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      firstMobileLinkRef.current?.focus();
    }, 500);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className="
          header-reveal absolute inset-x-0 top-0 z-[100] w-full
        "
      >
        <div
          className="
            h-[74px] w-full border-b border-white/25
            bg-white/[0.82] backdrop-blur-[2px]
            min-[481px]:h-[82px]
            min-[1025px]:h-[108px]
            min-[1025px]:bg-white/[0.77]
          "
        >
          <div
            className="
              relative mx-auto flex h-full w-[calc(100%-28px)]
              items-center justify-end
              min-[481px]:w-[calc(100%-42px)]
              min-[1025px]:grid
              min-[1025px]:w-[min(calc(100%-64px),1150px)]
              min-[1025px]:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)]
              min-[1025px]:gap-x-9
              min-[1281px]:w-[min(calc(100%-128px),1232px)]
              min-[1281px]:grid-cols-[minmax(0,1fr)_250px_minmax(0,1fr)]
              min-[1281px]:gap-x-[52px]
            "
          >
            <DesktopNavigation
              links={leftNavigation}
              position="left"
            />

            <Logo onClick={closeMenu} />

            <DesktopNavigation
              links={rightNavigation}
              position="right"
            />

            <MenuButton
              buttonRef={menuButtonRef}
              isOpen={isMenuOpen}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
        className={`
          fixed inset-0 z-[80] h-full w-full border-0
          bg-[rgba(18,16,14,0.3)] p-0 backdrop-blur-[3px]
          transition-opacity duration-400 min-[1025px]:hidden
          ${
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`
          fixed right-0 top-0 z-[90] flex h-dvh
          w-[min(88vw,350px)] flex-col bg-[#f5f1eb]
          px-[27px] pb-7 pt-[105px]
          shadow-[-18px_0_55px_rgba(0,0,0,0.13)]
          transition-transform duration-500 ease-elegant
          min-[481px]:w-[min(84vw,380px)]
          min-[481px]:px-[34px]
          min-[481px]:pb-[34px]
          min-[481px]:pt-[120px]
          min-[1025px]:hidden
          ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-[105%]"
          }
        `}
      >
        <nav className="flex flex-col">
          {mobileNavigation.map((link, index) => (
            <MobileNavigationLink
              key={link.id}
              link={link}
              index={index}
              isMenuOpen={isMenuOpen}
              onClick={closeMenu}
              linkRef={index === 0 ? firstMobileLinkRef : undefined}
            />
          ))}
        </nav>

        <div className="mt-auto text-[#35312e]">
          <span
            className="
              font-script text-[32px] font-normal leading-none
              min-[481px]:text-[35px]
            "
          >
            Tessa Morgan
          </span>

          <p
            className="
              mt-[9px] text-[7px] uppercase leading-[1.5]
              tracking-[0.28em] text-[#716c67]
              [font-family:Arial,Helvetica,sans-serif]
            "
          >
            Artistic wedding photography
          </p>
        </div>
      </aside>
    </>
  );
}