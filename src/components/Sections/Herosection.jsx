import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const herosectionData = {
  name: "Shirin Abdollahzadeh",
  aboutMe:
    "I was born as an artist. Walking through this life, I tried learning different skills just to know who I am! Now I'm here! A frontend developer with a background of an artist! She loves Badminton, Painting, and cars!",
};

function Herosection() {
  const handleEmailClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Scroll to the contact section
    scroll.scrollTo("section-contact", {
      duration: 100,
      delay: 0,
      smooth: true,
      offset: -50,
    });

    // Open the email client
    window.location.href = "mailto:shiringohariii@gmail.com";
  };

  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4" style={{ lineHeight: "1" }}>
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        {/* <p className="mb-4">{herosectionData.aboutMe}</p> */}
        <div className="pt-">
          <ScrollLink
            activeClass="active"
            to="section-portfolios"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            className="btn btn-default btn-lg mr-3"
          >
            <i className="icon-grid"></i>View Portfolio
          </ScrollLink>
          <div
            className="spacer d-md-none d-lg-none d-sm-none"
            data-height="10"
          ></div>
          <button onClick={handleEmailClick} className="btn btn-default btn-lg">
            <i className="icon-envelope"></i>Hire me
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
