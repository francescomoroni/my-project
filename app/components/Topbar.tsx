"use client"
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'


const Topbar = () => {
    const pathname = usePathname();
    const textColor = pathname === "/" ? "text-white" : "text-black";

    const [showMenu, setShowMenu] = useState(false);

    const handleShow = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            {/* Mobile */}
            <div className="md:hidden flex mx-10 py-8 items-center justify-between text-xl uppercase">
                <p onClick={handleShow} className={` ${showMenu ? "hidden" : ` ${textColor} text-5xl flex cursor-pointer`} `} >+</p>
                <p onClick={handleShow} className={` ${showMenu ? ` ${textColor} text-5xl flex cursor-pointer` : "hidden"} `}>-</p>
                
                <div className="w-1/2 flex justify-end">
                <Link href="/" className=" transition-all">
                    {pathname === "/" ?
                        <img src="/logo_white.png" alt="logo" className="w-24" />
                        :
                        <img src="/logo.png" alt="logo" className="w-24" />}
                </Link>
            </div>
                
            </div>

            {showMenu &&
                <div className="md:hidden flex flex-col mx-10 py-8 items-center justify-between text-2xl uppercase space-y-6">
                    <Link href="/pages/works" className={`hover:${textColor}/80 transition-all ${textColor}`}>Works</Link>
                    <Link href="/pages/contacts" className={`hover:${textColor}/80 transition-all ${textColor}`}>Contacts</Link>
                    <Link href="/pages/about" className={`hover:${textColor}/80 transition-all ${textColor}`}>About</Link>
                </div>
            }

            {/* Desktop */}
            <div className="hidden md:flex px-10 z-10 w-1/2 py-8 items-center justify-between text-xl uppercase">
                <Link href="/" className={`hover:${textColor}/80 hover:font-bold transition-all ${textColor}`}>Home</Link>
                <Link href="/pages/works" className={`hover:${textColor}/80 hover:font-bold transition-all ${textColor}`}>Works</Link>
                <Link href="/pages/contacts" className={`hover:${textColor}/80 hover:font-bold transition-all ${textColor}`}>Contacts</Link>
                <Link href="/pages/about" className={`hover:${textColor}/80 hover:font-bold transition-all ${textColor}`}>About</Link>
            </div>
        </>
    );
};

export default Topbar;
