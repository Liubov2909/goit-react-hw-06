import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()

      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()

      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.label}>Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" as="span" className="css.error" />
        </div>
        <div className={css.container}>
          {" "}
          <label className={css.label}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="000-00-00"
          />
          <ErrorMessage name="number" as="span" className="css.error" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

// function FormInput({ id, type, name, pattern, placeholder }) {
//   return (
//     <div className={css.container}>
//       <label htmlFor={id} className={css.label}>
//         {""}
//       </label>
//       <Field
//         className={css.input}
//         type={type}
//         name={name}
//         id={id}
//         pattern={pattern}
//         placeholder={placeholder}
//       />
//       <span className={css.error}>
//         <ErrorMessage name={name} as="span" />
//       </span>
//     </div>
//   );
// }
