import React, {useEffect, useRef} from 'react';

function Skills() {
  const sectionRef = useRef(null);

  const skillList = [
    {id: 1, name: "HTML", icon: "fab fa-html5" },
    {id: 2, name: "CSS", icon: "fab fa-css3-alt" },
    {id: 3, name: "JavaScript", icon: "fab fa-js" },
    {id: 4, name: "React", icon: "fab fa-react" },
    {id: 5, name: "TypeScript", icon: "fas fa-code" },
    {id: 6, name: "Git", icon: "fab fa-git-alt" },
    {id: 7, name: "Docker", icon: "fab fa-docker" },
    {id: 8, name: "Node.js", icon: "fab fa-node-js" },
    {id: 10, name: "Firebase", icon: "devicon-firebase-plain" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return(
    <section id="skills-section" className="skills">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {skillList.map((skill) => (
          <div className="skill-tile" key={skill.id}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
