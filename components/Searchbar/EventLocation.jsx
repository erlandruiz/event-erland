import { EventContext } from "@/contexts/EventContext";

import { useContext } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {BiMap} from 'react-icons/bi'

const EventLocation = () => {
  const { events, selectedLocation, setSelectedLocation } =
    useContext(EventContext);

  //genera una lista de locaciones unica de futuros eventos
  const uniqueLocations = [
    "Todos los Lugares",
    ...new Set( // se usa Set para remover lugares duplicados
      events
        .filter((event) => {
          const eventDate = new Date(event.date); //convert event date to DATE OBJECT
          const currentDate = new Date(); //get the current date

          //include events that occur after the current date
          if (eventDate > currentDate) return true;

          //include events happening today but only if the time has not yet passed
          if (eventDate.toDateString() === currentDate.toDateString()) {
            const eventTime = eventDate.getTime(); //get event time in miliseconds
            const currentTime = currentDate.getTime(); //get current time in miliseconds
            return eventTime > currentTime; // inlude event if it's still upcomming today
          }
          //exclude past events
          return false;
        })
        .map((event) => event.location) //extract the location of each event
    ),
  ];

  // console.log(uniqueLocations);

  return (
    <div className="flex items-center gap-[10px] w-full xl:w-[190px] select-none">
      {/**Icon */}
      <div className="text-log textaccent">
        <BiMap/>
      </div>
      <Select
        value={selectedLocation}
        onValueChange={(value) => setSelectedLocation(value)}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0">
          <SelectValue placeholder="Lugar del Evento" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Lugar</SelectLabel>
            {uniqueLocations.map((uniqueLocation, index) => {
              return (
                <SelectItem
                  value={
                    uniqueLocation === "Todos los Lugares"
                      ? null
                      : uniqueLocation
                  }
                  key={index}
                >
                  {uniqueLocation}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventLocation;
