import { useState } from "react";
import validatorList from "../../SignUpPage/validatorList";
import Input from "../Input";
import "./index.css";

type InputInfo = [string, string, string];

function Form(props: {
  inputList: InputInfo[];
  validatorList: Object;
  submitTitle: string;
  formAction: Function;
  onSuccessChildren: JSX.Element
}): JSX.Element {
  const [validationState, setValidationState] = useState<Set<string>>(
    new Set()
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValues, setInputValues] = useState(() => {
    const initialValues: { [key: string]: string } = {};
    props.inputList.forEach((input) => {
      initialValues[input[0]] = "";
    });
    return initialValues;
  });
  const [successState, setSuccessState] = useState(false);

  function alterValidationState(
    type: "add" | "delete",
    inputName: string
  ): void {
    const newState = new Set(validationState);
    if (type === "add") newState.add(inputName);
    else if (type === "delete") newState.delete(inputName);
    setValidationState(newState);
  }

  function alterInputValues(inputName: string, value: string) {
    const newValues = Object.create(inputValues);
    newValues[inputName] = value;
    setInputValues(newValues);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (validationState.size === props.inputList.length) {
      props.formAction(inputValues).then((response: Response) => {
        if(response.status === 200) {
          setSuccessState(true);
        }else{
          setErrorMessage("This email already exists");
        }
      });
    } else {
      setErrorMessage("Please fill out all required forms correctly.");
    }
  }

  function validate(inputName: string, value: string) {
    const validator = validatorList[inputName];
    const result = validator(value);

    if (result.success && !validationState.has(inputName)) {
      alterValidationState("add", inputName);
      setErrorMessage("");
    } else if (!result.success) {
      const error = JSON.parse(result.error.toString())[0].message;
      alterValidationState("delete", inputName);
      setErrorMessage(error);
    }

    alterInputValues(inputName, value);
  }

  return !successState ? (
    <form className="form" onSubmit={handleSubmit}>
      {props.inputList.map((input) => {
        return (
          <Input
            name={input[0]}
            key={input[0]}
            validate={validate}
            label={input[1]}
            type={input[2]}
          />
        );
      })}
      <p>{errorMessage}</p>
      <input className="form-submit" type="submit" value={props.submitTitle} />
    </form>
  ) : (
    <div>
      {props.onSuccessChildren}
    </div>
  );
}

export default Form;
export type { InputInfo };
