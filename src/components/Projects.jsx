
function Projects(){
    return(
        <div>
            <section id="projects">
                <div className="intro-projects">
                    <h1>Projects</h1>
                </div>

                <div className="all-projects">
                    <div className="project">
                        <div className="project-header">
                            <h3 className="project-title">Portfolio Website</h3>
                            <p className="project-sub">Personal Project</p>
                        </div>



                        <div className="project-body">
                            <p className="project-desc">
                            Personal portfolio built with responsive layout and dark-tech style.
                            </p>

                            <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            </div>

                            <div className="project-actions">
                            <a href="#" target="_blank" className="previewBtn">Preview</a>
                            <a href="https://github.com/ychrisdev/Portfolio.git" target="_blank" className="sourceBtn">Source</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects