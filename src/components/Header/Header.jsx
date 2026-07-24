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

const allNavigation = [...leftNavigation, ...rightNavigation];

function BrandLogo({ onClick }) {
  return (
    <a
      href="#home"
      className="header-brand"
      aria-label="Tessa Morgan Photography home"
      onClick={onClick}
    >
      <span className="header-brand__name">Tessa Morgan</span>
      <span className="header-brand__caption">Photography</span>
    </a>
  );
}

function MenuButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      className={`mobile-menu-button ${isOpen ? "is-open" : ""}`}
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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-surface">
          <div className="header-container">
            <nav
              className="desktop-navigation desktop-navigation--left"
              aria-label="Primary left navigation"
            >
              {leftNavigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="desktop-navigation__link"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <BrandLogo onClick={closeMenu} />

            <nav
              className="desktop-navigation desktop-navigation--right"
              aria-label="Primary right navigation"
            >
              {rightNavigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="desktop-navigation__link"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "is-visible" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <aside
        id="mobile-navigation"
        className={`mobile-navigation ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <nav className="mobile-navigation__links">
          {allNavigation.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className="mobile-navigation__link"
              onClick={closeMenu}
              style={{
                "--mobile-link-delay": `${100 + index * 55}ms`,
              }}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <div className="mobile-navigation__footer">
          <span className="mobile-navigation__signature">
            Tessa Morgan
          </span>

          <p>Artistic wedding photography</p>
        </div>
      </aside>
    </>
  );
}