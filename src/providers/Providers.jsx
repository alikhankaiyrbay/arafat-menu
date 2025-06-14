import { Cart_Provider } from "../context/Cart_Context";
import { Products_Provider } from "../context/Products_Context";
import  Sidebar_Provider  from "../context/Sidebar-Context";
import { Vacancies_Provider } from "../context/Vacancies_Context";
import { Contacts_Provider } from "../context/Contacts_Context";

const Build_Provider_Tree = (providers) =>
  providers.reduceRight(
    (Acc_Provider, Current_Provider) =>
      ({ children }) =>
        (
          <Current_Provider>
            <Acc_Provider>{children}</Acc_Provider>
          </Current_Provider>
        ),
    ({ children }) => <>{children}</>
  );

const Providers = Build_Provider_Tree([
  Cart_Provider,
  Products_Provider,
  Sidebar_Provider,
  Vacancies_Provider,
  Contacts_Provider,
]);

export default Providers;