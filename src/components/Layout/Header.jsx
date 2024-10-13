import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll"; // Import scroller

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const headerData = {
  name: "Shirin",
  designation: "Frontend Developer",
  imageThumb: "/images/logo.png",
  social: {
    linkedin: "https://www.linkedin.com/in/shirin-abdollahzadeh-65b689199/",
    github: "https://github.com/ShirinAbdz",
    twitter: "https://twitter.com",
    gmail: "mailto:shiringohariii@gmail.com",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);

    // Scroll to the specific section if provided in the state
    if (location.state && location.state.scrollTo) {
      const targetElement = document.getElementById(location.state.scrollTo);
      if (targetElement) {
        scroller.scrollTo(location.state.scrollTo, {
          smooth: true,
          offset: -50,
          duration: 500,
        });
      } else {
        console.warn(`Element with ID ${location.state.scrollTo} not found`);
      }
    }
  }, [location]);

  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/">
            <img src={headerData.imageThumb} alt={headerData.name} />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
  <ul className="vertical-menu scrollspy">
    <li>
      {currentPath === "/" ? (
        <ScrollLink
          activeClass="active"
          to="section-home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <i className="icon-home"></i>Home
        </ScrollLink>
      ) : (
        <Link to={{ pathname: "/", state: { scrollTo: "section-home" } }}>
          <i className="icon-home"></i>Home
        </Link>
      )}
    </li>
    <li>
      {currentPath === "/" ? (
        <ScrollLink
          activeClass="active"
          to="section-about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <i className="icon-user"></i>About
        </ScrollLink>
      ) : (
        <Link to={{ pathname: "/", state: { scrollTo: "section-about" } }}>
          <i className="icon-user"></i>About
        </Link>
      )}
    </li>
    <li>
      {currentPath === "/" ? (
        <ScrollLink
          activeClass="active"
          to="section-experiences"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <i className="icon-graduation"></i>Resume
        </ScrollLink>
      ) : (
        <Link to={{ pathname: "/", state: { scrollTo: "section-experiences" } }}>
          <i className="icon-graduation"></i>Resume
        </Link>
      )}
    </li>
    <li>
      {currentPath === "/" ? (
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <i className="icon-grid"></i>Works
        </ScrollLink>
      ) : (
        <Link to={{ pathname: "/", state: { scrollTo: "section-portfolios" } }}>
          <i className="icon-grid"></i>Works
        </Link>
      )}
    </li>
  </ul>
</nav>


          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {headerData.social.linkedin && (
                <li className="list-inline-item">
                  <a
                    href={headerData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              )}
              {headerData.social.twitter && (
                <li className="list-inline-item">
                  <a
                    href={headerData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
              )}
              {headerData.social.github && (
                <li className="list-inline-item">
                  <a
                    href={headerData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
              )}
              {headerData.social.gmail && (
                <li className="list-inline-item">
                  <a
                    href={headerData.social.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGmail />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
