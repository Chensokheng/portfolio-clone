import Link from "next/link";
import React from "react";

export default function Navbar() {
	const links = [
		{
			text: "About",
			path: "/about",
		},
		{
			text: "Article",
			path: "/article",
		},
		{
			text: "Projects",
			path: "/projects",
		},
		{
			text: "Speaking",
			path: "/Speaking",
		},
		{
			text: "Uses",
			path: "/uses",
		},
	];

	return (
		<nav className="flex justify-center items-center w-full">
			<div className=" text-zinc-400 flex gap-6 items-center shadow-md border border-zinc-700 rounded-full px-5 py-3 text-base bg-zinc-800">
				{links.map(({ text, path }, index) => {
					return (
						<Link
							key={index}
							className="hover:text-teal-500 cursor-pointer"
							href={path}
						>
							{text}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
