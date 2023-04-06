import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import { validationSchema } from "./schemas";

const Form = ({ setFormState }) => {
  const onSubmit = async (values, actions) => {
    //update formSubmitted to true (?????)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormState(values);
    console.log(values);
    actions.resetForm();
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
      formSumbitted: false,
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="cardholder-name" htmlFor="name">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          id="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. Jane Appleseed"
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}

        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          id="number"
          minLength={16}
          maxLength={16}
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. 1234 5678 9123 0000"
          className={errors.number && touched.number ? "input-error" : ""}
        />
        {errors.number && touched.number && (
          <p className="error">{errors.number}</p>
        )}

        <div className="security-details">
          <div className="security-details-row">
            <label htmlFor="expmonth">EXP. DATE (MM</label>
            <input
              type="text"
              id="month"
              maxLength={2}
              value={values.month}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="MM"
              className={errors.month && touched.month ? "input-error" : ""}
            />
            {errors.month && touched.month && (
              <p className="error">{errors.month}</p>
            )}
          </div>

          <div className="security-details-row">
            <label htmlFor="expyear">/YY)</label>
            <input
              type="text"
              id="year"
              maxLength={2}
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="YY"
              className={errors.year && touched.year ? "input-error" : ""}
            />
            {errors.year && touched.year && (
              <p className="error">{errors.year}</p>
            )}
          </div>
          <div className="security-details-row">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              maxLength={3}
              value={values.cvc}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. 123"
              className={errors.cvc && touched.cvc ? "input-error" : ""}
            />
            {errors.cvc && touched.cvc && <p className="error">{errors.cvc}</p>}
          </div>
        </div>

        <button disabled={isSubmitting} type="submit" className="confirm-btn">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
