import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Name should only contain latin/letters")
      .required("Name is required"),
    // phone: Yup.number().required("Phone is required"),
     phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number example 0963311223")
    .transform((value) => (value ? value.replace(/\s/g, "") : value))
    .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
     avatar: Yup.mixed().required("Avatar is required").test("fileFormat", "Invalid file format", (value) => {
      if (!value) return true; // Якщо значення пусте, то тест пройдений
      return value && ["image/jpg", "image/jpeg"].includes(value.type); // Перевірка формату файлу
    }),
    gender: Yup.string()
      .oneOf(["Man", "Woman"], "Invalid gender")
      .required("Gender is required"),
    status: Yup.string()
      .required("Status is required"),
    favorite: Yup.boolean(),
  });
  