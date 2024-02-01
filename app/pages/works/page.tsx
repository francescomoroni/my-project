import Link from "next/link";
import { works } from "../../data/data";
import Image from "next/image";

export default function Home() {


  return (
    <>
      <div className="pb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 xl:gap-x-20 xl:gap-y-32 my-8 mx-4 sm:mx-8">
        {works.map((work, key) => {
          return (

            <Link href={`/pages/works/work/${work.id}`} key={key} className="relative mx-auto h-[18rem] xl:h-[24rem] w-full group ">
              <Image
                className="w-full h-full object-cover shadow-2xl group-hover:shadow-3xl transition duration-300 ease-in-out transform "
                width={800}
                height={800}
                blurDataURL={work.srcWorkPageImg}
                src={work.srcWorkPageImg}
                alt={work.titleWorkPage} />
              <h1 className="group-hover:line-through transition-all duration-300 ease-in-out transform pt-8 pl-2 absolute uppercase cursor-pointer sm:text-lg md:text-xl ">{work.titleWorkPage}</h1>
            </Link>
          )
        }
        )}
      </div>

    </>

  )
}



{/* <img className="transition cursor-pointer object-cover w-full max-w-2xl aspect-video sm:aspect-square shadow-lg hover:shadow-xl" src={work.srcWorkPageImg} alt={work.titleWorkPage} /> */ }
{/* <iframe
                title={work.title}
                src={`https://player.vimeo.com/video/${work.src}?autoplay=0&loop=1&muted=1&controls=0&#t=0m0s&app_id=58479&quality=240p`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></iframe> */}