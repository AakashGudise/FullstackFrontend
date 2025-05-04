import React from "react";
import "../styles/Footer.css"
import logo from "../Assets/favicon-32x32.png"

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="hrline"/>
      <div className="footer-top">
        <div className="footer-column">
          <h4>PROGRAMS</h4>
          <ul>
            <li>Full-Time Software Engineering Bootcamp</li>
            <li>Part-Time Software Engineering Bootcamp</li>
            <li>Beginner Coding Bootcamp</li>
            <li>Coding Bootcamp for Women & Non-binary Students</li>
            <li>AI and Machine Learning Bootcamp</li>
            <li>Cybersecurity Bootcamp</li>
            <li>Data Analytics Bootcamp</li>
            <li>Coding Bootcamp</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COURSES</h4>
          <ul>
            <li>No Code AI and Machine Learning Course</li>
            <li>Intro to Coding</li>
            <li>Bootcamp Prep</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>WHY FULLSTACK</h4>
          <ul>
            <li>Hiring Outcomes</li>
            <li>Fullstack Academy Reviews</li>
          </ul>
          <hr className="hrline"/>
          <h4>ADMISSIONS & EVENTS</h4>
          <ul>
            <li>Admissions Process</li>
            <li>Events</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ABOUT US</h4>
          <ul>
            <li>About Fullstack Academy</li>
            <li>Careers</li>
            <li>Team Training</li>
            <li>For University Partners</li>
            <li>For Employer Partners</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-address">
        <img src={logo} alt="Fullstack Icon" className="footer-icon" />
          <p><strong>Fullstack Academy HQ</strong><br />249 Smith Street PMB 3004<br />Brooklyn, NY 11231</p>
        </div>
        <div className="footer-socials">
  <a href="https://www.linkedin.com/company/fullstack-academy" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://www.facebook.com/FullstackAcademy" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://www.instagram.com/fullstackacademy" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://twitter.com/fullstack" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-x-twitter"></i>
  </a>
  <a href="mailto:info@fullstackacademy.com">
    <i className="far fa-envelope"></i>
  </a>
</div>

      </div>
      <hr className="hrline"/>
      <div className="footer-copy">
        <p>Copyright © 2025, Fullstack Academy, LLC.</p>
        <p>
          Fullstack Academy is licensed by the New York State Education Department.
        </p>
        <a href="#">Regulatory Information</a> | <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
