"use client";

import { format } from "date-fns";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover } from "../ui/popover"; //ojo

import { BiCalendar, BiChevronDown } from "react-icons/bi";
import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

const EventDate = () => {
  const { selectedDate, setSelectedDate } = useContext(EventContext);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="flex w-full items-center gap-[10px] xl:w-[190px]">
      <div className="text-lg textaccent">
        <BiCalendar />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-full justify-start p-0 bg-transparent hover:bg-transparent">
            {selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>Seleccione Fecha</span>
            )}
             
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 btn-secondary border-0 text-white">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            initialFocus
          />
       
        </PopoverContent>
        <div className="text-[26px]">
          <BiChevronDown />
        </div>
      </Popover>
    </div>
  );
};

export default EventDate;
