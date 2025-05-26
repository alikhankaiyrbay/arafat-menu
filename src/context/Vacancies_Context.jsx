import vacancies from "../assets/vacancies";

import { createContext, useContext } from "react";

const Vacancies_Context = createContext();

export const use_vacancies = () => useContext(Vacancies_Context);

export const Vacancies_Provider = ({ children }) => {
  return (
    <Vacancies_Context.Provider value={vacancies}>
      {children}
    </Vacancies_Context.Provider>
  );
};