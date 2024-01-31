"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



export default function Page({ params }: { params: { work: string[] } }) {
    const [work, setWork] = useState({} as any);
    const [photogallery, setPhotogallery] = useState([] as any);
    const [videogallery, setVideogallery] = useState([] as any);
    const [openPhotogallery, setOpenPhotogallery] = useState(false);
    const [openVideogallery, setOpenVideogallery] = useState(false);


    useEffect(() => {
        const dbLavori = [
            {
                id: "Kaleidoshoc",
                title: "Kaleidoshoc",
                autore: "ROGER VIVIER",
                //src: "/0.mp4",
                src: "694426484",
                descrizione: "EMBARK ON A CINEMATIC JOURNEY WITH ROGER VIVIER'S 'KALEIDOSHOCK', DRAWING INSPIRATION FROM KINETIC ART AND CLUZOT'S CINEMA. ACTRESS CAMILLE RAZAT UNVEILS THE VIV' CHOC COLLECTION, WITH MESMERIZING LIGHT PLAY AND KALEIDOSCOPIC REFLECTIONS SHOWCASING THE BAG'S EVER-CHANGING PATTERNS. EXPERIENCE CRAFTSMANSHIP AND CREATIVITY IN A VISUAL SPECTACLE.",
                videoGallery: [
                    {
                        id: '1',
                        src: '694426484',
                        titolo: "ROGER VIVIER // KALEIDOSHOC FT. CAMILLE RAZAT",
                    },
                    {
                        id: '1',
                        src: '777528290',
                        titolo: "B&B ITALIA",
                    },
                    {
                        id: '1',
                        src: '794204338',
                        titolo: "HIGH SNOBIETY X FENDI",
                    },
                ],
                photogallery: [
                    {
                        id: "1",
                        src: "/Kaleidoshoc/Kaleidoshoc (1).jpeg",
                        tipo: "img",
                    },
                    {
                        id: "2",
                        src: "/Kaleidoshoc/Kaleidoshoc (2).jpeg",
                        tipo: "img",
                    },
                    {
                        id: "3",
                        src: "/Kaleidoshoc/Kaleidoshoc (3).jpeg",
                        tipo: "img",
                    },

                ],
                credits: [
                    {
                        "ruolo": "Project by",
                        "nome": "Feline Studio"
                    },
                    {
                        "ruolo": "Starring",
                        "nome": "Camille Razat"
                    },
                    {
                        "ruolo": "Director",
                        "nome": "Simone Yang"
                    },
                    {
                        "ruolo": "DA",
                        "nome": "Roberto Losurdo"
                    },
                    {
                        "ruolo": "Photographer",
                        "nome": "Marco Cella"
                    },
                    {
                        "ruolo": "Styling",
                        "nome": "Alba Melendo"
                    },
                    {
                        "ruolo": "Dop",
                        "nome": "Tomas Palombi"
                    },
                    {
                        "ruolo": "Camera",
                        "nome": "Marc-Eliel Chouraqui"
                    },
                    {
                        "ruolo": "1AC",
                        "nome": "Florian Pannetier"
                    },
                    {
                        "ruolo": "Gaffer",
                        "nome": "Jason Latour"
                    },
                    {
                        "ruolo": "Editor And Vfx",
                        "nome": "Denis Ripamonti"
                    },
                    {
                        "ruolo": "Music And Sound",
                        "nome": "Dario Tatoli"
                    },
                    {
                        "ruolo": "Ex. Producer",
                        "nome": "Castagna Floriana"
                    },
                    {
                        "ruolo": "Set Design",
                        "nome": "Marion Galtier"
                    },
                    {
                        "ruolo": "Assistant",
                        "nome": "Elise Puzos"
                    },
                    {
                        "ruolo": "Hair",
                        "nome": "Eduardo Bravo"
                    },
                    {
                        "ruolo": "Mua",
                        "nome": "Elodie Barrat"
                    },
                    {
                        "ruolo": "Hand Model",
                        "nome": "Elise Denys"
                    },
                    {
                        "ruolo": "Manucurist",
                        "nome": "Fanny Santarita"
                    },
                    {
                        "ruolo": "On Set Vfx",
                        "nome": "Claudio Spanu"
                    },
                    {
                        "ruolo": "Colorist",
                        "nome": "Cecilia Barbuti"
                    },
                    {
                        "ruolo": "Making of",
                        "nome": ""
                    },
                    {
                        "ruolo": "Service",
                        "nome": "@puzzlevideo"
                    }
                ]
            },
            {
                id: "SNOBIETY",
                title: "FENDI X HIGH SNOBIETY",
                autore: "Ryuij Imaichi",
                src: "/0.mp4",
                descrizione: "",
                videoGallery: [
                    {
                        id: '1',
                        src: '',
                        titolo: ''
                    },
                    {
                        id: '1',
                        src: '',
                        titolo: ''
                    },
                    {
                        id: '1',
                        src: '',
                        titolo: ''
                    },
                ],
                photogallery: [
                    {
                        id: "1",
                        src: "/Snobiety/Snobiety (1).jpg",
                        tipo: "img",
                    },
                    {
                        id: "10",
                        src: "/Snobiety/Snobiety (1).png",
                        tipo: "img",
                    },
                    {
                        id: "2",
                        src: "/Snobiety/Snobiety (2).png",
                        tipo: "img",
                    },
                    {
                        id: "3",
                        src: "/Snobiety/Snobiety (3).png",
                        tipo: "img",
                    },
                    {
                        id: "4",
                        src: "/Snobiety/Snobiety (4).png",
                        tipo: "img",
                    },
                    {
                        id: "5",
                        src: "/Snobiety/Snobiety (5).png",
                        tipo: "img",
                    },
                    {
                        id: "6",
                        src: "/Snobiety/Snobiety (6).png",
                        tipo: "img",
                    },
                    {
                        id: "7",
                        src: "/Snobiety/Snobiety (7).png",
                        tipo: "img",
                    },
                    {
                        id: "8",
                        src: "/Snobiety/Snobiety (8).png",
                        tipo: "img",
                    },
                    {
                        id: "9",
                        src: "/Snobiety/Snobiety (9).png",
                        tipo: "img",
                    },
                ],
                "credits": [
                    {
                        "ruolo": "A film by",
                        "nome": "Feline Studio"
                    },
                    {
                        "ruolo": "Directed by",
                        "nome": "Simone Yang"
                    },
                    {
                        "ruolo": "Camera",
                        "nome": "Eugenio Saravo"
                    },
                    {
                        "ruolo": "Edit & Post",
                        "nome": "Denis Ripamonti"
                    },
                    {
                        "ruolo": "Color Grading",
                        "nome": "Alexandre Nerzic"
                    },
                    {
                        "ruolo": "Sound",
                        "nome": "Vincenzo Pizzi"
                    },
                    {
                        "ruolo": "Executive",
                        "nome": "Luca Bonacina"
                    },
                    {
                        "ruolo": "Styling",
                        "nome": "Shun Colafato Shimizu"
                    },
                    {
                        "ruolo": "Makeup",
                        "nome": "Go Utsugi"
                    }
                ]

            },
            {
                id: "empty",
                title: "",
                autore: "",
                src: "",
                descrizione: "",
                videoGallery: [
                    {
                        id: '1',
                        src: '',
                        titolo: ''
                    },
                    {
                        id: '1',
                        src: '',
                        titolo: ''
                    },
                    {
                        id: '1',
                        src: '',
                        titolo: ''
                    },
                ],
                photogallery: [
                    {
                        id: "1",
                        src: "",
                        tipo: "img",
                    },
                    {
                        id: "2",
                        src: "",
                        tipo: "img",
                    },
                    {
                        id: "3",
                        src: "",
                        tipo: "img",
                    },

                ],
                "credits": [
                    {
                        "ruolo": "",
                        "nome": ""
                    },
                    {
                        "ruolo": " by",
                        "nome": ""
                    },
                    {
                        "ruolo": "",
                        "nome": ""
                    },
                    {
                        "ruolo": "",
                        "nome": ""
                    },
                    {
                        "ruolo": "",
                        "nome": ""
                    },
                    {
                        "ruolo": "",
                        "nome": ""
                    },
                    {
                        "ruolo": "",
                        "nome": ""
                    },
                    {
                        "ruolo": "",
                        "nome": ""
                    },
                    {
                        "ruolo": "",
                        "nome": ""
                    }
                ]

            },
        ];
        const workFound = dbLavori.find((lavoro) => lavoro.id === params.work[1]);
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
             <Lightbox
                open={openVideogallery}
                close={() => setOpenVideogallery(false)}
                slides={videogallery}
            />

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
                            src={`https://player.vimeo.com/video/${work.src}?controls=1&app_id=58479`}
                            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", inset: "0px" }}
                        ></iframe>
                    </div>
                    <h3 className="font-bold leading-relaxed">{work.descrizione}</h3>
                    {/* PhotoGallery */}
                    <div className="grid grid-cols-3 gap-10 mx-auto">
                        {work.photogallery && (work.photogallery.map((media: any, key: number) => (
                            <div key={key} className="relative mx-auto bg-red-500 h-[350px] w-full">
                                {media.tipo === "img" && (
                                    <Image fill={true} objectFit="cover" onClick={() => setOpenPhotogallery(!openPhotogallery)} src={media.src} alt="" />
                                )}
                                {/* {media.tipo === "video" && (
                                    <video className="object-cover w-full" src={media.src} controls ></video>
                                )} */}
                            </div>
                        )))}
                    </div>

                    {/* VideoGallery */}
                    <div className="grid grid-cols-3 gap-10 mx-auto">
                        {work.videoGallery && (work.videoGallery.map((media: any, key: number) => (
                            <div onClick={() => setOpenVideogallery(!openVideogallery)} key={key} className="relative mx-auto bg-red-500 h-[350px] w-full">
                                <iframe
                                    title={media.title}
                                    src={`https://player.vimeo.com/video/${media.src}?autoplay=0&loop=1&muted=1&controls=0&#t=0m0s&app_id=58479&quality=240p`}
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

