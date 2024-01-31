import Link from "next/link";
import { works } from "../../data/data";

export default function Home() {


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-16 my-8 mx-4 sm:mx-8">
        {works.map((oggetto, key) => {
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
