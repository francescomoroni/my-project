export default function Home() {
  const oggetti = [
    {
      testo: "Carhartt — Yoji Tokuyoshi",
      src: "https://www.c41.eu/wp-content/uploads/2023/12/000000010001.jpg"
    },
    {
      testo: "Fornasetti — Christmas 23",
      src: "https://www.c41.eu/wp-content/uploads/2023/12/AS-FORNASETTI-4-033.jpeg"
    },
    {
      testo: "FUERA — MARIPOSA",
      src: "https://www.c41.eu/wp-content/uploads/2023/11/Comp-10490.jpg"
    },
    {
      testo: "Colorobbia — The shades of water",
      src: "https://www.c41.eu/wp-content/uploads/2023/10/colorobbia___shades_of_water___filippo_raineri_dc-1080p1747.jpg"
    },
    {
      testo: "Adidas — FW23",
      src: "https://www.c41.eu/wp-content/uploads/2023/09/ADIDAS_60-_c411373.jpg"
    },
    {
      testo: "Pinoquo",
      src: "https://www.c41.eu/wp-content/uploads/2023/09/Pinoquo.jpg"
    },
    {
      testo: "Bottega Veneta — Craft in Motion",
      src: "https://www.c41.eu/wp-content/uploads/2023/09/Thumbnail.jpg"
    },
    {
      testo: "Choco Hoax",
      src: "https://www.c41.eu/wp-content/uploads/2023/09/Screenshot-2023-09-15-at-14.49.42-copy.jpg"
    },
    {
      testo: "Sunglass hut — Summer23",
      src: "https://www.c41.eu/wp-content/uploads/2023/05/sunglasshut_thumbanail.jpg"
    },
    {
      testo: "Kokke — The art of Sitting",
      src: "https://www.c41.eu/wp-content/uploads/2020/05/01.jpg"
    },
    {
      testo: "Fornasetti — The Syntax of Making",
      src: "https://www.c41.eu/wp-content/uploads/2023/05/FORNASETTI_GIARDINO_1920x1080_LOGO_1555.jpg"
    },
    {
      testo: "Formafantasma x Euroluce 2023 — Aurore",
      src: "https://www.c41.eu/wp-content/uploads/2023/05/caizzi_aurore_euroluce_formafantasma_009.jpeg"
    },
    {
      testo: "Adidas — New Shifted Generation⁣",
      src: "https://www.c41.eu/wp-content/uploads/2023/04/thumbnail.jpg"
    },
    {
      testo: "Tacchini — Flock",
      src: "https://www.c41.eu/wp-content/uploads/2023/04/Tacchini_Flock_Trailer_ONLINE_10592.jpg"
    },
    {
      testo: "Rimowa — Nylon backpack",
      src: "https://www.c41.eu/wp-content/uploads/2023/04/5x4_101_Rimowa-ARCH-15s192.jpg"
    },
    {
      testo: "THE NORTH FACE X ZALANDO — HERITAGE COLLECTION",
      src: "https://www.c41.eu/wp-content/uploads/2023/03/012_Zalando_Heritage_1746.jpg"
    },
    {
      testo: "RAY-BAN — META",
      src: "https://www.c41.eu/wp-content/uploads/2023/03/9.jpg"
    },
    {
      testo: "DR. MARTENS — NU SOULS",
      src: "https://www.c41.eu/wp-content/uploads/2023/03/DR-MARTENS-ONLINE.00_00_14_22.Immagine004.jpg"
    },
    {
      testo: "THE NORTH FACE — FLEECES",
      src: "https://www.c41.eu/wp-content/uploads/2023/02/TNF_FLEECES-PROJECT2220.jpg"
    },
    {
      testo: "C41 x LC23 — Basic Collection",
      src: "https://www.c41.eu/wp-content/uploads/2023/01/000000190015-copia-2.jpg"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 mx-4">
        {oggetti.map((oggetto, key) => {
          return (
            <div key={key} className="w-full">
              <img className="transition cursor-pointer object-cover w-full aspect-square hover:shadow-lg" src={oggetto.src} alt="" />
              <p className="uppercase pt-4 md:pt-8 pb-12 cursor-pointer md:text-xl md:pb-24">{oggetto.testo}</p>
            </div>
          )
        }
        )}
      </div>

    </>

  )
}
