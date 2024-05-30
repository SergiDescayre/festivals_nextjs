import { months } from "@/data/months";
interface Props {
  date: string;
}
const DateFestival = ({ date }: Props) => {
  const arrayDate = date.split("-");
  const positionMonth = arrayDate[1];
  const dayTotal = arrayDate[2];
  const day = +dayTotal.slice(0, 2);
  const year = arrayDate[0];
  const month = months[+positionMonth - 1];

  return (
    <div className="flex gap-2 ">
      <span>
        {day} de {month} de {year}
      </span>
    </div>
  );
};

export default DateFestival;
