import { createBrowserRouter } from "react-router";

import App from "../app/App";

import Layout from "../layout/Layout";

import Menu from "../pages/menu/Menu";
import Cart from "../pages/cart/Cart";
import Receipt from "../pages/receipt/Receipt";
import Contacts from "../pages/contacts/Contacts";
import Vacancies from "../pages/vacancies/Vacancies";
import Reviews from "../pages/reviews/Reviews";
import Product from "../pages/product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Menu />,
          },
          {
            path: "menu",
            element: <Menu />,
          },
          {
            path: "menu/:category",
            element: <Menu />,
          },
          {
            path: "menu/:category/:sub_category",
            element: <Menu />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "receipt",
            element: <Receipt />,
          },
          {
            path: "contacts",
            element: <Contacts />,
          },
          {
            path: "vacancies",
            element: <Vacancies />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ],
      },
    ],
  },
  {
    path: "/menu/:category/:sub_category/:product",
    element: <Product />,
  },
  {
    path: "/cart/:category/:sub_category/:product",
    element: <Product />,
  },
]);

export default router;