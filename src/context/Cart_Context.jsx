import { createContext, useContext, useState, useEffect } from "react";

const Cart_Context = createContext();

export const use_cart = () => useContext(Cart_Context);

export const Cart_Provider = ({ children }) => {
  const [cart, set_cart] = useState(() => {
    const sorted_cart = localStorage.getItem("cart");
    return sorted_cart ? JSON.parse(sorted_cart) : [];
  });

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const add_to_cart = (product) => {
    set_cart((previous_cart) =>
      previous_cart.some((line) => line.slug === product.slug)
        ? previous_cart.map((line) =>
            line.slug === product.slug
              ? { ...line, quantity: line.quantity + 1 }
              : line
          )
        : [...previous_cart, { ...product, quantity: 1 }]
    );
  };

  const decrease_quantity = (product_slug) => {
    set_cart((previous_cart) =>
      previous_cart.reduce((store, line) => {
        if (line.slug === product_slug) {
          if (line.quantity > 1) {
            store.push({ ...line, quantity: line.quantity - 1 });
          }
        } else {
          store.push(line);
        }
        return store;
      }, [])
    );
  };

  const get_product_quantity = (product_slug) =>
    cart.find((line) => line.slug === product_slug)?.quantity || 0;

  const get_total_price = () =>
    cart.reduce(
      (total, line) => total + (Number(line.price) || 0) * line.quantity,
      0
    );

  const remove_from_cart = (product_slug) => {
    set_cart((previous_cart) =>
      previous_cart.filter((line) => line.slug !== product_slug)
    );
  };

  const clear_cart = () => {
    requestAnimationFrame(() => {
      set_cart([]);
    });
  };

  return (
    <Cart_Context.Provider
      value={{
        cart,
        add_to_cart,
        clear_cart,
        decrease_quantity,
        get_product_quantity,
        get_total_price,
        remove_from_cart,
      }}
    >
      {children}
    </Cart_Context.Provider>
  );
};