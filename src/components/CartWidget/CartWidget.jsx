import cartIcon from "../../assets/cart.svg"

const CartWidget = ({amountItems}) => {
  return (
    <>
      <div className="wrapper me-2 mt-1 cart">
        <a className="text-decoration-none" href="#">
          <span id="cantidadProductos" className="cart-badge text-black">
            0
          </span>
          <img style={{ width: 30 }} src={cartIcon} />
        </a>
      </div>
    </>
  );
};

export default CartWidget;
