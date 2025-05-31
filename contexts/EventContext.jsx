"use client";
import { createContext, useEffect, useState, useMemo } from "react";

//Esto crea el contexto que será compartido.
export const EventContext = createContext();

//EventProvider - El Componente Proveedor
// Es el que "envuelve" tu app y provee los datos del contexto a los componentes hijos (children).
const EventProvider = ({ children }) => {
  //events: almacena todos los eventos obtenidos del servidor.
  const [events, setEvents] = useState([]);
  //isLoading: indica si la carga está en progreso.
  const [isLoading, setIsLoading] = useState(false);
  //error: almacena el error si ocurre alguno al obtener datos.
  const [error, setError] = useState(null);

  const [showEvenList, setShowEventList] = useState(false);
  const [selectedLocation , setSelectedLocation] = useState("")
  const [selectedDate , setSelectedDate] = useState("")

//searchTerm: almacena el término de búsqueda actual.
  const [searchTerm, setSearchTerm] = useState("");

  // applied fiklters (after submit)
  //appliedFilters: almacena los filtros aplicados cuando se hace un submit (por ejemplo, el término de búsqueda confirmado).
  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    selectedLocation:"",
    selectedDate:null
  });

  //filtered events based on the applied filters
  //Filtrado de eventos
//Filtra los eventos según el searchTerm confirmado en appliedFilters.
  const filteredEvents = useMemo(() => {//Usa useMemo para optimizar el filtrado.
    return events.filter((event) => {
      //check search termns
      const matchesSearch = appliedFilters.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilters.searchTerm.toLowerCase())
        : true;

          //check location
      const matchesLocation = appliedFilters.selectedLocation ? event.location.toLowerCase() === appliedFilters.selectedLocation.toLowerCase() : true ;

      
      return matchesSearch && matchesLocation;


    });






  }, [events, appliedFilters]);


  //fetch events
  //Carga de eventos desde el servidor
  useEffect(() => { //Llama una sola vez al iniciar.
    const fetchEvents = async () => {
      //start loader
      setIsLoading(true);
      try {
        //Obtiene datos desde http://localhost:4000/events (probablemente de un servidor JSON Server).
        const res = await fetch("http://localhost:4000/events");
        //Maneja estado de carga y errores.
        if (!res.ok) throw new Error("Falló Carga del Events Fetch");
        const data = await res.json();
        setEvents(data);
        //stop loader
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        //stop loader
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);


//Funciones para búsqueda

//Aplica el filtro cuando se hace submit.
  const handleSubmit = () => {
    setIsLoading(true);
    setShowEventList(true);
    setAppliedFilters({ searchTerm, selectedLocation, selectedDate });

    setTimeout(() => {
      setIsLoading(false)
    }, 2500);
   
  };

  //Limpia el término de búsqueda.
  const handleClearSearch = () => {
    setSearchTerm("");
    setShowEventList(false);
    selectedLocation("");
    selectedDate(null);
  };


  //Provisión del contexto

  //Aquí compartes todos los valores y funciones a los componentes hijos.
  //Los componentes hijos pueden acceder a esto con useContext(EventContext).
  return (
    <EventContext.Provider
      value={{
        events,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        filteredEvents,
        handleSubmit,
        handleClearSearch,
        showEvenList,
        selectedLocation,
        setSelectedLocation,
        selectedDate,
        setSelectedDate
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
