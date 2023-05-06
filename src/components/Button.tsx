import React from "react";

type Props = {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
};

const Button = (props: Props) => {
  return (
    <button
      disabled={props.isDisabled}
      onClick={props.onClick}
      type="button"
      className="w-100 btn btn-primary"
    >
      {props.title}
    </button>
  );
};

export default Button;
