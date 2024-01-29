"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



export default function Page({ params }: { params: { work: string[] } }) {
    const [work, setWork] = useState({} as any);
    const [medias, setMedias] = useState([] as any);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const dbLavori = [
            {
                id: "Kaleidoshoc",
                titolo: "Kaleidoshoc",
                autore: "ROGER VIVIER",
                srcVideoPrincipale: "/0.mp4",
                descrizione: "EMBARK ON A CINEMATIC JOURNEY WITH ROGER VIVIER'S 'KALEIDOSHOCK', DRAWING INSPIRATION FROM KINETIC ART AND CLUZOT'S CINEMA. ACTRESS CAMILLE RAZAT UNVEILS THE VIV' CHOC COLLECTION, WITH MESMERIZING LIGHT PLAY AND KALEIDOSCOPIC REFLECTIONS SHOWCASING THE BAG'S EVER-CHANGING PATTERNS. EXPERIENCE CRAFTSMANSHIP AND CREATIVITY IN A VISUAL SPECTACLE.",
                medias: [
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
                titolo: "FENDI X HIGH SNOBIETY",
                autore: "Ryuij Imaichi",
                srcVideoPrincipale: "/0.mp4",
                descrizione: "",
                medias: [
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
                titolo: "",
                autore: "",
                srcVideoPrincipale: "",
                descrizione: "",
                medias: [
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
        const _medias = workFound!.medias.map((media: any) => ({src:media.src}));
        setMedias(_medias);
    }, [params.work]);

    return (
        <>
            {!work && (<div className="flex items-center justify-center text-3xl grow">
                <div className="text-center">
                    <p>Sorry, page not found</p>
                    <Link href="/pages/works">⬅ Back to works </Link>
                </div>

            </div>)}

            {work && (
                <div className="m-6 space-y-8">
                    <p className="text-lg font-bold sm:text-xl">{work.titolo}</p>
                    <p className="text-lg sm:text-xl">{work.autore}</p>
                    <video className="w-1/2" src={work.srcVideoPrincipale} controls ></video>
                    <p className="font-bold leading-relaxed">{work.descrizione}</p>
                    <div className="grid grid-cols-3 gap-10 mx-auto">
                        {work.medias && (work.medias.map((media: any, key: number) => (
                            <div key={key} className="relative mx-auto bg-red-500 h-[350px] w-full">
                                {media.tipo === "img" && (
                                    <Image fill={true} objectFit="cover" onClick={() => setOpen(!open)}  src={media.src} alt="" />
                                )}
                                {/* className="object-cover w-full" */}
                                {media.tipo === "video" && (
                                    <video className="object-cover w-full" src={media.src} controls ></video>
                                )}
                            </div>
                        )))}
                    </div>

                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={medias}
                    />

                    <p className="font-bold">{work.titolo + " / "} <span className="font-normal">{work.autore}</span></p>
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

