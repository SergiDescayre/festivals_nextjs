import { months } from "../data/months";

const DateFestivalHorizontal = ({ dateStart, dateEnd }) => {
  dateStart = new Date(dateStart);

  const dayStart = dateStart.getDate();
  const monthStart = months[dateStart.getMonth()];
  const yearStart = dateStart.getFullYear();

  dateEnd = new Date(dateEnd);

  const dayEnd = dateEnd.getDate();
  const monthEnd = months[dateEnd.getMonth()];
  const yearEnd = dateEnd.getFullYear();

  return (
    <div>
      {monthStart === monthEnd ? (
        <div>
          data curta
          {/* {t("date.shortDate", { dayStart, dayEnd, monthStart, yearStart })} */}
        </div>
      ) : (
        <div>
          data llarga
          {/* {t("date.longDate", {
            dayStart,
            monthStart,
            dayEnd,
            monthEnd,
            yearStart,
          })} */}
        </div>
      )}
    </div>
  );
};

export default DateFestivalHorizontal;
