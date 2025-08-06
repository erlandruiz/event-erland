"use client";

import { createContext, useState, useEffect } from "react";

export const TicketContext = createContext();

const TicketProvider = ({ children }) => {
  const [event, setEvent] = useState(null); //estado ´para almacenar los eventos de la data
  const [seat, setSeat] = useState({ seat: null, price: null }); //estado para seleccionar el asiento
  const [showMenu, setShowMenu] = useState(false); //estado para mostrar la visbilidad del menu
  const [itemAmount, setItemAmount] = useState(1); //estado para seguir el valor del item( cantidad de item)
  const [totalPrice, setTotalPrice] = useState(0); //estado del precio total
  const [checkoutData, setCheckoutData] = useState(null); //estado para almacenar el chequeo de data

  const initializeEvent = (fetchedEvent) => {
    setEvent(fetchedEvent);
    //reset item amoount cuando  un nuevo evento es inicializado
    setItemAmount(1);
    //inicializa el frontseat si existe en el fetched eventa data
    const frontseat = fetchedEvent?.seats.find((seat) => {
      return seat.seat === "frontseat";
    });
    if (frontseat) {
      setSeat({ seat: frontseat.seat, price: frontseat.price });
    }
  };

  useEffect(() => {
    const handleCLickOutside = (e) => {
      if (!e.target.closest(".custom-select")) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleCLickOutside);
    return () => {
      document.removeEventListener("click", handleCLickOutside);
    };
  }, []);

  //calcula el precio total cuando sea el precio del asiento o cambio de cantidad  del articulo(item amount)
  useEffect(() => {
    setTotalPrice(seat.price * itemAmount);
  }, [seat.price, itemAmount]);

  //funcion para manejar la seleccion del asiento
  const handleSeat = (seat, price) => {
    setSeat({ seat, price });
    setShowMenu(false);
  };

  //funcion para manajear COMPRAR AHORA
  const buyNow = (event) => {
    const ticketData = {
      eventId: event.id,
      eventName: event.title,
      ticketType: seat.seat,
      ticketPrice: seat.price,
      amount: itemAmount,
      totalPrice,
    };
    // setCheckoutData(ticketPrice); //en caso de que usmeos la data para el checkout page
    setCheckoutData(ticketData); //en caso de que usmeos la data para el checkout page
   
  };

  const increaseAmount =()=>{
    setItemAmount((prevAmount)=>{
      return(
        prevAmount +1
      )
    })
  }

  const decreaseAmount =()=>{
    setItemAmount((prevAmount)=>{
      return(
        prevAmount>1 ? prevAmount -1 : 1
      )
    })
  }

  return (
    <TicketContext.Provider
      value={{
        event,
        seat,
        showMenu,
        itemAmount,
        totalPrice,
        checkoutData,
        handleSeat,
        setSeat,
        setShowMenu,
        buyNow,
        initializeEvent,
        increaseAmount,
        decreaseAmount
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
