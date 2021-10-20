import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("A name must be provided")
    .min(3, "Must be at least 3 characters long"),
  password: yup
    .string()
    .required("No passord provided")
    .min(5, "Passwords must be at least 5 characters"),
});
export default formSchema;
