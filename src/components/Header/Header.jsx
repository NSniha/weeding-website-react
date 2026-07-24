import { useEffect, useState } from "react";
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
      className="header-logo"
      aria-label="Tessa Morgan Photography home"
      onClick={onClick}
    >
      <span className="header-logo__name">Tessa Morgan</span>
      <span className="header-logo__caption">Photography</span>
    </a>
  );
}

function DesktopNavigation({ links, position }) {
  return (
    <nav
      className={`desktop-nav desktop-nav--${position}`}
      aria-label={`${position} primary navigation`}
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="desktop-nav__link"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function MenuButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      className={`menu-button ${isOpen ? "is-active" : ""}`}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
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
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-background">
          <div className="header-container">
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
              isOpen={isMenuOpen}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`mobile-overlay ${
          isMenuOpen ? "is-visible" : ""
        }`}
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        id="mobile-navigation"
        className={`mobile-navigation ${
          isMenuOpen ? "is-open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <nav className="mobile-navigation__menu">
          {mobileNavigation.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              className="mobile-navigation__link"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              style={{
                "--link-delay": `${120 + index * 55}ms`,
              }}
            >
              <span>{link.label}</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
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
          ))}
        </nav>

        <div className="mobile-navigation__footer">
          <span>Tessa Morgan</span>
          <p>Artistic wedding photography</p>
        </div>
      </aside>
    </>
  );
}