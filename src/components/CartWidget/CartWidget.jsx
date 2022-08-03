import cartIcon from "../../assets/cart.svg";
import React, { useContext } from 'react';
import { GContext } from '../Cart/CartContext';

const CartWidget = ({ styles }) => {
  const { cartItems } = useContext(GContext);

  return (
    (
      <>
        {cartItems.length === 0 ? (
          <></>
        ) : (
          <div className={styles}>
           <a className="text-decoration-none" href="/cart">
             <img style={{ width: 30 }} src={cartIcon} />
           </a>
           </div>
        )}
      </>
    )
  )
};

export default CartWidget;
