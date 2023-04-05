import React from "react";
import "./Header.css";
import CardLogo from "../images/card-logo.svg";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";
import HeaderBackground from "../images/bg-main-mobile.png";

const Header = () => {
  return (
    <div>
      <div>
        <img className="header-background-image" src={HeaderBackground} />
      </div>

      <div className="cards-div">
        <div className="card-back-div">
          <img className="card-back" src={CardBack} />
          <p className="cvc-code">{}</p>
        </div>

        <div className="card-front-div">
          <img className="card-front" src={CardFront} />
          <img className="card-logo" src={CardLogo} />
          <p className="card-number">{}</p>
          <div className="date-info">
            <p className="cc-name">{}</p>
            <div>
              <p className="cc-date">
                {/* {props.month && props.year
                  ? props.month + "/" + props.year
                  : null} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
