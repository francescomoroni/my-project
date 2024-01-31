'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

export default function Home() {

  const videos = [
    {
      id: 0,
      srcVideo: "694426484",
      title: "ROGER VIVIER // KALEIDOSHOC FT. CAMILLE RAZAT",
      srcImg: "/logo.png"
    },
    {
      id: 1,
      srcVideo: "777528290",
      title: "B&B ITALIA",
      srcImg: "/logo.png"
    },
    {
      id: 2,
      srcVideo: "794204338",
      title: "HIGH SNOBIETY X FENDI",
      srcImg: "/logo.png"
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 15000);

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
      <div className="relative h-screen w-screen bg-gray-300">
        <video poster="/logo.png" onClick={nextSlide} autoPlay loop muted playsInline src={`${currentImageIndex}.mp4`} className="w-full h-full object-cover"></video>
       {/* <iframe
          title={videos[currentImageIndex].title}
          src={`https://player.vimeo.com/video/${videos[currentImageIndex].srcVideo}?autoplay=1&loop=1&muted=1&controls=0&#t=0m0s&app_id=58479&quality=240p`}
          style={{ position:"absolute", width: "100%", height: "100%", objectFit: "cover", inset: "0px" }}
        ></iframe> */}
      </div> 

      {/* Titolo video */}
      <h1 onClick={nextSlide} className="fixed right-10 top-1/2 text-white text-2xl ">{videos[currentImageIndex].title}</h1>

      {/* Footer */}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>

    </>
  );
}




// <video poster="/logo.png" onClick={nextSlide} autoPlay loop muted playsInline src={`${currentImageIndex}.mp4`} className="w-full h-full object-cover"></video>
