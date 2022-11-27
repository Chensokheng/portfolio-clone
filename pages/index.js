import React from "react";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Images from "../components/Images";
import Social from "../components/Social";

export default function Home() {
	return (
		<>
			<div className="bg-black h-screen">
				<div className="fixed inset-0 max-w-6xl mx-auto h-screen border-l border-r border-zinc-700 bg-primary p-24 text-white "></div>

				<div className="max-w-6xl mx-auto relative p-5 sm:px-24">
					<Navbar />
					<div className="max-w-2xl flex flex-col gap-5 mt-20">
						<div className="relative w-16 h-16">
							<Image
								src="/profile.jpg"
								fill
								alt=""
								className="object-center object-cover rounded-full"
							/>
						</div>

						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
							Software Developer, Youtuber, and part time
							traveler.
						</h1>
						<p className=" text-zinc-400 text-base">
							{
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
							}
						</p>
						<Social />
					</div>
				</div>
				<Images />
			</div>
		</>
	);
}
