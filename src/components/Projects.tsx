import { useEffect, useRef } from "react";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  previewUrl: string;
  sourceUrl: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    subtitle: "Personal Project",
    description:
      "Personal portfolio built with responsive layout and dark-tech style.",
    tech: ["HTML", "CSS", "JavaScript"],
    previewUrl: "#",
    sourceUrl: "https://github.com/ychrisdev/Portfolio.git",
  },
];

function Projects() {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects-section">
      <div className="intro-projects">
        <h1>Projects</h1>
        <p>Things I've built along the way</p>
      </div>

      <div className="all-projects">
        {PROJECTS.map((project, i) => (
          <article
            className="project"
            key={project.id}
            ref={(el) => { cardsRef.current[i] = el; }}
          >
            {/* Large number watermark */}
            <span className="project-number">0{project.id}</span>

            <div className="project-inner">
              <div className="project-top">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-sub">{project.subtitle}</p>
                </div>
                <div className="project-links">
                  <a href={project.previewUrl} target="_blank" rel="noreferrer" aria-label="Preview">
                    <i className="fas fa-external-link-alt" />
                  </a>
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer" aria-label="Source code">
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;