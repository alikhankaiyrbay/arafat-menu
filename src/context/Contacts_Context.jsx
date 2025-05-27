import contacts from "../assets/contacts";

import { createContext, useContext } from "react";

const Contacts_Context = createContext();

export const use_contacts = () => useContext(Contacts_Context);

export const Contacts_Provider = ({ children }) => {
  return (
    <Contacts_Context.Provider value={contacts}>
      {children}
    </Contacts_Context.Provider>
  );
};