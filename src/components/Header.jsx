
function Header(){

    return(
        <div className="header-container">
            <div id="header-left">
                <span id="logo-text"><a href="#">Trong Phuc.</a></span>
            </div>
            <div id="header-right">
                <ul className="nav-links">
                    <li className="links"><a href="#">Home</a></li>
                    <li className="links"><a href="#about-section">About</a></li>
                    <li className="links"><a href="#skills-section">Skills</a></li>
                    <li className="links"><a href="#projects-section">Projects</a></li>
                    <li className="links"><a href="#contact-section">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header