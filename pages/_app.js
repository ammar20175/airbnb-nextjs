import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
const poppins = Poppins({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

const progress = new ProgressBar({
	size: 4,
	color: "#FE595E",
	className: "z-50",
	delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
	return (
		<main className={poppins.className}>
			<Component {...pageProps} />
		</main>
	);
}
