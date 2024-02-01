'use client';
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pb-40 space-y-8 container mx-auto text-justify">
            <div className="">
                <Link href="/pages/works" className="hover:underline font-Nunito">⬅ Back to works </Link>
            </div>
            {/* Nunito: ["Nunito Sans", "sans-serif"],
        Caslon: ["Libre Caslon Text", "serif"],
        Lusitana: ["Lusitana", "serif"], */}
            <h1 className="text-4xl lg:text-6xl font-Lusitana">Who we are ?</h1>
            <h1 className=" text-4xl lg:text-6xl font-Dancing italic font-medium">Who we are ?</h1>
            <h1 className=" text-4xl lg:text-6xl font-bebas">Who we are ?</h1>

            <p className=" lg:text-lg uppercase font-Nunito">Enterprise</p>
            <h2 className="text-4xl lg:text-6xl font-Lusitana">We are a regista bravo bravissimo </h2>
            <h2 className="text-4xl lg:text-6xl font-Pacifico">We are a regista bravo bravissimo </h2>


            <p className="text-lg lg:text-xl">
                Welcome to Our Studio in Nantes At Feline Studio, we are passionate about capturing moments and telling stories through the lens of a camera. Located in the heart of the vibrant city of Nantes, our studio is a creative hub where visionaries, photographers, and filmmakers come together to bring ideas to life. </p>
            <Image className="mx-auto py-8" width={500} height={300} src="/logo.png" alt="" />
            <p className="titolo font-Nunito text-lg font-bold">
                Our Vision
            </p>
            <p className="text-lg lg:text-xl">
                We believe that every image should have a narrative, every frame should convey emotion, and every video should leave a lasting impression. With a team of talented photographers and filmmakers, we strive to make every project a masterpiece. Whether it's a captivating fashion shoot, a heartwarming family portrait, or a thought-provoking documentary, we pour our hearts into every project we undertake.
            </p>

            <p className=" titolo font-Nunito text-lg font-bold">

                Meet Our Team
            </p>
            <p className="text-lg lg:text-xl">
                Our studio is home to a diverse and dedicated team of professionals who are committed to excellence. From our visionary directors to our skilled photographers and videographers, we collaborate seamlessly to deliver exceptional results. We value creativity, innovation, and the pursuit of perfection in all that we do.
            </p>
            <p className="titolo font-Nunito text-lg font-bold">

                Our Nantes Connection
            </p>
            <p className="text-lg lg:text-xl">
                Nantes is more than just a location for us; it&apos;s an endless source of inspiration. The rich culture, stunning landscapes, and dynamic people of Nantes continuously influence our work. We are proud to call this beautiful city our home and draw inspiration from its essence.
            </p>
            <p className=" titolo font-Nunito text-lg font-bold">
                Join Us on Our Journey
            </p>
            <p className="text-lg lg:text-xl"> 
                We invite you to explore our portfolio and discover the stories we&apos;ve had the privilege to tell. Whether you&apos;re looking for a photography session, a cinematic experience, or a creative collaboration, we're excited to be part of your creative journey. Thank you for choosing our studio. We can't wait to create something beautiful together.</p>
            <Image className="mx-auto py-8" width={500} height={300} src="/soul_twins/soul (1).jpg" alt="" />
        </div>
    );
}
