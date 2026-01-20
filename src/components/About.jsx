import avatar from "../assets/avatar.jpg";

function About(){

    return(
        <div>
            <div className="intro">
                <div id="extra-intro">
                    <div id="avatar">
                        <img src={avatar} alt="Avatar"></img>
                    </div>
                    <div id="intro-text">
                        <h4>Hello, I'm</h4>
                        <h1>Tran Trong Phuc</h1>
                        <h2>Frontend Developer</h2>
                        <p style={{textAlign: "left"}}>
                            Web developer in training, focused on building clean and user friendly web experiences. Aspiring full-stack developer who learns through real-world projects.
                        </p>
                        <div className="intro-btn">
                            <a id="contactBtn" href="contact.html">Contact Me</a>
                            <a id="downloadBtn" href="">Download CV</a>
                        </div>
                        <div className="socials">
                            <a href="https://github.com/ychrisdev" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://www.facebook.com/YanjChris" target="_blank"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/chrissz_x/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <h1 id="aboutMe">About Me</h1>

                <p className="about-intro">
                    I love turning ideas into real products through
                    code and constantly challenge myself to learn new things. With a strong
                    interest in frontend technologies, I focus on improving both design sense
                    and logical thinking, aiming to create meaningful and enjoyable digital
                    experiences.
                </p>


                <div className="about-grid">
                    <div className="about-card">
                        <h3>Education</h3>
                        <p>Bachelor of Information Technology</p>
                        <span>University of Transport Ho Chi Minh City</span>
                    </div>

                    <div className="about-card">
                        <h3>Experience</h3>
                        <p>Student Level</p>
                        <span>Learning & Personal Projects</span>
                    </div>

                    <div className="about-card">
                        <h3>Projects</h3>
                        <p>1</p>
                        <span>Personal & Practice</span>
                    </div>

                    <div className="about-card">
                        <h3>English</h3>
                        <p>TOEIC 500+</p>
                        <span>Reading & Communication</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About