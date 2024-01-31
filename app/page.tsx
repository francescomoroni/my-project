'use client'
import React, { useState, useEffect } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import { homepage } from "./data/data";

export default function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % homepage.length);
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % homepage.length);
  }

  return (
    <>
      {/* Header */}
      <div className="fixed z-10 w-full">
        <Topbar />
      </div>

      {/* Video Centrale */}
      <div className="relative h-screen w-screen bg-gray-300 overflow-hidden">
        <video poster="/logo.png" onClick={nextSlide} autoPlay loop muted playsInline src={`${currentImageIndex}.mp4`} className="w-full h-full object-cover"></video>
      </div>


      {/* Titolo video */}
      <h1 onClick={nextSlide} className="fixed right-10 top-1/2 text-white text-2xl ">{homepage[currentImageIndex].title}</h1>

      {/* Footer */}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>

    </>
  );
}

//"bg-[url('/img/hero-pattern.svg')]"

// <video poster="/logo.png" onClick={nextSlide} autoPlay loop muted playsInline src={`${currentImageIndex}.mp4`} className="w-full h-full object-cover"></video>
// src="https://player.vimeo.com/video/694426484?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

{/*<iframe
          onClick={nextSlide}
          title={homepage[currentImageIndex].title}
          src={`https://player.vimeo.com/video/${homepage[currentImageIndex].srcVideo}?autoplay=1&loop=1&muted=1&controls=0&#t=0m0s&app_id=58479&quality=240p`}
          style={{ position:"absolute", width: "100%", height: "100%", objectFit: "cover", inset: "0px", border: "none"}}
          width={"100%"} height={"100%"} frameBorder="0"
        ></iframe>*/}

{/* <div className="relative h-screen w-screen bg-gray-300 overflow-hidden bg-[url('https://player.vimeo.com/video/694426484?background=1&app_id=58479')]">
       
      </div>  */}