import Link from "next/link";

export default function Home() {
  const oggetti = [
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-16 my-8 mx-4 sm:mx-8">
        {oggetti.map((oggetto, key) => {
          return (
            <Link href={`/pages/works/work/${oggetto.link}`} key={key} className="w-full">
              <img className="transition cursor-pointer object-cover w-full max-w-2xl aspect-video sm:aspect-square shadow-lg hover:shadow-xl" src={oggetto.srcImg} alt="" />
              {/* <iframe
                title={oggetto.title}
                src={`https://player.vimeo.com/video/${oggetto.src}?autoplay=0&loop=1&muted=1&controls=0&#t=0m0s&app_id=58479&quality=240p`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></iframe> */}
              <p className="uppercase pt-4 md:pt-8 pb-4 cursor-pointer md:text-xl md:pb-12 hover:underline ">{oggetto.title}</p>
            </Link>
          )
        }
        )}
      </div>

    </>

  )
}
