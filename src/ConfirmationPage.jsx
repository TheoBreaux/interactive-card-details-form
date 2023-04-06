import React from "react";
import ThankYou from "./ThankYou";
import Header from "./Header";

const ConfirmationPage = ({ formState }) => {
  return (
    <div>
      <Header formState={formState}/>
      <ThankYou />
    </div>
  );
};

export default ConfirmationPage;
