"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { works } from "../../../data/data";


export default function Page({ params }: { params: { work: string[] } }) {
    const [work, setWork] = useState({} as any);
    const [photogallery, setPhotogallery] = useState([] as any);
    // const [videogallery, setVideogallery] = useState([] as any);
    const [openPhotogallery, setOpenPhotogallery] = useState(false);
    // const [openVideogallery, setOpenVideogallery] = useState(false);


    useEffect(() => {

        const workFound = works.find((lavoro) => lavoro.id === params.work[1]);
        setWork(workFound);
        const _photogallery = workFound?.photogallery.map((photo: any) => ({ src: photo.src }));
        setPhotogallery(_photogallery);
    }, [params.work]);

    return (
        <>
            <Lightbox
                open={openPhotogallery}
                close={() => setOpenPhotogallery(false)}
                slides={photogallery}
            />
            {/* <Lightbox
                open={openVideogallery}
                close={() => setOpenVideogallery(false)}
                slides={videogallery}
            /> */}

            {!work && (<div className="flex items-center justify-center text-3xl grow">
                <div className="text-center">
                    <p>Sorry, page not found</p>
                    <Link href="/pages/works" className="hover:underline">⬅ Back to works </Link>
                </div>

            </div>)}
            <div className="">
            </div>

            {work && (
                <div className="m-6 space-y-8 pb-40">
                <Link href="/pages/works" className="hover:underline font-Nunito">⬅ Back to works </Link>

                    <h1 className="text-lg font-bold sm:text-3xl">{work.title}</h1>
                    <h2 className="text-lg sm:text-xl">{work.autore}</h2>
                    {/* <video className="w-1/2" src={work.src} controls ></video> */}
                    <div className="relative w-full min-h-[24rem] md:min-h-[36rem]">
                        <iframe
                            title={work.title}
                            src={`https://player.vimeo.com/video/${work.srcVideoPrincipaleWork}?controls=1&app_id=58479`}
                            style={{  zIndex:"10", position: "absolute", width: "100%", height: "100%", objectFit: "cover", inset: "0px" }}
                            allowFullScreen
                        ></iframe>
                        <div className="absolute animate-blob top-0 bg-[#B37854] left-20 rounded-full w-96 h-96 mix-blend-multiply blur-2xl filter opacity-70"></div>
                        <div className="absolute animate-blob2 bg-[#D5BD98] right-20 rounded-full w-96 h-96 mix-blend-multiply opacity-70 blur-2xl filter "></div>
                        <div className="absolute animate-blob2  bg-[#756D68] left-0 bottom-0 rounded-full w-96 h-96 opacity-70 mix-blend-multiply blur-2xl filter "></div>
                        <div className="absolute animate-blob  bg-[#bd9e8b] right-36 bottom-0 rounded-full w-96 h-96 opacity-70 mix-blend-multiply blur-2xl filter "></div>
                    </div>
                    <h3 className="font-bold leading-relaxed">{work.descrizione}</h3>
                    {/* PhotoGallery */}
                    <div className="grid grid-cols-3 gap-10 mx-auto">
                        {work.photogallery && (work.photogallery.map((photo: any, key: number) => (
                            <div key={key} className="relative mx-auto shadow-xl h-[350px] w-full">
                                <Image fill={true} objectFit="cover" onClick={() => setOpenPhotogallery(!openPhotogallery)} src={photo.src} alt={photo.title} />
                            </div>
                        )))}
                    </div>

                    {/* VideoGallery */}
                    <div className="grid grid-cols-3 gap-10 mx-auto">
                        {work.videoGallery && (work.videoGallery.map((video: any, key: number) => (
                            <div key={key} className="relative mx-auto  h-[350px] w-full">
                                <iframe
                                    title={video.title}
                                    src={`https://player.vimeo.com/video/${video.src}?autoplay=0&loop=1&muted=1&controls=1&#t=0m0s&app_id=58479&quality=240p`}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                ></iframe>

                            </div>
                        )))}
                    </div>

                    <h4 className="font-bold">{work.title + " / "} <span className="font-normal">{work.autore}</span></h4>
                    <div className="pt-4 ">
                        {work.credits && (work.credits.map((credit: any, key: number) => (
                            <p className="" key={key}>{credit.nome + " - "}
                                <span className="">{credit.ruolo}</span>
                            </p>
                        )))}
                    </div>
                </div>
            )}
        </>
    )
};

