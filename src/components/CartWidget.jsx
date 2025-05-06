import { ShoppingCart } from "lucide-react";

const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ShoppingCart />
      <span style={{ marginLeft: "5px" }}></span>
    </div>
  );
};

export default CartWidget;
