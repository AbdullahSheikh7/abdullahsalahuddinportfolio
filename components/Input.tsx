import { ChangeEvent, ChangeEventHandler } from "react";
import "@/scss/input.scss"

const Input = ({
  onChange,
  type,
  value,
  disabled,
  required,
  placeholder,
  name,
  error,
}: {
  onChange: ChangeEventHandler,
  type: string,
  value: string,
  disabled: boolean,
  required: boolean,
  placeholder: string,
  name: string,
  error?: string,
}) => {
  const changeHandler = (e:ChangeEvent) => {
    onChange(e)
  }

  return (
    <>
      <div
        className={`input-text ${value.length !== 0 ? "filled" : ""}`}
      >
        <input
          required={required}
          type={type}
          name={name}
          disabled={disabled}
          onChange={changeHandler}
          value={value}
        />

        <p className="element placeholder">{placeholder}</p>

        <p className={`element error ${error && "visible"}`}>{error}</p>
      </div>
    </>
  );
};

export default Input
