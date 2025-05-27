import "./Vacancies.css";

import { use_vacancies } from "../../context/Vacancies_Context";

import format_price from "../../utils/format_price";

const Vacancies = () => {
  const { vacancies } = use_vacancies();

  return (
    <>
      <div className="vacancies">
        <div className="vacancies-label">Вакансии</div>
        <div className="vacancies-cards">
          {vacancies.map((line) => (
            <div className="vacancy" key={line.label}>
              <div className="vacancy-status"></div>
              <div className="vacancy-data">
                <div className="vacancy-label">{line.label}</div>
                <div className="vacancy-salary">
                  {format_price(line.salary)}
                </div>
                <div className="vacancy-schedule">{line.schedule}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vacancies;