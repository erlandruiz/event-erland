import { useContext } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { EventContext } from "@/contexts/EventContext";

const Hero = () => {
  const { handleClearSearch } = useContext(EventContext);
  return (
    <section className="h-screen xl:h-[800px] mb-16 relative">
      <div className="container mx-auto h-full flex flex-col justify-center items-center pt-12 xl:pt-0">
        <div className="w-full max-w-[684px] text-center mx-auto flex flex-col gap-2">
          <div className="pretitle">Descubre nuevos momentos</div>
          <h1 className="h1">
            Descubre Eventos <br /> & Experiencias
          </h1>
          <p className="text-sm xl:text-lg font-light text-white/80 mb-4 xl:mb-12 max-w-[480px] xl:max-w-none mx-auto">
            Únete a nuestra comunidad donde puedes explorar momentos felices y
            compartir momentos inolvidables con tus amigos y familiares.
          </p>
        </div>
        <div>
          <Searchbar />
          <div className="w-full  mt-3 relative flex flex-col justify-center">
            <p className="text-sm italic font-light text-white/70 text-center mb-3 xl:mb-0">
              Por favor, selecciona al menos un campo o déjalo vacío para ver
              todos los eventos.
            </p>
            {/**Clear search */}
            <button
              className="textaccent text-sm xl:absolute right-0"
              onClick={() => handleClearSearch()}
              type="button"
            >
              Limpiar Buscador
            </button>
          </div>
        </div>
      </div>
      {/**bg1 */}
      <div className="absolute  top-0 left-0 w-[50vw] h-full bg-hero-1 bg-blend-color-dodge bg-no-repeat bg-cover -z-10 opacity-50" ></div>
      {/**bg2 */}
      <div className="absolute  top-0 right-0 w-[50vw] h-full bg-hero-2 bg-blend-lighten bg-no-repeat bg-cover -z-10 opacity-50" ></div>
    </section>
  );
};

export default Hero;
