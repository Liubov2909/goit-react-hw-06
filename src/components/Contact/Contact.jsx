import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <div className={css.container}>
      <ul className={css.text}>
        <li className={css.list}>
          <FaUser height={10} width={10} />
          {name}
        </li>
        <li className={css.list}>
          <FaPhone height={10} width={10} />
          {number}
        </li>
      </ul>
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
