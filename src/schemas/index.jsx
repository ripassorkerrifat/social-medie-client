import * as Yup from "yup";

export const resistationSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name."),
  email: Yup.string().email().required("Please enter your email."),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 6 chars minimum.")
    .max(16, "Password is too long - should be 16 chars maximum."),
  confirmPassword: Yup.string()
    .required("No password provided.")
    .oneOf([Yup.ref("password"), null], "Password must be match."),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email."),
  password: Yup.string()
    .min(6, "Password is too short - should be 6 chars minimum.")
    .required("No password provided."),
});
