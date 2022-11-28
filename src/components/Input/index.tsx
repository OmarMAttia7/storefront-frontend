import React, { useEffect, useState } from "react";
import "./index.css";

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  validate: Function;
};

function Input(props: Props) {
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  useEffect(() => {
    props.validate(props.name, value);
  }, [value]);

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
