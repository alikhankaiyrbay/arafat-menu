import "./Horizontal-Card.css";

import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

import { useParams, useNavigate } from "react-router";

import { use_cart } from "../../../../context/Cart_Context";

import format_price from "../../../../utils/format_price";

const Horizontal_Card = ({ short }) => {
  const { category, sub_category } = useParams();
  const navigate = useNavigate();
  const { add_to_cart, decrease_quantity, get_product_quantity } = use_cart();

  return (
    <div className="horizontal-card" key={short.slug}>
      <div
        className="hl-c-image"
        onClick={() =>
          navigate(`/menu/${category}/${sub_category}/${short.slug}`)
        }
      ></div>
      <div className="hl-c-data">
        <div className="hl-c-name">{short.name}</div>
        <div className="hl-c-description">{short.description}</div>
        <div className="hl-c-expenses">
          <div className="hl-c-price">{format_price(short.price)}</div>
          {get_product_quantity(short.slug) > 0 ? (
            <div className="hl-c-define">
              <IoRemoveOutline
                className="hl-c-define-icon"
                onClick={() => decrease_quantity(short.slug)}
              />
              <div className="hl-c-quantity">
                {get_product_quantity(short.slug)}
              </div>
              <IoAddOutline
                className="hl-c-define-icon"
                onClick={() => add_to_cart(short)}
              />
            </div>
          ) : (
            <IoAddOutline
              className="hl-c-define-icon"
              onClick={() => add_to_cart(short)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Horizontal_Card;