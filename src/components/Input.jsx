import React from "react";
import InputModule from "./Input.module.css"

const Input = ({ type, id, name, place }) => {
  return (
    <div>
      <input className={InputModule.start} type={type} id={id} name={name} placeholder={place} />
    </div>
  );
};

export default Input;
