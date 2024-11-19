import React from "react";
import StyleInput from "./Input.module.css"

const Input = ({ type, id, name, place }) => {
  return (
    <div>
      <input className={StyleInput.start} type={type} id={id} name={name} placeholder={place} />
    </div>
  );
};

export default Input;
