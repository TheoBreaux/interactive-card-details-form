import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import ConfirmationPage from "./ConfirmationPage";
import SideBar from "../images/bg-main-mobile.png";

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({});

  return (
    <div className="container">
      {console.log(formSubmitted)}
      {console.log(formState)}

      {formSubmitted ? (
        <ConfirmationPage formState={formState} />
      ) : (
        <div className="desktop">
          <Header formState={formState} />
          <img className="sidebar" src={SideBar} />
          <Form
            formState={formState}
            setFormState={setFormState}
            setFormSubmitted={setFormSubmitted}
            formSubmitted={formSubmitted}
          />
        </div>
      )}
    </div>
  );
};

export default App;
