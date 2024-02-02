'use client';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import { homepage } from './data/data';

export default function Home() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	//indice del video corrente che sta playando
	const [currentIndex, setCurrentIndex] = useState(1);
	// quando il primo video si è caricato
	// carica anche gli altri N video
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 1000);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % homepage.length,
			);
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	const nextSlide = () => {
		setCurrentIndex(((currentIndex + 1) % 3) + 1)
	}


	return (
		<>
			{/* Header */}
			<div className='fixed z-10 w-full'>
				<Topbar />
			</div>

			{/* Video Centrale */}
			<div
				onClick={() => setCurrentIndex(((currentIndex + 1) % 3) + 1)}
				className='relative w-screen h-screen overflow-hidden bg-black cursor-pointer'
			>
				<div className='absolute inset-0 bg-black/30'></div>

				<video
					src='video.mp4'
					autoPlay
					loop
					muted
					playsInline
					className={`object-cover w-full h-full ${currentIndex !== 1 ? 'hidden' : ''
						}`}
						onLoadedData={()=>{console.log("loaded1")}}
						poster='/bbItalia/bb (1).png'


				></video>

				{isLoaded ? (
					<>
						<video
							src='video2.mp4'
							autoPlay
							loop
							muted
							playsInline
							className={`object-cover w-full h-full ${currentIndex !== 2 ? 'hidden' : ''
								}`}
								onLoadedData={()=>{console.log("loaded2")}}
							poster='/bbItalia/bb (1).png'
						></video>

						<video
							src='video3.mp4'
							autoPlay
							loop
							muted
							playsInline
							className={`object-cover w-full h-full ${currentIndex !== 3 ? 'hidden' : ''
								}`}
								onLoadedData={()=>{console.log("loaded3")}}
								poster='/bbItalia/bb (1).png'

						></video>
					</>
				) : null}


			</div>

			{/* Titolo video */}
			<h1
				onClick={nextSlide}
				className='fixed cursor-pointer text-right text-white uppercase right-6 bottom-1/3 sm:right-10 sm:top-1/2  sm:text-2xl '
			>
				{homepage[currentIndex - 1].title}
			</h1>

			{/* Footer */}
			<div className='fixed bottom-0 w-full'>
				<Footer />
			</div>
		</>
	);
}

//"bg-[url('/img/hero-pattern.svg')]"

// <video poster="/logo.png" onClick={nextSlide} autoPlay loop muted playsInline src={`${currentImageIndex}.mp4`} className="object-cover w-full h-full"></video>
// src="https://player.vimeo.com/video/694426484?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

{
	/*<iframe
		  onClick={nextSlide}
		  title={homepage[currentImageIndex].title}
		  src={`https://player.vimeo.com/video/${homepage[currentImageIndex].srcVideo}?autoplay=1&loop=1&muted=1&controls=0&#t=0m0s&app_id=58479&quality=240p`}
		  style={{ position:"absolute", width: "100%", height: "100%", objectFit: "cover", inset: "0px", border: "none"}}
		  width={"100%"} height={"100%"} frameBorder="0"
		></iframe>*/
}

{
	/* <div className="relative h-screen w-screen bg-gray-300 overflow-hidden bg-[url('https://player.vimeo.com/video/694426484?background=1&app_id=58479')]">

	  </div>  */
}

{/* <video
					autoPlay
					loop
					preload='none'
					muted
					playsInline
					src='video2.mp4'
					className='object-cover w-full h-full'
				></video> */}

{/* <Image alt="" fill={true} onClick={nextSlide} className="object-cover"  src={`/${currentImageIndex}.webp`} ></Image> */ }

{/* <MuxPlayer
					streamType='on-demand'
					playbackId='wtcsOwZ3kuakwsJxOYl402tagjgI7ifNNLK100ZxCHTrI'
					metadataVideoTitle='Placeholder (optional)'
					metadataViewerUserId='Placeholder (optional)'
					primaryColor='#FFFFFF'
					secondaryColor='#000000'
					className='object-cover w-full h-full'
					metadata={{
						video_id: 'video-id-54321',
						video_title: 'Test video title',
						viewer_user_id: 'user-id-007',
					}}
					style={{}}
				/> */}