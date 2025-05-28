import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const Sidebar_Context = createContext();

export const use_sidebar = () => useContext(Sidebar_Context);

const Sidebar_Provider = ({ children }) => {
  const [shift, set_shift] = useState(false);

  const affect_sidebar = useCallback(() => {
    set_shift((prev) => !prev);
  }, []);

  const close_sidebar = useCallback(() => {
    set_shift(false);
  }, []);

  const setup_root_click_listener = useCallback(() => {
    const root = document.querySelector(".root");
    if (!root) return;

    const handle_root_click = (e) => {
      if (shift && !e.target.closest(".sidebar-backdrop")) {
        close_sidebar();
      }
    };

    root.addEventListener("click", handle_root_click);

    return () => {
      root.removeEventListener("click", handle_root_click);
    };
  }, [shift, close_sidebar]);

  useEffect(() => {
    const cleanup = setup_root_click_listener();
    return () => {
      if (cleanup) cleanup();
    };
  }, [setup_root_click_listener]);

  useEffect(() => {
    const root = document.querySelector(".root");
    if (!root) return;

    if (shift) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
      root.classList.add("root-shift");
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
      root.classList.remove("root-shift");
    }
  }, [shift]);

  return (
    <Sidebar_Context.Provider
      value={{ shift, set_shift, affect_sidebar, close_sidebar }}
    >
      {children}
    </Sidebar_Context.Provider>
  );
};

export default Sidebar_Provider;