"use client"
import React, { useState, useEffect } from "react";

const Topbar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <>
            <div className="md:hidden flex mx-10 py-8 items-center justify-between text-xl uppercase">
                <a href="#" className="hover:text-black/80 transition-all">LOGO SIMO ©</a>
                <p onClick={handleShow} className={` ${show ? "hidden" : "text-5xl flex"} `} >+</p>
                
                <p onClick={handleShow} className={` ${show ? "text-5xl flex " : "hidden"} `}>-</p>

                {/* <a href="/works" className="hover:text-black/80 transition-all">Works</a>
                <a href="/contacts" className="hover:text-black/80 transition-all">Contacts</a>
                <a href="/about" className="hover:text-black/80 transition-all">About</a> */}
            </div>
            
            {show &&
                <div className="md:hidden flex flex-col mx-10 py-8 items-center justify-between text-xl uppercase">
                    <a href="/works" className="hover:text-black/80 transition-all">Works</a>
                    <a href="/contacts" className="hover:text-black/80 transition-all">Contacts</a>
                    <a href="/about" className="hover:text-black/80 transition-all">About</a>
                </div>
            }

            <div className="hidden md:flex mx-auto container  w-100 py-8 items-center justify-between text-xl uppercase">
                <a href="#" className="hover:text-black/80 transition-all">SIMO YANG ©</a>
                <a href="/works" className="hover:text-black/80 transition-all">Works</a>
                <a href="/contacts" className="hover:text-black/80 transition-all">Contacts</a>
                <a href="/about" className="hover:text-black/80 transition-all">About</a>
            </div>
        </>
    );
};

export default Topbar;
