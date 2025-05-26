import "./Receipt.css";

import React from "react";

import { useNavigate } from "react-router";

import Silence_Card from "../../components/ui/cards/silence-card/Silence-Card";

import { use_cart } from "../../context/Cart_Context";

import format_price from "../../utils/format_price";

const Receipt = () => {
  const { cart, get_total_price } = use_cart();
  const navigate = useNavigate();

  return (
    <>
      <div className="receipt">
        {cart.length === 0 ? (
          <div className="receipt-notice" onClick={() => navigate("/menu")}>
            <div>Чек пустой</div>
            <div>Перейти в Меню</div>
          </div>
        ) : (
          <>
            <div className="receipt-label">
              <div>Общая сумма: {format_price(get_total_price())}</div>
              <div>Сервис 5%: {format_price(get_total_price() * 0.05)}</div>
              <div>
                К оплате:{" "}
                {format_price(get_total_price() + get_total_price() * 0.05)}
              </div>
            </div>
            <div className="receipt-repository">
              <div className="silence-cards">
                {cart.map((line, i) => (
                  <React.Fragment key={line.slug}>
                    <Silence_Card short={line} />
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

export default Receipt;