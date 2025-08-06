"use client";

import { TicketContext } from "@/contexts/TicketContext";
import { useContext, useEffect } from "react";

import { PiChairFill } from "react-icons/pi";
import { BiChevronDown } from "react-icons/bi";
import { Ultra } from "next/font/google";

const CustomSelect = ({ event }) => {
  const {
    seat,
    showMenu,

    handleSeat,

    setShowMenu,

    initializeEvent,
  } = useContext(TicketContext);

  //inicio del event
  useEffect(() => {
    initializeEvent(event);
  }, []);
  return (
    <div
      onClick={(e) => {
        setShowMenu((prev) => !prev); //comunta el estado del menu
        e.stopPropagation(); // prevent event  bubbling evitar la propagación de eventos
      }}
      className="custom-select bg-[var(--color-secondary)] w-full h-[64px] rounded-full flex items-center justify-between px-8 relative cursor-pointer select-none"
    >
      <div className="flex items-center gap-2 w-full">
        <div className="text-xl  text-[var(--color-accent)]">
          <PiChairFill />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 capitalize">{seat.seat}</div>
          <div className="flex items-center gap-2">
            <div className="font-semibold">${seat.price}</div>
            <div className="text-sm text-white/60">Cada uno</div>
          </div>
        </div>
      </div>

      {/* menu */}
      {showMenu && (
        <ul className="bg-[var(--color-secondary)] absolute top-[70px] left-0 overflow-hidden w-full rounded-3xl ">
          {event.seats.map((seat, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer hover:bg-white/5 px-8 py-5"
                onClick={(e) => {
                  handleSeat(seat.seat, seat.price);
                  e.stopPropagation();
                }} // prevent event  bubbling evitar la propagación de eventos}}
              >
                <div className="flex justify-between">
                  <div className="capitalize">{seat.seat}</div>
                  <div>${seat.price}</div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default CustomSelect;
