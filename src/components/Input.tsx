type Props = {
  placeholder: string;
  label: string;
};

const Input = (props: Props) => {
  return (
    <div className="form-floating w-100">
      <input
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
