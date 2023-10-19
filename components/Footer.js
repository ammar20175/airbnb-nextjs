function Footer() {
	return (
		<footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
			{/* first  */}
			<div className="space-y-4 text-sm text-gray-800 ">
				<h5 className="font-bold">ABOUT</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			{/* second */}
			<div className="space-y-4 text-sm text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Accessibility</p>
				<p>This is not a real site</p>
				<p>Its a pretty awesome clone</p>
				<p>Referral accepted</p>
				<p>Build by Ammar</p>
			</div>

			{/* third */}
			<div className="space-y-4 text-sm text-gray-800">
				<h5 className="font-bold">HOST</h5>
				<p>Nextjs</p>
				<p>Presents</p>
				<p>Zero to Full Stack Hero</p>
				<p>Hundreds of sites</p>
				<p>Book now</p>
			</div>

			{/* fourth */}
			<div className="space-y-4 text-sm text-gray-800">
				<h5 className="font-bold">SUPPORT</h5>
				<p>Help Center</p>
				<p>Trust & Safety</p>
				<p>Say Hi</p>
				<p>AirCover</p>
				<p>Cancellation options</p>
			</div>
		</footer>
	);
}

export default Footer;
