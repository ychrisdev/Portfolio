const skills = [
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "TypeScript", icon: "fas fa-code" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Firebase", icon: "devicon-firebase-plain" },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className="skill-tile" key={i}>
            <i className={s.icon}></i>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
