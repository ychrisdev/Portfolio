import { useEffect, useRef } from "react";

type Skill = {
  id: number;
  name: string;
  icon: string;
};

const SKILL_LIST: Skill[] = [
  { id: 1, name: "HTML",       icon: "fab fa-html5"    },
  { id: 2, name: "CSS",        icon: "fab fa-css3-alt" },
  { id: 3, name: "JavaScript", icon: "fab fa-js"       },
  { id: 4, name: "React",      icon: "fab fa-react"    },
  { id: 5, name: "TypeScript", icon: "fas fa-code"     },
  { id: 6, name: "Git",        icon: "fab fa-git-alt"  },
  { id: 7, name: "Docker",     icon: "fab fa-docker"   },
  { id: 8, name: "Node.js",    icon: "fab fa-node-js"  },
  { id: 9, name: "Firebase",   icon: "fas fa-fire"     },
];

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger-animate each tile
          tilesRef.current.forEach((tile, i) => {
            if (!tile) return;
            setTimeout(() => {
              tile.classList.add("visible");
            }, i * 80);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-section" className="skills" ref={sectionRef}>
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">Technologies I work with</p>

      <div className="skills-grid">
        {SKILL_LIST.map((skill, i) => (
          <div
            className="skill-tile"
            key={skill.id}
            ref={(el) => { tilesRef.current[i] = el; }}
          >
            <i className={skill.icon} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;