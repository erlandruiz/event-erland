"use client";
import { TicketContext } from "@/contexts/TicketContext";
import { useContext, useState } from "react";

import { BiPlus, BiMinus } from "react-icons/bi";
import { HiTicket } from "react-icons/hi2";

const BuyTicket = ({ event }) => {
  const {
    itemAmount,
    totalPrice,

    buyNow,
    increaseAmount,
    decreaseAmount,
  } = useContext(TicketContext);

  const [isLoading, setIsLoading] = useState(false); //estado para la carga

  const handleBuyNow = () => {
    setIsLoading(true); //show loader
    buyNow(event); // conmuta a la logia de buyNow
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); //para ajustar el delay a la necesidad
  };
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-4">
      {/* increase & decrease buttons */}
      <div className="w-[200px] md:w-[300px] flex items-center justify-between bg-[var(--color-secondary)] p-2 rounded-full">
        {/* decrease */}
        <div onClick={()=>decreaseAmount()} className="cursor-pointer bg-[var(--color-accent)] w-[48px] h-[48px] flex items-center justify-center select-none rounded-full">
          <BiMinus className="text-lg" />
        </div>
        {/* amount */}
        <div>{itemAmount}</div>
        {/* increase */}
        <div onClick={()=>increaseAmount(9)} className="cursor-pointer bg-[var(--color-accent)] w-[48px] h-[48px] flex items-center justify-center select-none rounded-full">
          <BiPlus className="text-lg" />
        </div>
      </div>
      {/* buy now button */}
      <button
        onClick={handleBuyNow}
        className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-all p-4 rounded-full w-full"
      >
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div>Procesando...</div>
          ) : (
            <div className="flex items-center gap-4">
              <HiTicket className="text-2xl" />
              <div>{`${itemAmount} x Boleto - $${totalPrice}`}</div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default BuyTicket;
