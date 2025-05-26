import "./Header.css";

import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";

import { use_sidebar } from "../../../context/Sidebar_Context";

const Header = () => {
  const { open_sidebar } = use_sidebar();
  return (
    <>
      <div className="header">
        <IoMenuOutline className="header-icon" onClick={open_sidebar} />
        <div className="header-logo">727</div>
        <IoSearchOutline className="header-icon" />
      </div>
    </>
  );
};

export default Header;