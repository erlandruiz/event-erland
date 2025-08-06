import Image from "next/image";
import Link from "next/link";

import socials from "../socials.js";
import LogoErland from "./Me/LogoErland.jsx";
const Footer = () => {
  return (
    <footer className="btn-accent bg-pattern  bg-cover bg-blend-multiply pt-16">
      <div className="container mx-auto border-b border-white/40">
        {/* text & form imput & sociasl */}
        <div className="flex flex-col max-w-[550px] mx-auto text-center">
          {/* text */}
          <div className="mb-9">
            <h2 className="h2 mb-3">Conéctate a tus eventos</h2>
            <p>
              Únete a nuestra lista para recibir actualizaciones exclusivas de
              eventos y consejos de expertos.
            </p>
          </div>
          {/* form */}
          <form className="relative flex items-center mb-16">
            <input
              type="text"
              placeholder="Ingrese su correo electrónico"
              className="pl-8 w-full h-[60px] rounded-full outline-none placeholder:text-primary/80 bggrey text-sm"
            />
            <button className="btn-secondary hover:btn-secondary-hover transition-all w-[114px] h-[52px] rounded-full text-sm uppercase absolute right-1">Únete</button>
          </form>
          {/* sociasl */}
          <div className="mb-[72px] flex gap-8 mx-auto">
            {socials.map((social, index)=>{
              return(
                <Link href={social.path} key={index} className="relative w-[20px] h-[20px]">
                <Image src={social.src} fill alt="redes sociales"/>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* logo */}
            <Link href="/" className="relative flex w-[78px] h-[30px]">
              {/* <Image src="/assets/footer/logo.svg" fill alt="Logo Erland" /> */}
              <LogoErland color="primary" />
            </Link>
            <p className="text-sm">
              Copyright & copy; 2025. Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
