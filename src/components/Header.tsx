import { useState, useEffect } from "react";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about-section" },
  { label: "Skills", href: "#skills-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Contact", href: "#contact-section" },
];

function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#");

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);

      // Highlight active nav link based on scroll
      const sections = NAV_ITEMS.map((item) => item.href).filter(
        (href) => href !== "#"
      );
      for (const id of [...sections].reverse()) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("#");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    setActiveSection(href);
    setMenuOpen(false);
  };

  return (
    <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <div id="header-left">
        <span id="logo-text">
          <a href="#">Trong Phuc.</a>
        </span>
      </div>

      {/* Desktop Nav */}
      <nav id="header-right">
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li className="links" key={item.label}>
              <a
                href={item.href}
                className={activeSection === item.href ? "active" : ""}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Drawer */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={activeSection === item.href ? "active" : ""}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;