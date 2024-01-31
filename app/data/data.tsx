//In Home solo video caricati direttamente
//In Works solo immagini/GIF caricate direttamente
//In dettagli work Page: immagini caricate direttamente e video caricati su vimeo (no gallery video)

export const homepage = [
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

export const works = [
    {
        title: "ROGER VIVIER // KALEIDOSHOC FT. CAMILLE RAZAT",
        src: "694426484",
        srcImg: "https://www.c41.eu/wp-content/uploads/2023/12/000000010001.jpg",
        link: "Kaleidoshoc"
    },
    {
        title: "B&B ITALIA",
        src: "777528290",
        link: "SNOBIETY",
        srcImg: "https://www.c41.eu/wp-content/uploads/2023/12/AS-FORNASETTI-4-033.jpeg"
    },
    {
        title: "HIGH SNOBIETY X FENDI",
        src: "794204338",
        link: "test3",
        srcImg: "https://www.c41.eu/wp-content/uploads/2023/12/000000010001.jpg",

    },
    {
        title: "B&B ITALIA",
        src: "777528290",
        link: "SNOBIETY",
        srcImg: "https://www.c41.eu/wp-content/uploads/2023/12/AS-FORNASETTI-4-033.jpeg",


    },
    {
        title: "HIGH SNOBIETY X FENDI",
        src: "794204338",
        link: "test3",
        srcImg: "https://www.c41.eu/wp-content/uploads/2023/11/Comp-10490.jpg",


    },
    {
        title: "ROGER VIVIER // KALEIDOSHOC FT. CAMILLE RAZAT",
        src: "694426484",
        link: "Kaleidoshoc",
        srcImg: "https://www.c41.eu/wp-content/uploads/2023/11/Comp-10490.jpg",


    },

];

export const dbLavori = [
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

