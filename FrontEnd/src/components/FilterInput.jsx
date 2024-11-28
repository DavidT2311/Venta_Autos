//Styles
import filterinputModule from "./FilterInput.Module.css";

const FilterInput = ({ title, type, name, reference, action }) => {
  return (
    <article className={filterinputModule.container}>
      <label htmlFor={name} className={filterinputModule.label}>
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={title}
        className={filterinputModule.input}
        ref={reference}
        onChange={action}
      />
    </article>
  );
};

export default FilterInput;
