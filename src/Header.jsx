import React from "react";
import "./Header.css";
import CardLogo from "../images/card-logo.svg";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";
import HeaderBackground from "../images/bg-main-mobile.png";

const Header = ({ formState }) => {
  return (
    <div>
      <div>
        <img className="header-background-image" src={HeaderBackground} alt="front of credit card background"/>
      </div>

      <div className="cards-div">
        <div className="card-back-div">
          <img className="card-back" src={CardBack} alt="front of credit card background"/>
          <p className="cvc-code">{formState.cvc}</p>
        </div>

        <div className="card-front-div">
          <img className="card-front" src={CardFront} alt="front of credit card background"/>
          <img className="card-logo" src={CardLogo} alt="credit card company logo"/>
          <p className="card-number">
            {formState.number
              ? formState.number
                  .replace(/\s/g, "")
                  .match(/.{1,4}/g)
                  ?.join(" ")
              : null}
          </p>
          <div className="date-info">
            <p className="cc-name">{formState.name}</p>
            <div>
              <p className="cc-date">
                {formState.month && formState.year
                  ? formState.month + "/" + formState.year
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
