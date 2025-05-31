import { EventContext } from "@/contexts/EventContext";
import { useContext } from "react";
import Event from "./Event";
import SkelentonGrid from "../SkeletonGrid";

const EventList = () => {
  const { filteredEvents, isLoading, error } = useContext(EventContext);
  if (error) return <p>Error:{error}</p>; //eroor message

  if (filteredEvents.length === 0 && !isLoading) {
    return (
      <div className="h-[80vh]">
        <p className="text-white/80 text-center">No hay eventos</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <SkelentonGrid itemCount={12} />
      // <SkelentonGrid  itemCount={filteredEvents.length}/>
    );
  } else {
    return (
      <div>
        <h4 className="h4 mb-6">{filteredEvents.length} Resultados encontrados.</h4>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-[30px] mb-32">
          {filteredEvents.map((filteredEvent, index) => {
            return (
              <div key={index}>
                <Event event={filteredEvent} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default EventList;
