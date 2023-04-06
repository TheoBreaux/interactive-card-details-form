import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import ConfirmationPage from "./ConfirmationPage";

const App = () => {
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  // const [cvc, setCvc] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({});


  return (
    <div className="container">
      {formSubmitted ? (
        <ConfirmationPage />
      ) : (
        <div>
          <Header formState={formState} />
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
