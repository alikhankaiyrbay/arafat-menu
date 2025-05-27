import "./Menu.css";
import { LuLayoutList, LuLayoutGrid } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Horizontal_Card from "../../components/ui/cards/horizontal-card/Horizontal-Card";
import Vertical_Card from "../../components/ui/cards/vertical-card/Vertical-Card";
import { use_products } from "../../context/Products_Context";
import { use_cart } from "../../context/Cart_Context";
import format_price from "../../utils/format_price";

const Menu = () => {
  const [menu_view, set_menu_view] = useState(() => {
    return localStorage.getItem("menu_view") || "horizontal";
  });

  useEffect(() => {
    localStorage.setItem("menu_view", menu_view);
  }, [menu_view]);

  const { category, sub_category } = useParams();
  const navigate = useNavigate();
  const products = use_products();
  const { get_total_price } = use_cart();

  const first_category = products.categories[0];
  const first_sub_category = first_category?.sub_categories[0];

  useEffect(() => {
    if (!category || !sub_category) {
      navigate(`/menu/${first_category?.slug}/${first_sub_category?.slug}`, {
        replace: true,
      });
    }
  }, [category, sub_category, first_category, first_sub_category, navigate]);

  const current_category = products.categories.find((c) => c.slug === category);
  const current_sub_categories = current_category?.sub_categories || [];

  const crossline =
    current_sub_categories.find((s) => s.slug === sub_category)?.line || [];

  return (
    <>
      <div className="menu">
        <div className="menu-categories">
          {products.categories.map((line) => (
            <div
              key={line.slug}
              className={`menu-category ${
                line.slug === category ? "active-menu-category" : ""
              }`}
              onClick={() =>
                navigate(`/menu/${line.slug}/${line.sub_categories[0]?.slug}`)
              }
            >
              {line.name}
            </div>
          ))}
        </div>

        <div className="menu-sub-categories">
          {current_sub_categories.map((line) => (
            <div
              key={line.slug}
              className={`menu-sub-category ${
                line.slug === sub_category ? "active-menu-sub-category" : ""
              }`}
              onClick={() => navigate(`/menu/${category}/${line.slug}`)}
            >
              {line.name}
            </div>
          ))}
        </div>

        <div className="menu-views">
          <LuLayoutList
            className="menu-view-icon"
            onClick={() => set_menu_view("horizontal")}
          />
          <LuLayoutGrid
            className="menu-view-icon"
            onClick={() => set_menu_view("vertical")}
          />
        </div>

        <div className="menu-repository">
          {menu_view === "vertical" && (
            <div className="vertical-cards">
              {crossline.map((line) => (
                <Vertical_Card short={line} key={line.slug} />
              ))}
            </div>
          )}

          {menu_view === "horizontal" && (
            <div className="horizontal-cards">
              {crossline.map((line, i) => (
                <React.Fragment key={line.slug}>
                  <Horizontal_Card short={line} />
                  {i < crossline.length - 1 && <div className="between-line" />}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        <div
          className={`menu-navigate-cart ${
            get_total_price() > 0 ? "active-menu-navigate-cart" : ""
          }`}
          onClick={() => navigate("/cart")}
        >
          {format_price(get_total_price())}
        </div>
      </div>
    </>
  );
};

export default Menu;