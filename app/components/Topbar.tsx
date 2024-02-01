"use client"
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import Image from "next/image";


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
            <div className="lg:hidden flex mx-10 py-8 items-center justify-between text-xl uppercase">
                <p onClick={handleShow} className={` ${showMenu ? "hidden" : ` ${textColor} text-5xl flex cursor-pointer`} `} >+</p>
                <p onClick={handleShow} className={` ${showMenu ? ` ${textColor} text-5xl flex cursor-pointer` : "hidden"} `}>-</p>
                
                <div className="w-1/2 flex justify-end">
                <Link href="/" className=" transition-all">
                    {pathname === "/" ?
                        <Image width={100} height={100} src="/logo_white.png" alt="logo" className="w-24" />
                        :
                        <Image width={100} height={100} src="/logo.png" alt="logo" className="w-24" />}
                </Link>
            </div>
                
            </div>

            {showMenu &&
                <div className="lg:hidden flex flex-col mx-10 py-8 items-center justify-between text-2xl uppercase space-y-6">
                    <Link href="/pages/works" className={`hover:${textColor}/80 hover:line-through transition-all ${textColor}`}>Works</Link>
                    <Link href="/pages/contacts" className={`hover:${textColor}/80 hover:line-through transition-all ${textColor}`}>Contacts</Link>
                    <Link href="/pages/about" className={`hover:${textColor}/80 hover:line-through transition-all ${textColor}`}>About</Link>
                </div>
            }

            {/* Desktop */}
            <div className="hidden lg:flex px-10 z-10 w-1/2 py-8 items-center justify-between text-xl md:text-2xl uppercase">
                <Link href="/" className={`hover:${textColor}/80 hover:line-through transition-all ${textColor}`}>Home</Link>
                <Link href="/pages/works" className={`hover:${textColor}/80 hover:line-through transition-all ${textColor}`}>Works</Link>
                <Link href="/pages/contacts" className={`hover:${textColor}/80 hover:line-through transition-all ${textColor}`}>Contacts</Link>
                <Link href="/pages/about" className={`hover:${textColor}/80 hover:line-through transition-all ${textColor}`}>About</Link>
            </div>
        </>
    );
};

export default Topbar;
