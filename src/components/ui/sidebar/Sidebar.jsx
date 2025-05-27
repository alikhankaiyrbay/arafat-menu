import "./Sidebar.css";

import {
  IoBookOutline,
  IoCartOutline,
  IoPeopleOutline,
  IoMapOutline,
  IoChatbubbleEllipsesOutline,
  IoReaderOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

import { Link } from "react-router";

import { use_sidebar } from "../../../context/Sidebar_Context";

const sidebar_transitions = [
  {
    label: "Меню",
    icon: <IoBookOutline className="sidebar-path-icon" />,
    path: "/menu",
  },
  {
    label: "Корзина",
    icon: <IoCartOutline className="sidebar-path-icon" />,
    path: "/cart",
  },
  {
    label: "Бланк",
    icon: <IoReaderOutline className="sidebar-path-icon" />,
    path: "/receipt",
  },
  {
    label: "Контакты",
    icon: <IoMapOutline className="sidebar-path-icon" />,
    path: "/contacts",
  },
  // {
  //   label: "Вакансии",
  //   icon: <IoPeopleOutline className="sidebar-path-icon" />,
  //   path: "/vacancies",
  // },
  // {
  //   label: "Отзывы",
  //   icon: <IoChatbubbleEllipsesOutline className="sidebar-path-icon" />,
  //   path: "/reviews",
  // },
];

const Sidebar = () => {
  const { close_sidebar } = use_sidebar();
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-label">Arafat</div>
        <div className="sidebar-repository">
          {sidebar_transitions.map((line) => (
            <Link
              className="sidebar-path"
              onClick={close_sidebar}
              to={line.path}
              key={line.path}
            >
              {line.icon} <div>{line.label}</div>
            </Link>
          ))}
        </div>
        <div className="sidebar-path" onClick={close_sidebar}>
          <IoCloseCircleOutline className="sidebar-path-icon" />
          <div>Закрыть</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;