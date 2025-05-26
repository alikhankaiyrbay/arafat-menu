import "./Silence-Card.css";

import format_price from "../../../../utils/format_price";

import { use_cart } from "../../../../context/Cart_Context";

const Silence_Card = ({ short }) => {
  const { get_product_quantity } = use_cart();

  return (
    <>
      <div className="silence-card" key={short.slug}>
        <div className="se-c-streak">
          <div className="se-c-name">{short.name}</div>
          <div className="se-c-quantity">
            Кол-ва: {get_product_quantity(short.slug)}
          </div>
        </div>
        <div className="se-c-streak">
          <div className="se-c-price">{format_price(short.price)}</div>
          {get_product_quantity(short.slug) > 1 && (
            <div className="se-c-total-price">
              {format_price(short.price * get_product_quantity(short.slug))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Silence_Card;