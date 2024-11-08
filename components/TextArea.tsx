import { ChangeEvent, ChangeEventHandler } from "react";
import "@/scss/input.scss"

const TextArea = ({
  onChange,
  rows,
  cols,
  value,
  disabled,
  required,
  placeholder,
  name,
}: {
  onChange: ChangeEventHandler,
  rows?: number,
  cols?: number,
  value: string,
  disabled: boolean,
  required: boolean,
  placeholder: string,
  name: string,
}) => {
  const changeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e)
  }

  return (
    <>
      <div
        className={`input-text ${value.length !== 0 ? "filled" : ""}`}
      >
        <textarea
          rows={rows}
          cols={cols}
          required={required}
          disabled={disabled}
          name={name}
          onChange={changeHandler}
          value={value}
        />

        <p className="element placeholder">{placeholder}</p>
      </div>
    </>
  );
};

export default TextArea
