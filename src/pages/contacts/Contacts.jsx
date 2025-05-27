import "./Contacts.css";

import { IoMapOutline, IoCallOutline, IoTimeOutline } from "react-icons/io5";

import { use_contacts } from "../../context/Contacts_Context";

const Contacts = () => {
  const { contacts } = use_contacts();

  return (
    <>
      <div className="contacts">
        <div className="contacts-label">Контакты</div>
        <div className="contacts-repository">
          <div className="contact-cards">
            {contacts.map((line) => (
              <div className="contact-card" key={line.slug}>
                <div className="ct-c-branch">{line.branch}</div>
                <div className="ct-c-address ct-c-line">
                  <IoMapOutline className="ct-c-icon" />
                  <div>{line.address}</div>
                </div>
                <div className="ct-c-number ct-c-line">
                  <IoCallOutline className="ct-c-icon" />
                  <div>{line.number}</div>
                </div>
                <div className="ct-c-schedule ct-c-line">
                  <IoTimeOutline className="ct-c-icon" />
                  <div>{line.schedule}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;