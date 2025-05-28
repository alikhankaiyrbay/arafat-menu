import "./Rise.css";

import { IoArrowUpCircle } from "react-icons/io5";

import { useState, useEffect } from "react";

const Rise = () => {
  const [rise_have, set_rise_have] = useState(false);

  useEffect(() => {
    const on_scroll = () => {
      set_rise_have(window.scrollY > 200);
    };

    window.addEventListener("scroll", on_scroll);

    return () => window.removeEventListener("scroll", on_scroll);
  }, []);

  const rise_scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <IoArrowUpCircle
        className={`rise ${rise_have ? "active-rise" : ""}`}
        onClick={rise_scroll}
      />
    </>
  );
};

export default Rise;