import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  number: yup
    .string()
    .matches(/^\d{16}$/, "Wrong format, numbers only")
    .required("Card number is required"),
  month: yup
    .string()
    .max(2)
    .matches(/^\d{2}$/, "Must be 1-12")
    .required("Can't be blank"),
  year: yup
    .string()
    .max(2)
    .matches(/^\d{2}$/, "Must be two digits")
    .required("Can't be blank"),
  cvc: yup
    .string()
    .min(3)
    .matches(/^\d{3}$/, "Invalid CVC")
    .required("Can't be blank"),
});
