import React from "react";
import ThankYou from "./ThankYou";
import Header from "./Header";
import SideBar from "../images/bg-main-mobile.png";

const ConfirmationPage = ({ formState }) => {
  return (
    <div>
      <Header formState={formState} />
      <img className="sidebar" src={SideBar} />
      <ThankYou />
    </div>
  );
};

export default ConfirmationPage;
