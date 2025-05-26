import products from "../assets/products";

import { createContext, useContext } from "react";

const Products_Context = createContext();

export const use_products = () => useContext(Products_Context);

export const Products_Provider = ({ children }) => {
  return (
    <Products_Context.Provider value={products}>
      {children}
    </Products_Context.Provider>
  );
};