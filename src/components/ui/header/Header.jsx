import "./Header.css";

import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";

import { useNavigate } from "react-router";

import { use_sidebar } from "../../../context/Sidebar_Context";

const Header = () => {
  const navigate = useNavigate();
  const { open_sidebar } = use_sidebar();
  return (
    <>
      <div className="header">
        <IoMenuOutline className="header-icon" onClick={open_sidebar} />
        <div className="header-logo">Arafat</div>
        <IoSearchOutline
          className="header-icon"
          onClick={() => navigate("search")}
        />
      </div>
    </>
  );
};

export default Header;