import { ChangeEvent } from "react";

type Props = {
  placeholder: string;
  label: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <div className="form-floating w-100">
      <input
        onChange={props.onChange}
        value={props.value}
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder={props.placeholder}
      />
      <label htmlFor="floatingInput">{props.label}</label>
    </div>
  );
};

export default Input;
