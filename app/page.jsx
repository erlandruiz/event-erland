"use client";

import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";

//components
import Hero from "@/components/Hero";
import EventList from "@/components/Events/EventList";
import UpcomingEvents from "@/components/UpcomingEvents";

const Home = () => {
  const { showEvenList } = useContext(EventContext);
  // console.log(showEvenList);
  return (
    <div>
      <Hero />

      <div className="flex flex-col justify-center items-center">
        {/* clearsearc */}
      </div>

      {showEvenList ? (
        <div className="container mx-auto">
          <EventList />
        </div>
      ) : (
        <div>
          <div className="container mx-auto">
            {/**upcoming events slider */}
            <UpcomingEvents />
            {/**download app section */}
            <div>Descargar APP</div>
            {/**recommended events slider */}
            <div>Eventos Recomendados</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
