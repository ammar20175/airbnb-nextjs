import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default function Home({ exploreData, cardsData }) {
	console.log(exploreData);
	return (
		<div className="">
			<Head>
				<title>Airbnb</title>
			</Head>

			<Header />

			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map(({ img, location, distance }) => (
							<SmallCard
								key={img}
								img={img}
								location={location}
								distance={distance}
							/>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

					<div className="flex space-x-3 p-3 -ml-3 overflow-scroll overflow-y-hidden scrollbar-hide scroll-smooth">
						{cardsData?.map(({ img, title }) => (
							<MediumCard key={img} img={img} title={title} />
						))}
					</div>
				</section>

				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Greatest Outdoors"
					description="Wishlists curated by Airbnb"
					buttonText="Get Inspired"
				/>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
		(res) => res.json()
	);

	const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
		(res) => res.json()
	);

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
