import { useEffect, useState } from "react";

const navigationLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "Portfolio", href: "#portfolio" },
  { id: 5, label: "Blog", href: "#blog" },
  { id: 6, label: "Contact", href: "#contact" },
];

function MenuIcon({ isOpen }) {
  return (
    <span
      aria-hidden="true"
      className="relative block h-5 w-7"
    >
      <span
        className={`absolute left-0 top-0.5 h-px w-7 bg-neutral-900 transition-all duration-300 ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />

      <span
        className={`absolute left-0 top-2.5 h-px w-7 bg-neutral-900 transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute bottom-0.5 left-0 h-px w-7 bg-neutral-900 transition-all duration-300 ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function BrandLogo() {
  return (
    <a
      href="#home"
      aria-label="Tessa Morgan Photography home"
      className="group flex shrink-0 flex-col items-center text-neutral-900"
    >
      <span className="font-script whitespace-nowrap text-[35px] leading-[0.8] tracking-[0.02em] transition-transform duration-300 group-hover:scale-[1.03] lg:text-[39px]">
        Tessa Morgan
      </span>

      <span className="mt-2 text-[7px] font-medium uppercase tracking-[0.65em]">
        Photography
      </span>
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
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
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="animate-navbar absolute inset-x-0 top-0 z-50">
        <div className="h-[82px] bg-white/80 backdrop-blur-[2px] sm:h-[92px] lg:h-[108px]">
          <div className="mx-auto flex h-full w-[calc(100%-36px)] max-w-[1280px] items-center justify-between sm:w-[calc(100%-64px)] lg:w-[calc(100%-100px)]">
            {/* Desktop left navigation */}

            <nav
              aria-label="Primary navigation left"
              className="hidden flex-1 items-center justify-start gap-[clamp(30px,4.1vw,67px)] lg:flex"
            >
              {navigationLinks.slice(0, 3).map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative text-[21px] font-medium uppercase tracking-[0.025em] text-neutral-800 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-neutral-800 after:transition-all after:duration-300 hover:text-black hover:after:w-full xl:text-[23px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Logo */}

            <div className="lg:px-[clamp(38px,5vw,80px)]">
              <BrandLogo />
            </div>

            {/* Desktop right navigation */}

            <nav
              aria-label="Primary navigation right"
              className="hidden flex-1 items-center justify-end gap-[clamp(30px,4.1vw,67px)] lg:flex"
            >
              {navigationLinks.slice(3).map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative text-[21px] font-medium uppercase tracking-[0.025em] text-neutral-800 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-neutral-800 after:transition-all after:duration-300 hover:text-black hover:after:w-full xl:text-[23px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}

      <div
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-40 flex h-dvh w-[min(82vw,380px)] flex-col bg-[#f4f1ec] px-8 pb-10 pt-[125px] shadow-[-15px_0_40px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col">
          {navigationLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 45}ms` }}
              className={`border-b border-neutral-900/10 py-4 text-[25px] uppercase tracking-[0.08em] text-neutral-800 transition-all duration-500 hover:pl-2 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <span className="font-script text-[31px] text-neutral-700">
            Capturing your story
          </span>

          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
            Wedding photography
          </p>
        </div>
      </aside>
    </>
  );
}