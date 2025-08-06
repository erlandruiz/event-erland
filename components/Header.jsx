import Image from "next/image";
import Link from "next/link";
import LogoErland from "./Me/LogoErland";
const Header =()=>{
    return(
        <header className="absolute left-0 right-0 z-10">
            <div className="container mx-auto h-full border-b border-white/10 py-4 xl:py-6">
            <div className="flex justify-between items-center h-full">
                {/* logo */}
                <Link href="/">
                {/* <Image src={"/assets/header/logo.svg"} width={70} height={70} alt=""/> */}
                <LogoErland color="textaccent" />
                </Link>
                <div className="flex gap-4">
                    <button className="btn btn-tertiary">sign in </button>
                    <button className="btn btn-accent">sign up </button>
                </div>
            </div>
               
            </div>
        </header>
    )
}

export default Header;