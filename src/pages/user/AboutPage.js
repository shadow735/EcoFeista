import React from 'react';
import '../../css/AboutPage.css';
import eco from '../../images/eco.jpg';
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <section className="about-us">
      <div className="about">
        <div className="column">
          {/* Image from the public directory */}
          <img src={eco} alt="Eco About" height="250px" width="450px" />
        </div>
        <div className="text-about">
          <h6>About Us</h6>
          <p>
            Welcome to EcoFiestaFinds, your trusted source for sustainable living solutions. We are a passionate team of eco-conscious individuals dedicated to making the world a greener, healthier place. Our journey began with a simple belief: that every small action can create a big impact.
          </p>
          <div className="data">
            {/* Replace the anchor element with a button */}
            <NavLink to="/blog" exact>
              {/* Place the NavLink inside a button */}
              <button className="learn-more">Learn More</button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* Render the FontawesomeLink component here */}

    </section>
  );
};

export default About;
