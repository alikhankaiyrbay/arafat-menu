import "./Header.css";

import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";

import { useNavigate } from "react-router";

import { use_sidebar } from "../../../context/Sidebar-Context";

const Header = () => {
  const navigate = useNavigate();
  const { affect_sidebar } = use_sidebar();
  return (
    <>
      <div className="header">
        <IoMenuOutline className="header-icon" onClick={affect_sidebar} />
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