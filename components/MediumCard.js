import Image from "next/image";

export default function MediumCard({ img, title }) {
	return (
		<div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
			<div className="relative h-80 w-80">
				<Image src={img} fill className="rounded-xl" />
			</div>

			<h3>{title}</h3>
		</div>
	);
}
