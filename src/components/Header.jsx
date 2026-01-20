
function Header(){

    return(
        <div className="header-container">
            <div id="header-left">
                <span id="logo-text"><a href="index.html">Trong Phuc.</a></span>
            </div>
            <div id="header-right">
                <ul className="nav-links">
                    <li className="links"><a href="index.html">Home</a></li>
                    <li className="links"><a href="#about">About</a></li>
                    <li className="links"><a href="#skills">Skills</a></li>
                    <li className="links"><a href="Projects.html">Projects</a></li>
                    <li className="links"><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header