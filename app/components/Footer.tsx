'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'


const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="absolute bottom-0 flex px-10 z-10 mx-auto w-full py-8 items-center justify-between  text-xl uppercase">
            <div className="w-1/2">
                <Link href="/" className=" transition-all">
                    {pathname === "/" ?
                        <img src="/logo_white.png" alt="logo" className="w-24" />
                        :
                        <img src="/logo.png" alt="logo" className="w-24" />}
                </Link>
            </div>
            <div className="w-1/2 flex flex-col text-right sm:flex-row justify-around xl:justify-end">
                <Link href="/" className={`font-bold transition-all ${pathname === "/" ? "hover:text-white/50  text-white" : "hover:text-black/50  text-black"}`}>instagram</Link>
                <Link href="https://vimeo.com/yangdirector" className={`pl-4 font-bold transition-all ${pathname === "/" ? "hover:text-white/50  text-white" : "hover:text-black/50  text-black"}`}>vimeo</Link>
            </div>
        </footer>
    );
};

export default Footer;
