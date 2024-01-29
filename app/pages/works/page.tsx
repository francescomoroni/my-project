import Link from "next/link";

export default function Home() {
  const oggetti = [
    {
      testo: "Carhartt — Yoji Tokuyoshi",
      src: "https://www.c41.eu/wp-content/uploads/2023/12/000000010001.jpg",
      link: "Kaleidoshoc"
    },
    {
      testo: "Fornasetti — Christmas 23",
      src: "https://www.c41.eu/wp-content/uploads/2023/12/AS-FORNASETTI-4-033.jpeg",
      link: "SNOBIETY"
    },
    {
      testo: "FUERA — MARIPOSA",
      src: "https://www.c41.eu/wp-content/uploads/2023/11/Comp-10490.jpg",
      link: "test3"
    },
    {
      testo: "Colorobbia — The shades of water",
      src: "https://www.c41.eu/wp-content/uploads/2023/10/colorobbia___shades_of_water___filippo_raineri_dc-1080p1747.jpg",
      link: "test3"
    },
    {
      testo: "Adidas — FW23",
      src: "https://www.c41.eu/wp-content/uploads/2023/09/ADIDAS_60-_c411373.jpg",
      link: "test3"
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 mx-4">
        {oggetti.map((oggetto, key) => {
          return (
            <Link href={`/pages/works/work/${oggetto.link}`} key={key} className="w-full">
              <img className="transition cursor-pointer object-cover w-full aspect-square hover:shadow-lg" src={oggetto.src} alt="" />
              <p className="uppercase pt-4 md:pt-8 pb-12 cursor-pointer md:text-xl md:pb-24">{oggetto.testo}</p>
            </Link>
          )
        }
        )}
      </div>

    </>

  )
}
