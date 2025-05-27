import "./Cart.css";

import { IoReaderOutline, IoTrashOutline } from "react-icons/io5";

import React from "react";

import { useNavigate } from "react-router";

import Correctional_Card from "../../components/ui/cards/correctional-card/Correctional-Card";

import { use_cart } from "../../context/Cart_Context";

import format_price from "../../utils/format_price";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, get_total_price, clear_cart } = use_cart();
console.log(cart)
  return (
    <>
      <div className="cart">
        {cart.length === 0 ? (
          <div className="cart-notice" onClick={() => navigate("/menu")}>
            <div>Корзина пустая</div>
            <div>Перейти в Меню</div>
          </div>
        ) : (
          <>
            <div className="cart-label">
              <IoReaderOutline
                className="cart-label-icon"
                onClick={() => navigate("/receipt")}
              />
              <div>Общая сумма: {format_price(get_total_price())}</div>
              <IoTrashOutline
                className="cart-label-icon"
                onClick={() => {
                  if (confirm("Подтвердите очистку всей корзины")) {
                    setTimeout(() => clear_cart(), 50);
                  }
                }}
              />
            </div>
            <div className="cart-repository">
              <div className="correctional-cards">
                {cart.map((line, i) => (
                  <React.Fragment key={i}>
                    <Correctional_Card short={line} />
                    {i < cart.length - 1 && <div className="between-line" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
