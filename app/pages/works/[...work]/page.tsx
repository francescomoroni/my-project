"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {works} from "../../../data/data";


export default function Page({ params }: { params: { work: string[] } }) {
    const [work, setWork] = useState({} as any);
    const [photogallery, setPhotogallery] = useState([] as any);
    // const [videogallery, setVideogallery] = useState([] as any);
    const [openPhotogallery, setOpenPhotogallery] = useState(false);
    // const [openVideogallery, setOpenVideogallery] = useState(false);


    useEffect(() => {

        const workFound = works.find((lavoro) => lavoro.id === params.work[1]);
        setWork(workFound);
        const _photogallery = workFound!.photogallery.map((media: any) => ({ src: media.src }));
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
                    <Link href="/pages/works">⬅ Back to works </Link>
                </div>

            </div>)}

            {work && (
                <div className="m-6 space-y-8">
                    <h2 className="text-lg font-bold sm:text-xl">{work.title}</h2>
                    <h2 className="text-lg sm:text-xl">{work.autore}</h2>
                    {/* <video className="w-1/2" src={work.src} controls ></video> */}
                    <div className="relative w-full min-h-[24rem] md:min-h-[36rem]">
                        <iframe
                            title={work.title}
                            src={`https://player.vimeo.com/video/${work.srcVideoPrincipaleWork}?controls=1&app_id=58479`}
                            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", inset: "0px" }}
                        ></iframe>
                    </div>
                    <h3 className="font-bold leading-relaxed">{work.descrizione}</h3>
                    {/* PhotoGallery */}
                    <div className="grid grid-cols-3 gap-10 mx-auto">
                        {work.photogallery && (work.photogallery.map((photo: any, key: number) => (
                            <div key={key} className="relative mx-auto shadow-xl h-[350px] w-full">
                                {photo.tipo === "img" && (
                                    <Image fill={true} objectFit="cover" onClick={() => setOpenPhotogallery(!openPhotogallery)} src={photo.src} alt={photo.title} />
                                )}
                                {/* {photo.tipo === "video" && (
                                    <video className="object-cover w-full" src={photo.src} controls ></video>
                                )} */}
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
                    <div className="pt-4">
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

