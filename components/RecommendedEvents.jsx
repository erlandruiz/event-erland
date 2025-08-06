"use client";

import { useContext } from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import Link from "next/link";
import Event from "./Events/Event";
import SkelentonGrid from "./SkeletonGrid";
import { EventContext } from "@/contexts/EventContext";
import { Sassy_Frass } from "next/font/google";
const RecommendedEvents = () => {
  const { events } = useContext(EventContext);
  const filterRecommendedEvents = events.filter((event) => {
    return event.recommended === true;
  });

  return (
    <section className="mb-32">
        <div className="mb-12 text-center">
           <h3 className="pretitle">Recomendados para ti</h3> 
           <h2 className="h2">Eventos que te podrían gustar</h2>
        </div>
      {filterRecommendedEvents.length > 0 ? (
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
          {filterRecommendedEvents.map((filterRecommendedEvent, index) => {
            return (
              <SwiperSlide key={index} className="select-none">
                 <Link href={`/event/${filterRecommendedEvent.id}`}>
                  <Event event={filterRecommendedEvent} />
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

export default RecommendedEvents;
