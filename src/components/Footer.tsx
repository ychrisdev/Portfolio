type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  href: string;
  icon: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about-section" },
  { label: "Skills", href: "#skills-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Contact", href: "#contact-section" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/ychrisdev", icon: "fab fa-github", label: "GitHub" },
  { href: "https://www.facebook.com/YanjChris", icon: "fab fa-facebook", label: "Facebook" },
  { href: "https://www.instagram.com/chrissz_x/", icon: "fab fa-instagram", label: "Instagram" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>

        <div className="footer-copyright">
          <p>
            &copy; {year} Trần Trọng Phúc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;