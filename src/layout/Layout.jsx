import "./Layout.css";

import { Outlet } from "react-router";

import Sidebar from "../components/ui/sidebar/Sidebar";

import Header from "../components/ui/header/Header";
import Stamp from "../components/ui/stamp/Stamp";
import Rise from "../components/ui/rise/Rise";

import { use_sidebar } from "../context/Sidebar-Context";

const Layout = () => {
  const { shift, close_sidebar_if_open } = use_sidebar();

  return (
    <>
      <Sidebar />
      <div
        className={`layout ${shift ? "layout-limit" : ""}`}
        onClick={close_sidebar_if_open}
      >
        <Header />
        <Outlet />
        <Stamp />
        <Rise />
      </div>
    </>
  );
};

export default Layout;