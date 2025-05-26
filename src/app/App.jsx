import "./App.css";

import Sidebar from "../components/ui/sidebar/Sidebar";
import { Outlet } from "react-router";

import { use_sidebar } from "../context/Sidebar_Context";

const App = () => {
  const { master_sidebar, handle_layout_click } = use_sidebar();

  return (
    <>
      <div
        className={`app ${master_sidebar ? "app-translate" : ""}`}
        onClick={handle_layout_click}
      >
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default App;