import "./Product.css";

import {
  IoAddOutline,
  IoArrowBackOutline,
  IoRemoveOutline,
} from "react-icons/io5";

import { useParams, useNavigate } from "react-router";

import { use_products } from "../../context/Products_Context";
import { use_cart } from "../../context/Cart_Context";

import format_price from "../../utils/format_price";

const Product = () => {
  const { category, sub_category, product } = useParams();
  const navigate = useNavigate();
  const products = use_products();
  const { add_to_cart, decrease_quantity, get_product_quantity } = use_cart();

  const crossline = products.categories
    .find((line) => line.slug === category)
    ?.sub_categories.find((line) => line.slug === sub_category)
    ?.line.find((line) => line.slug === product);

  return (
    <>
      <div className="product">
        <div className="product-frame">
          <img
            className="product-image"
            src={`/public/${crossline.image}`}
            alt={crossline.name}
          />
        </div>
        <div className="product-data">
          <div className="product-streak">
            <div className="product-navigate" onClick={() => navigate(-1)}>
              <IoArrowBackOutline />
              <div>назад</div>
            </div>
            {get_product_quantity(crossline.slug) > 0 ? (
              <div className="product-define">
                <IoRemoveOutline
                  className="product-define-icon"
                  onClick={() => decrease_quantity(crossline.slug)}
                />
                <div className="product-quantity">
                  {get_product_quantity(crossline.slug)}
                </div>
                <IoAddOutline
                  className="product-define-icon"
                  onClick={() => add_to_cart(crossline)}
                />
              </div>
            ) : (
              <IoAddOutline
                className="product-define-icon"
                onClick={() => add_to_cart(crossline)}
              />
            )}
          </div>
          <div className="product-name">{crossline.name}</div>
          <div className="product-price">{format_price(crossline.price)}</div>
          <div className="product-wait">{crossline.wait} мин</div>
          <div className="product-description">{crossline.description}</div>
        </div>
      </div>
    </>
  );
};

export default Product;