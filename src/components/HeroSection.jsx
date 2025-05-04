import React from "react";
import "../styles/Landing.css"
import amazon from "../Assets/amazon.svg"
import facebook from "../Assets/facebook.svg"
import google from "../Assets/google.svg"
import land1 from "../Assets/land1.svg"
import land2 from "../Assets/land2.svg"
import land3 from "../Assets/land3.svg"
import land4 from "../Assets/land4.svg"

function Landing() {
  return (
    <div className="landing">
      <div className="left-section">
        <h1>Make Your Move.</h1>
        <p>
          <span className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </span> 4.8/5 student rating</p>
        <ul className="features-list">
  <li className="features-list1">
    <img src={land1} alt="check" />
    Tech bootcamp leader since 2012
  </li >
  <li className="features-list1">
    <img src={land2} alt="check" />
    Immersive, live online instruction
  </li>
  <li className="features-list1">
    <img src={land3} alt="check" />
    1-on-1 career coaching
  </li>
  <li className="features-list1">
    <img src={land4} alt="check" />
    1,500+ companies hire our grads
  </li>
</ul>

        <div className="brands">
  <img src={google} alt="Google" />
  <img src={amazon} alt="Amazon" />
  <img src={facebook} alt="Facebook" />
</div>
      </div>
      <div className="right-section">
        <div className="info-box">
          <h2>Ready to take your next step? Get more info.</h2>
          <form className="form1">
            <label>
              Inquiring for:
              <input type="radio" name="inquire" /> Myself
              <input type="radio" name="inquire" /> My Company
            </label>
            <label className="options">
              Select your subject:
              <select className="option1">
                <option>Please select...</option>
                <option>Software Engineering</option>
                <option>Cybersecurity</option>
              </select>
            </label>
            <button type="submit">Get More Info</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;
