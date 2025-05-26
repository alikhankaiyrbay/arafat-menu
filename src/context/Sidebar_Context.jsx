import { createContext, useContext, useState } from "react";

const Sidebar_Context = createContext();

export const use_sidebar = () => useContext(Sidebar_Context);

export const Sidebar_Provider = ({ children }) => {
  const [master_sidebar, set_master_sidebar] = useState(false);

  const open_sidebar = () => {
    set_master_sidebar((previous) => !previous);
  };

  const close_sidebar = () => {
    set_master_sidebar(false);
  };

  const handle_layout_click = (e) => {
    if (master_sidebar && !e.target.closest(".sidebar")) {
      close_sidebar();
    }
  };

  return (
    <Sidebar_Context.Provider
      value={{
        master_sidebar,
        open_sidebar,
        close_sidebar,
        handle_layout_click,
      }}
    >
      {children}
    </Sidebar_Context.Provider>
  );
};