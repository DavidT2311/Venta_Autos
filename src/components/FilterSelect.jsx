//Styles
import filterselectModule from "./FilterSelect.module.css";

const FilterSelect = ({ title, name, options, reference, action }) => {
  return (
    <article className={filterselectModule.container}>
      <label htmlFor={name} className={filterselectModule.label}>
        {title}
      </label>
      <select
        name={name}
        id={name}
        className={filterselectModule.select}
        ref={reference}
        onChange={action}
      >
        <option value={0}>{title}</option>
        {options.map((item) => (
          <option key={item} className={filterselectModule.option} value={item}>
            {item}
          </option>
        ))}
      </select>
    </article>
  );
};

export default FilterSelect;
