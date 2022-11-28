import React, { useState } from "react";
import "./index.css";

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  validator?: Function;
};

function Input(props: Props) {

  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;
