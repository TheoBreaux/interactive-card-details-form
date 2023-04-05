import React from "react";
import { useFormik } from "formik";
import "./Form.css";
import { validationSchema } from "./schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Form = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
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
          placeholder="e.g. Jane Appleseed"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}

        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          id="number"
          maxLength={16}
          value={values.number}
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.number && touched.number ? "input-error" : ""}
        />
        {errors.number && touched.number && (
          <p className="error">{errors.number}</p>
        )}

        <div className="security-details">
          <div className="security-details-row">
            <label htmlFor="expmonth">EXP. DATE</label>
            <input
              type="text"
              id="month"
              maxLength={2}
              value={values.month}
              placeholder="MM"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.month && touched.month ? "input-error" : ""}
            />
            {errors.month && touched.month && (
              <p className="error">{errors.month}</p>
            )}
          </div>

          <div className="security-details-row">
            <label htmlFor="expyear">(MM/YY)</label>
            <input
              type="text"
              id="year"
              maxLength={2}
              value={values.year}
              placeholder="YY"
              onChange={handleChange}
              onBlur={handleBlur}
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
              placeholder="e.g. 123"
              onChange={handleChange}
              onBlur={handleBlur}
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
