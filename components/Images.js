import Image from "next/image";
import React from "react";

export default function Images() {
	const images = [
		{
			src: "/img.jpg",
			rotate: "-rotate-3",
		},
		{
			src: "/img2.jpg",
			rotate: "rotate-3",
		},
		{
			src: "/img3.jpg",
			rotate: "rotate-3",
		},
		{
			src: "/img4.jpg",
			rotate: "-rotate-3",
		},
		{
			src: "/img5.jpg",
			rotate: "rotate-3",
		},
	];

	return (
		<div className=" mt-20 flex justify-center items-center gap-10 relative overflow-hidden h-96">
			{images.map(({ src, rotate }, index) => {
				return (
					<div
						className={`aspect-4  w-72 h-80 rounded-lg relative ${rotate}`}
						key={index}
					>
						<Image
							src={src}
							fill={true}
							alt=""
							className="rounded-lg object-cover object-center hover:scale-110 transition-all"
						/>
					</div>
				);
			})}
		</div>
	);
}
