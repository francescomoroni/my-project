'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

export default function Home() {

  const videos = [
    "titolo 1 video e descrizione",
    "titolo 2 video e descrizione",
    "titolo 3 video e descrizione",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  return (
    <>
      {/* Header */}

      <div className="fixed z-10 w-full">
        <Topbar />
      </div>

      {/* Video Centrale */}
      <div className="relative h-screen w-screen bg-gray-500">
        <video onClick={nextSlide} autoPlay muted playsInline src={`${currentImageIndex}.mp4`} className="w-full h-full object-cover"></video>
      </div>

      {/* Titolo video */}
      <p onClick={nextSlide} className="fixed right-10 top-1/2 text-white text-2xl ">{videos[currentImageIndex]}</p>

      {/* Footer */}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>

    </>
  );
}


{/* <iframe
          title="Vimeo Video"
          src={`https://player.vimeo.com/video/${videos[currentImageIndex]}?autoplay=1&loop=1&muted=1&controls=0&#t=1m0s`}
          // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          allow="autoplay; fullscreen;"
          width="100%" height="100%"
          allowFullScreen
          frameBorder="0"
          loading="lazy"
          marginHeight={0}
          marginWidth={0}
        ></iframe> */}