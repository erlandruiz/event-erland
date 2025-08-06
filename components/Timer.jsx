"use client";
import { useState, useEffect } from "react";
const Timer = ({ event }) => {
  //calculo de dia y hora del evento
  const eventDate = new Date(`${event.date}T${event.hour}`);

  //estado para seguir el tiempo restante en milisegundos

  const [timeRemaining, setTimeRemaining] = useState(eventDate - new Date());

  //manejar la logica del temporizador de cuenta regresiva

  useEffect(() => {
    //configurar el intervalo de actualizacion de cada segundo
    const interval = setInterval(() => {
      const now = new Date(); // saca la fecha actual
      const timeLeft = eventDate - now; // calculamos el tiempo que restante

      //si el tiempo esta arriba, limpiar el intervalo y parar la cuenta regresiva
      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeLeft); // actualiza el estado del tiempo restante
      }
    }, 1000); // corre cada un segundo

    return () => clearInterval(interval);
  }, [eventDate]); // dependencia del array asegura que el useEffect corra cuando eventDate cambia

  if (timeRemaining <= 0) {
    return <div>¡El evento ya pasó! </div>;
  }

  //calculo los dias, horas, minutos y segundos  restantes de 'timeRemaining'
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // total dias
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); //horas restantes en el dia actual
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)); //minutos restantes en las horas actaules}
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); //segundos restantes en los segundos actuales

  return (
    <div className=" flex flex-wrap gap-4">
      {/* // days */}
      <div>
        <div className="text-center border-[3px] border-[var(--color-accent)] rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{days}</div>
            <div className="text-sm uppercase font-medium">Días</div>
          </div>
        </div>
      </div>
      {/* // Hours */}
      <div>
        <div className="text-center border-[3px] border-[var(--color-accent)] rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{hours}</div>
            <div className="text-sm uppercase font-medium">Horas</div>
          </div>
        </div>
      </div>

      {/* // minutos */}
      <div>
        <div className="text-center border-[3px] border-[var(--color-accent)] rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{minutes}</div>
            <div className="text-sm uppercase font-medium">Minutos</div>
          </div>
        </div>
      </div>

      {/* // segundos */}
      <div>
        <div className="text-center border-[3px] border-[var(--color-accent)] rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{seconds}</div>
            <div className="text-sm uppercase font-medium">Segundos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
