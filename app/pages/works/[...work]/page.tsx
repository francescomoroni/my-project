"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { works } from "../../../data/data";


export default function Page({ params }: { params: { work: string[] } }) {
    const [work, setWork] = useState({} as any);
    const [photogallery, setPhotogallery] = useState([] as any);
    // const [videogallery, setVideogallery] = useState([] as any);
    const [openPhotogallery, setOpenPhotogallery] = useState(false);
    // const [openVideogallery, setOpenVideogallery] = useState(false);
    const thumbnailsRef = useRef(null);


    useEffect(() => {

        const workFound = works.find((work) => work.linkPage === params.work[1]);
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
                plugins={[Thumbnails]}
                thumbnails={{width: 200, height: 200, borderColor: "black"}}
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

            {works[work.id - 1] && (
                <Link href={`/pages/works/work/${works[work.id - 1].linkPage}`} className="hidden sm:block fixed z-10 hover:line-through uppercase -rotate-90 top-1/2  -translate-y-1/2 text-lg">
                    {works[work.id - 1].title}
                </Link>
            )}

            {works[work.id + 1] && (
                <Link href={`/pages/works/work/${works[work.id + 1].linkPage}`} className="hidden sm:block fixed z-10 hover:line-through rotate-90 uppercase  top-1/2 right-2 -translate-y-1/2 text-lg ">
                    {works[work.id + 1].title}
                </Link>
            )}

            {work && (
                <div className="m-6 space-y-12 pt-4 sm:pt-10 pb-40">
                    {/* <Link href="/pages/works" className="hover:underline font-Nunito">⬅ Back to works </Link> */}

                    <h1 className="text-2xl font-bold sm:text-3xl lg:text-5xl uppercase">{work.title}</h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase">{work.autore}</h2>
                    {/* <video className="w-1/2" src={work.src} controls ></video> */}
                    <div className="relative w-full min-h-[24rem] md:min-h-[40rem]">
                        <iframe
                            title={work.title}
                            src={`https://player.vimeo.com/video/${work.srcVideoPrincipaleWork}?controls=1&app_id=58479`}
                            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", inset: "0px" }}
                            allowFullScreen
                        ></iframe>
                        {/* <div className="absolute animate-blob top-0 bg-[#B37854] left-20 rounded-full w-96 h-96 mix-blend-multiply blur-2xl filter opacity-70"></div>
                        <div className="absolute animate-blob2 bg-[#D5BD98] right-20 rounded-full w-96 h-96 mix-blend-multiply opacity-70 blur-2xl filter "></div>
                        <div className="absolute animate-blob2  bg-[#756D68] left-0 bottom-0 rounded-full w-96 h-96 opacity-70 mix-blend-multiply blur-2xl filter "></div>
                        <div className="absolute animate-blob  bg-[#bd9e8b] right-36 bottom-0 rounded-full w-96 h-96 opacity-70 mix-blend-multiply blur-2xl filter "></div> */}
                    </div>
                    <h3 className="font-bold leading-relaxed uppercase">{work.descrizione}</h3>
                    {/* PhotoGallery */}
                    <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto">
                        {work.photogallery && (work.photogallery.map((photo: any, key: number) => (
                            <div key={key} className="relative mx-auto shadow-xl h-[16rem] w-full">
                                <Image fill={true} className="object-cover cursor-pointer" onClick={() => setOpenPhotogallery(!openPhotogallery)} src={photo.src} alt={photo.title} />
                            </div>
                        )))}
                    </div>

                    {/* VideoGallery */}
                    <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mx-auto">
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

                    <h4 className="font-bold md:text-xl uppercase">{work.title + " / "} <span className="font-normal uppercase">{work.autore}</span></h4>
                    <div className="">
                        {work.credits && (work.credits.map((credit: any, key: number) => (
                            <p className="md:text-lg" key={key}>{credit.ruolo + ": "}
                                <span className="">{credit.nome}</span>
                            </p>
                        )))}
                    </div>

<div className="flex justify-between items-center">

                    {works[work.id - 1] && (
                        <Link href={`/pages/works/work/${works[work.id + 1].linkPage}`} className="sm:hidden block z-10 hover:line-through uppercase text-lg text-left">
                            ⬅ {works[work.id - 1].title}
                        </Link>
                    )}

                    {works[work.id + 1] && (
                        <Link href={`/pages/works/work/${works[work.id + 1].linkPage}`} className="sm:hidden block z-10 hover:line-through uppercase text-lg text-right">
                             {works[work.id + 1].title} ⮕
                        </Link>
                    )}
                    </div>
                </div>
            )}
        </>
    )
};

