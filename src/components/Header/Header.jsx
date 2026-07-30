import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./header.css";

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

const mobileNavigation = [...leftNavigation, ...rightNavigation];

function Logo({ onClick, isPageHeader }) {
  return (
    <Link
      to="/"
      aria-label="Tessa Morgan Photography home"
      onClick={onClick}
      className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-[#191919] no-underline min-[1025px]:static min-[1025px]:translate-x-0 min-[1025px]:translate-y-0"
    >
      <span
        className={`mt-[-3px] block whitespace-nowrap font-script font-normal leading-[0.8] tracking-[0.015em] ${
          isPageHeader
            ? "text-[30px] min-[481px]:text-[33px] min-[1025px]:text-[35px] min-[1281px]:text-[37px]"
            : "text-[30px] min-[481px]:text-[34px] min-[1025px]:text-[36px] min-[1281px]:text-[39px]"
        }`}
      >
        Tessa Morgan
      </span>

      <span
        className={`block pl-[6px] font-medium uppercase leading-none [font-family:Arial,Helvetica,sans-serif] ${
          isPageHeader
            ? "mt-[9px] text-[4.8px] tracking-[0.56em] min-[481px]:text-[5.3px] min-[481px]:tracking-[0.62em] min-[1025px]:mt-[10px] min-[1025px]:text-[5.5px] min-[1025px]:tracking-[0.68em]"
            : "mt-[9px] text-[4.8px] tracking-[0.56em] min-[481px]:mt-[10px] min-[481px]:text-[5.5px] min-[481px]:tracking-[0.62em] min-[1025px]:mt-[13px] min-[1025px]:text-[6px] min-[1025px]:tracking-[0.72em]"
        }`}
      >
        Photography
      </span>
    </Link>
  );
}

function DesktopNavigation({ links, position }) {
  return (
    <nav
      aria-label={`${position} primary navigation`}
      className="hidden w-full items-center justify-between min-[1025px]:flex"
    >
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.href}
          end={link.href === "/"}
          className={({ isActive }) =>
            `relative inline-flex items-center whitespace-nowrap font-primary text-[16px] font-normal uppercase leading-none tracking-[0.045em] no-underline transition-colors duration-[250ms] after:absolute after:inset-x-0 after:bottom-[-9px] after:h-px after:origin-center after:bg-current after:transition-[opacity,transform] after:duration-[250ms] after:content-[''] hover:text-[#9c795d] hover:after:scale-x-100 hover:after:opacity-100 focus-visible:text-[#9c795d] focus-visible:outline-none focus-visible:after:scale-x-100 focus-visible:after:opacity-100 min-[1281px]:text-[17.5px] min-[1281px]:tracking-[0.055em] ${
              isActive
                ? "text-[#9c795d] after:scale-x-100 after:opacity-100"
                : "text-[#2f2e2d] after:scale-x-0 after:opacity-0"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

function MenuButton({ isOpen, onClick, buttonRef }) {
  const commonBarClasses =
    "block h-px w-[25px] bg-[#181818] transition-[transform,opacity] duration-[350ms] min-[481px]:w-[27px]";

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={onClick}
      className="relative z-[120] flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[6px] border-0 bg-transparent p-0 min-[481px]:h-11 min-[481px]:w-11 min-[1025px]:hidden"
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
    <NavLink
      ref={linkRef}
      to={link.href}
      end={link.href === "/"}
      onClick={onClick}
      tabIndex={isMenuOpen ? 0 : -1}
      style={{
        transitionDelay: `${120 + index * 55}ms`,
      }}
      className={({ isActive }) =>
        `group flex items-center justify-between border-b border-[rgba(31,29,27,0.1)] py-[14px] font-primary text-[18px] font-normal uppercase leading-[1.15] tracking-[0.05em] no-underline transition-[color,padding,opacity,transform] duration-[450ms] hover:px-[7px] hover:text-[#94765e] focus-visible:px-[7px] focus-visible:text-[#94765e] focus-visible:outline-none min-[481px]:py-[15px] min-[481px]:text-[20px] min-[481px]:tracking-[0.055em] ${
          isActive
            ? "px-[7px] text-[#94765e]"
            : "px-[2px] text-[#33312f]"
        } ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-7 opacity-0"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{link.label}</span>

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`h-[17px] w-[17px] transition-[transform,opacity] duration-[250ms] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100 group-focus-visible:translate-x-[2px] group-focus-visible:-translate-y-[2px] group-focus-visible:opacity-100 ${
              isActive
                ? "translate-x-[2px] opacity-100"
                : "opacity-60"
            }`}
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
        </>
      )}
    </NavLink>
  );
}

export default function Header({ variant = "overlay" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  const { pathname } = useLocation();

  const isPageHeader = variant === "page";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  useEffect(() => {
    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

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

  const headerPositionClasses = isPageHeader
    ? "relative"
    : "absolute inset-x-0 top-0";

  const headerSurfaceClasses = isPageHeader
    ? "h-[74px] border-b border-[#ebe8e4] bg-white min-[481px]:h-[82px] min-[1025px]:h-[82px]"
    : "h-[74px] border-b border-white/25 bg-white/[0.82] backdrop-blur-[2px] min-[481px]:h-[82px] min-[1025px]:h-[108px] min-[1025px]:bg-white/[0.77]";

  return (
    <>
      <header
        className={`header-reveal z-[100] w-full ${headerPositionClasses}`}
      >
        <div className={`w-full ${headerSurfaceClasses}`}>
          <div className="relative mx-auto flex h-full w-[calc(100%_-_28px)] items-center justify-end min-[481px]:w-[calc(100%_-_42px)] min-[1025px]:grid min-[1025px]:w-[min(calc(100%_-_64px),1150px)] min-[1025px]:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)] min-[1025px]:gap-x-9 min-[1281px]:w-[min(calc(100%_-_128px),1232px)] min-[1281px]:grid-cols-[minmax(0,1fr)_250px_minmax(0,1fr)] min-[1281px]:gap-x-[52px]">
            <DesktopNavigation
              links={leftNavigation}
              position="left"
            />

            <Logo
              onClick={closeMenu}
              isPageHeader={isPageHeader}
            />

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
        className={`fixed inset-0 z-[80] h-full w-full border-0 bg-[rgba(18,16,14,0.3)] p-0 backdrop-blur-[3px] transition-opacity duration-[400ms] min-[1025px]:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-0 z-[90] flex h-dvh w-[min(88vw,350px)] flex-col bg-[#f5f1eb] px-[27px] pb-7 pt-[105px] shadow-[-18px_0_55px_rgba(0,0,0,0.13)] transition-transform duration-500 [transition-timing-function:var(--ease-elegant)] min-[481px]:w-[min(84vw,380px)] min-[481px]:px-[34px] min-[481px]:pb-[34px] min-[481px]:pt-[120px] min-[1025px]:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
      >
        <nav
          aria-label="Mobile primary navigation"
          className="flex flex-col"
        >
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
          <span className="font-script text-[32px] font-normal leading-none min-[481px]:text-[35px]">
            Tessa Morgan
          </span>

          <p className="mt-[9px] text-[7px] uppercase leading-[1.5] tracking-[0.28em] text-[#716c67] [font-family:Arial,Helvetica,sans-serif]">
            Artistic wedding photography
          </p>
        </div>
      </aside>
    </>
  );
}