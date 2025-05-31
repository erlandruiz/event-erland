"use client";

import Searchbar from "@/components/Searchbar/Searchbar";
import EventList from "@/components/Events/EventList";
import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";

const Home = () => {
  const { showEvenList, handleClearSearch } = useContext(EventContext);
  console.log(showEvenList);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Searchbar />
        {/**Clear search */}
        <button className="textaccent" onClick={() => handleClearSearch()}>
          clear search
        </button>
      </div>

      {showEvenList ? (
        <div className="container mx-auto">
          <EventList />
        </div>
      ) : (
        <div>
          <div className="container mx-auto">
            {/**upcoming events slider */}
            <div>Control de Próximos Eventos</div>
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
