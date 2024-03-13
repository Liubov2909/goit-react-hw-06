import css from "./SearchBox.module.css";

const SearchBox = ({ onSearchChange, value }) => {
  return (
    <div className={css.div}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search"
        />
      </label>
    </div>
  );
};

export default SearchBox;
