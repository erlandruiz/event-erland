import { Input } from "@/components/ui/input";
import { EventContext } from "@/contexts/EventContext";
import { useContext } from "react";

import {BiSearch} from 'react-icons/bi'

const EventSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(EventContext);
  
  return (
    <div className="flex items-center gap-[10px] w-full xl:w-[190px]">
        <div className="text-lg textaccent"><BiSearch/></div>
      <Input
        value={searchTerm}
        type="text"
        placeholder="Nombre del evento o artista"
        onChange ={(e)=>setSearchTerm(e.target.value)}
        className="w-full p-0 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default EventSearch;
