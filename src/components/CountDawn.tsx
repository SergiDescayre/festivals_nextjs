import { useEffect, useState } from "react";

interface Props {
  date: string;
}

const CountDawn = ({ date }: Props) => {
  // Fecha de finalización del countdown
  const endDate = new Date(date).getTime();
  // Estado para almacenar el tiempo restante
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Función para calcular el tiempo restante
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      distance,
    };
  }

  // Función para actualizar el tiempo restante cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining.days]);
  return (
    <div className="grid grid-cols-4 gap-1 text-center p-3 ">
      <div
        className="flex flex-col p-2 text-secondary items-center w-18"
      >
        <div className="flex flex-col items-center ">
          <span className="countdown text-2xl xl:text-3xl">
            {timeRemaining.days}
          </span>
          <span className="text-xs xl:text-sm text-primary ">Días</span>
        </div>
      </div>
      <div
         className="flex flex-col p-2 text-secondary items-center w-18"
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span
            style={{ "--value": timeRemaining.hours } as React.CSSProperties}
          ></span>
        </span>
        <span className="text-xs xl:text-sm text-primary">Horas</span>
      </div>
      <div
        className="flex flex-col p-2 text-secondary items-center w-18"
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span
            style={{ "--value": timeRemaining.minutes } as React.CSSProperties}
          ></span>
        </span>
        <span className="text-xs xl:text-sm text-primary">Min</span>
      </div>
      <div
        className="flex flex-col p-2 text-secondary items-center w-18"
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span
            style={{ "--value": timeRemaining.seconds } as React.CSSProperties}
          ></span>
        </span>
        <span className="text-xs xl:text-sm text-primary">Seg</span>
      </div>
    </div>
  );
};

export default CountDawn;
