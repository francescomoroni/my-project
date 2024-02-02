import Image from 'next/image';
import Link from 'next/link';
import { works } from '../../data/data';

export default function Home() {
	return (
		<>
			<div className='grid grid-cols-1 pb-40 mx-4 my-8 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 xl:gap-x-20 xl:gap-y-32 sm:mx-8'>
				{works.map((work, key) => {
					return (
						<div className='flex flex-col' key={key}>
							<Link
								href={`/pages/works/work/${work.linkPage}`}
								className='relative mx-auto h-[18rem] xl:h-[24rem] w-full group'
							>
								<Image
									className='object-cover w-full h-full transition duration-300 ease-in-out transform shadow-2xl group-hover:shadow-3xl '
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									blurDataURL={work.srcWorkPageImg}
									src={work.srcWorkPageImg}
									alt={work.titleWorkPage}
								/>
							</Link>

							<Link
								href={`/pages/works/work/${work.linkPage}`}
								key={key}
							>
								<h1 className='pt-8 pl-2 uppercase transition-all duration-300 ease-in-out transform cursor-pointer group-hover:line-through sm:text-lg md:text-xl'>
									{work.titleWorkPage}
								</h1>
							</Link>
						</div>
					);
				})}
			</div>
		</>
	);
}

{
	/* <img className="object-cover w-full max-w-2xl transition shadow-lg cursor-pointer aspect-video sm:aspect-square hover:shadow-xl" src={work.srcWorkPageImg} alt={work.titleWorkPage} /> */
}
{
	/* <iframe
                title={work.title}
                src={`https://player.vimeo.com/video/${work.src}?autoplay=0&loop=1&muted=1&controls=0&#t=0m0s&app_id=58479&quality=240p`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></iframe> */
}
