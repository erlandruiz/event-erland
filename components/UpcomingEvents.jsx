"use client";

import { useContext, useEffect, useState } from "react";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

import { EventContext } from "@/contexts/EventContext";

//componets

import Event from "./Events/Event";
import Link from "next/link";
import Image from "next/image";
import SkelentonGrid from "./SkeletonGrid";

const UpcomingEvents = () => {
  const { events } = useContext(EventContext);
  const [eventValue, setEventValue] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filterEvents = () => {
      if (eventValue === "all") {
        setFilteredEvents(events);
      } else {
        const result = events.filter((event) => event.type === eventValue);
        setFilteredEvents(result);
      }
    };
    filterEvents();
  }, [eventValue, events]);

  return (
    <section className="mb-16">
        <div className="mb-12 text-center">
            <h3 className="pretitle">Próximos</h3>
            <h2 className="h2">Eventos de Gran Concurrencia</h2>
        </div>
      <div className="flex flex-col xl:flex-row items-center justify-between mb-12">
        <Tabs value={eventValue} onValueChange={setEventValue} className="bg-none w-full max-w-[600px] h-full flex justify-center items-center mb-12 xl:mb-0">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="sport">Deportes</TabsTrigger>
            <TabsTrigger value="music">Música</TabsTrigger>
            <TabsTrigger value="food">Comida</TabsTrigger>
            <TabsTrigger value="art">Arte</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {/* slider */}
      {filteredEvents.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ dynamicBullets: true, clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1310: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
          className="w-full h-[500px]"
        >
          {filteredEvents.map((filteredEvent, index) => {
            return (
              <SwiperSlide key={index} className="select-none">
                <Link href="">
                  <Event event={filteredEvent} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <SkelentonGrid itemCount={4} />
      )}
   
    </section>
  );
};

export default UpcomingEvents;
