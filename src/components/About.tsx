import { useEffect, useRef } from "react";
import avatar from "../assets/avatar.jpg";

type SocialLink = {
  href: string;
  icon: string;
  label: string;
};

type AboutCard = {
  title: string;
  value: string;
  subtitle: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/ychrisdev", icon: "fab fa-github", label: "GitHub" },
  { href: "https://www.facebook.com/YanjChris", icon: "fab fa-facebook", label: "Facebook" },
  { href: "https://www.instagram.com/chrissz_x/", icon: "fab fa-instagram", label: "Instagram" },
  { href: "#", icon: "fab fa-linkedin", label: "LinkedIn" },
];

const ABOUT_CARDS: AboutCard[] = [
  { title: "Education", value: "Bachelor of IT", subtitle: "University of Transport Ho Chi Minh City" },
  { title: "Experience", value: "Student Level", subtitle: "Learning & Personal Projects" },
  { title: "Projects", value: "1+", subtitle: "Personal & Practice" },
  { title: "English", value: "TOEIC 500+", subtitle: "Reading & Communication" },
];

function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Fade-in on mount for hero
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  // Scroll reveal for about section
  useEffect(() => {
    const section = aboutRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("reveal");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero / Intro */}
      <div className="intro">
        <div id="extra-intro" ref={heroRef}>
          <div id="avatar">
            <div className="avatar-hex">
              <img src={avatar} alt="Tran Trong Phuc avatar" />
            </div>
          </div>
          <div id="intro-text">
            <h4>Hello, I'm</h4>
            <h1>Tran Trong Phuc</h1>
            <h2>Frontend Developer</h2>
            <p>
              Web developer in training, focused on building clean and
              user-friendly web experiences. Aspiring full-stack developer
              who learns through real-world projects.
            </p>
            <div className="intro-btn">
              <a id="contactBtn" href="#contact-section">
                Contact Me
              </a>
              <a id="downloadBtn" href="/cv.pdf" download>
                Download CV
              </a>
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
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about-section">
        <div className="about reveal-container" ref={aboutRef}>
          <h1 id="aboutMe">About Me</h1>
          <p className="about-intro">
            I love turning ideas into real products through code and constantly
            challenge myself to learn new things. With a strong interest in
            frontend technologies, I focus on improving both design sense and
            logical thinking, aiming to create meaningful and enjoyable digital
            experiences.
          </p>
          <div className="about-grid">
            {ABOUT_CARDS.map((card) => (
              <div className="about-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.value}</p>
                <span>{card.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;