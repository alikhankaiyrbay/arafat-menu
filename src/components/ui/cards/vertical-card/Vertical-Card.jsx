import "./Vertical-Card.css";

import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

import { useParams, useNavigate } from "react-router";

import { use_cart } from "../../../../context/Cart_Context";

import format_price from "../../../../utils/format_price";

const Vertical_Card = ({ short }) => {
  const { category, sub_category } = useParams();
  const navigate = useNavigate();
  const { add_to_cart, decrease_quantity, get_product_quantity } = use_cart();
  return (
    <>
      <div className="vertical-card" key={short.slug}>
        <div className="vl-c-chassis">
          <img
            className="vl-c-image"
            src={`public/${short.image}`}
            onClick={() =>
              navigate(`/menu/${category}/${sub_category}/${short.slug}`)
            }
          />
        </div>
        <div className="vl-c-data">
          <div className="vl-c-name">{short.name}</div>
          <div className="vl-c-description">{short.description}</div>
          <div className="vl-c-expenses">
            <div className="vl-c-price">{format_price(short.price)}</div>
            {get_product_quantity(short.slug) > 0 ? (
              <div className="vl-c-define">
                <IoRemoveOutline
                  className="vl-c-define-icon"
                  onClick={() => decrease_quantity(short.slug)}
                />
                <div className="vl-c-quantity">
                  {get_product_quantity(short.slug)}
                </div>
                <IoAddOutline
                  className="vl-c-define-icon"
                  onClick={() => add_to_cart(short)}
                />
              </div>
            ) : (
              <IoAddOutline
                className="vl-c-define-icon"
                onClick={() => add_to_cart(short)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vertical_Card;