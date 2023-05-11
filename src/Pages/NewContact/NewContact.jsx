import "./NewContact.css";
// valid
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
const NewContact = () => {
  const initialValues = {
    id: uuidv4(),
    name: "",
    phone: "",
    email: "",
    avatar: "",
    gender: "",
    status: "",
    favorite: "",
  };
//   ?Валідація Япі
//   ?Валідація Япі
//   ?Валідація Япі
//   ?Валідація Япі

  const validationSchema = Yup.object().shape({
name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Name should only contain latin/letters")
      .required("Name is required"),
    // phone: Yup.number().required("Phone is required"),
     phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number example 0963311223") 
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
      .oneOf(["Work", "Family", "Private", "Friends"], "Invalid status")
      .required("Status is required"),
    favorite: Yup.boolean(),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  function validateEmail(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
     error = 'Invalid email address';
   }
   return error;
 }
//  П е р е в ы р к а
  const handleAvatarChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    setFieldValue("avatar", file); // Зберігаємо об'єкт File в полі "avatar"
  };
    const renderSelectedFile = (values) => {
    if (values.avatar) {
      return <div>Selected file: {values.avatar.name}</div>;
    }
    return <div>No file selected</div>;
  };
//   !Початок блоку відображення
//   !Початок блоку відображення
//   !Початок блоку відображення
//   !Початок блоку відображення
  return (
    <div className="d-flex align-items-center justify-content-center">
 <div className="d-flex align-items-center bg-light mt-2 rounded  flex-column width_form ">
      <h1 className="my-5"> Add new contact</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        
        {({ isSubmitting, errors, touched,setFieldValue, values }) => (
          <Form className=" shadow-lg p-3 mb-5 rounded width_form_container">
            {/* Name */}
            <div className="d-flex bg-light rounded flex-column my-margin position-relative">
              <label htmlFor="name" className="mb-1 padding-label">Name</label>
              <Field type="text" name="name" className="p-2"/>
             
               <ErrorMessage name="name">
                {
                    (errorMsg)=><div className="position-absolute center_pos error-message text-danger">{errorMsg}</div>
                }
              </ErrorMessage>
            </div>
            
            {/* Phone */}
             <div className="d-flex bg-light rounded flex-column my-margin position-relative">
              <label htmlFor="phone" className="mb-1 padding-label">Phone</label>
              <Field type="text" name="phone" className="p-2"/>
               <ErrorMessage name="phone">
                {
                    (errorMsg)=><div className="position-absolute center_pos error-message text-danger">{errorMsg}</div>
                }
              </ErrorMessage>
             
            </div>
            {/* Email */}
            <div className="d-flex bg-light rounded flex-column my-margin position-relative">
              <label htmlFor="email" className="mb-1 padding-label">Email</label>
              {/* <Field type="text" name="email" /> */}
             
            <Field name="email" validate={validateEmail} className="p-2"/>
           {errors.email && touched.email && <div className="position-absolute center_pos error-message text-danger">{errors.email}</div>}
              {/* <ErrorMessage name="email">
                {
                    (errorMsg)=><div className="position-absolute center_pos error-message text-danger">{errorMsg}</div>
                }
              </ErrorMessage> */}
            </div>
            {/* Avatar */}
        <div className="d-flex bg-light rounded flex-column my-margin position-relative">
            <label htmlFor="avatar" className="mb-1 padding-label">Avatar</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Select an image"
                aria-describedby="avatar-input"
                value={values.avatar ? values.avatar.name : ""}
                readOnly
              />
              <input
                type="file"
                name="avatar"
                accept=".jpg, .jpeg"
                onChange={(event) => handleAvatarChange(event, setFieldValue)}
                className="d-none"
                id="avatar-input"
              />
              <label className="input-group-text" htmlFor="avatar-input">
                Browse
              </label>
            </div>
            <ErrorMessage name="avatar">
              {(errorMsg) => (
                <div className="position-absolute center_pos error-message text-danger">{errorMsg}</div>
              )}
            </ErrorMessage>
            {renderSelectedFile(values)}
          </div>
            {/* Gender */}
            <div className="d-flex bg-light rounded flex-column my-margin position-relative">
              <label htmlFor="gender" className="mb-1 padding-label">Gender</label>
              <Field as="select" name="gender"className="p-2">
                <option value="">Choose gender</option>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
              </Field>
             
              <ErrorMessage name="gender">
                {
                    (errorMsg)=><div className="position-absolute center_pos error-message text-danger">{errorMsg}</div>
                }
              </ErrorMessage>
            </div>
            {/* Status */}
            <div className="d-flex bg-light rounded flex-column my-margin position-relative">
              <label htmlFor="status" className="mb-1 padding-label">Status</label>
              <Field as="select" name="status"className="p-2">
                <option value="">Choose Status</option>
                <option value="Work">Work</option>
                <option value="Family">Family</option>
                <option value="Private">Private</option>
                <option value="Friends">Friends</option>
              </Field>
              <ErrorMessage name="status">
                {
                    (errorMsg)=><div className="position-absolute center_pos error-message text-danger">{errorMsg}</div>
                }
              </ErrorMessage>
            </div>
            {/* Favorite */}
            <div className="d-flex justify-content-center align-items-center gap-3 mb-1">
              <label htmlFor="favorite" className=" padding-label ">Favorite</label>
              <Field type="checkbox" name="favorite" />
            </div>
            {/* button */}
            <button
           
              type="submit"
              className="btn btn-outline-info w-100 my-2"
              disabled={isSubmitting}
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
   
  );
};
export default NewContact;
