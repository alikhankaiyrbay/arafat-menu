import "./Correctional-Card.css";

import { IoAddOutline, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";

import { use_cart } from "../../../../context/Cart_Context";

import format_price from "../../../../utils/format_price";

const Correctional_Card = ({ short }) => {
  const {
    add_to_cart,
    decrease_quantity,
    get_product_quantity,
    remove_from_cart,
  } = use_cart();

  return (
    <>
      <div className="correctional-card" key={short.slug}>
        <div className="cl-c-chassis">
          <img className="cl-c-image" src={`/${short.image}`} />
        </div>
        <div className="cl-c-data">
          <div className="cl-c-streak">
            <div className="cl-c-name">{short.name}</div>
            <IoTrashOutline
              className="cl-c-remove-icon"
              onClick={() => {
                if (confirm("Подтвердите удаление товара из корзины")) {
                  remove_from_cart(short.slug);
                }
              }}
            />
          </div>
          <div className="cl-c-price">{format_price(short.price)}</div>
          <div className="cl-c-expenses">
            <div className="cl-c-total-price">
              {format_price(short.price * get_product_quantity(short.slug))}
            </div>
            <div className="cl-c-define">
              <IoRemoveOutline
                className="cl-c-define-icon"
                onClick={() => decrease_quantity(short.slug)}
              />
              <div className="cl-c-quantity">
                {get_product_quantity(short.slug)}
              </div>
              <IoAddOutline
                className="cl-c-define-icon"
                onClick={() => add_to_cart(short)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Correctional_Card;