import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useId } from "react";

export default function SearchBox() {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div className={css.div}>
      <label htmlFor={searchId} className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={search}
        id={searchId}
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
}

// const SearchBox = ({ onSearchChange, value }) => {
//   return (
//     <div className={css.div}>
//       <label className={css.label}>
//         Find contacts by name
//         <input
//           className={css.input}
//           type="text"
//           value={value}
//           onChange={(e) => onSearchChange(e.target.value)}
//           placeholder="Search"
//         />
//       </label>
//     </div>
//   );
// };

// export default SearchBox;
