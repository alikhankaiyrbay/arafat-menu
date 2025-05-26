import "./Layout.css";

import Header from "../components/ui/header/Header";
import { Outlet } from "react-router";
import Stamp from "../components/ui/stamp/Stamp";

import { use_sidebar } from "../context/Sidebar_Context";

const Layout = () => {
  const { master_sidebar } = use_sidebar();

  return (
    <>
      <div className={`layout ${master_sidebar ? "layout-limit" : ""}`}>
        <Header />
        <Outlet />
        <Stamp />
      </div>
    </>
  );
};

export default Layout;