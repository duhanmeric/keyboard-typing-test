import { PropsWithChildren } from "react";

const Cart = ({ children }: PropsWithChildren) => {
  return (
    <div className="card">
      <div className="card-body card-content">{children}</div>
    </div>
  );
};

export default Cart;
