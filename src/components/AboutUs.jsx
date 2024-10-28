import React from "react";

function AboutUs() {
  return (
    <div className="container">
      <div className="about-us">
        <h2>About Us</h2>
        <div className="line"></div>
        <p>
          It is a long established <br />
          fact that a reader will be distracted <br />
          by the readable content of a page <br />
          when looking at.
        </p>
        <div className="social-icons">
          <a href="#">
            <i className=""></i>
          </a>
          <a href="#">
            <i className=""></i>
          </a>
          <a href="#">
            <i className=""></i>
          </a>
        </div>
      </div>
      <div className="services">
        <h2>Services</h2>
        <div className="line"></div>
        <ul>
          <li>Web Design/Development</li>
          <li>App Development</li>
          <li>UI/UX Design</li>
          <li>HubSpot Integration</li>
          <li>Email Marketing</li>
          <li>Website Migration</li>
        </ul>
      </div>
      <div className="career">
        <h2>Career</h2>
        <div className="line"></div>
        <div className="career-item">
          <div className="icon">
            <i></i>
          </div>
          <h3>ReactJs Dev.</h3>
          <p>1-5 years of Exp</p>
        </div>
        <div className="career-item">
          <div className="icon">
            <i className="fab fa-wordpress"></i>
          </div>
          <h3>Wordpress Dev.</h3>
          <p>1-5 Years of Exp.</p>
        </div>
        <div className="career-item">
          <div className="icon">
            <i className="fab fa-wordpress"></i>
          </div>
          <h3>Python Developer</h3>
          <p>1-5 Years of Exp.</p>
        </div>
      </div>
      <div className="Subscribe">
        <h2>Subscribe Us</h2>
        <div className="line"></div>
        <div>
          <p>
            It is a long established <br />
            fact that a reader will be <br />
            distracted by the readable
          </p>
          <form className="subscribe-form">
            <input type="text" placeholder="Email" />
          </form>
          <div className="container-button">
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
