import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

function MapBox({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});

	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));

	const center = getCenter(coordinates);

	return (
		<Map
			mapStyle="mapbox://styles/ammar101/clnzozhnr00av01qv7lk8ab1p"
			mapboxAccessToken={process.env.MAPBOX_KEY}
			initialViewState={{
				latitude: center.latitude,
				longitude: center.longitude,
				zoom: 12,
			}}
			style={{ width: "100%", height: "100%" }}
		>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker longitude={result.long} latitude={result.lat}>
						<p
							onClick={() => setSelectedLocation(result)}
							role="img"
							className="cursor-pointer animate-bounce text-2xl"
							aria-label="push pin"
						>
							📌
						</p>
					</Marker>

					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={false}
							longitude={result.long}
							latitude={result.lat}
						>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</Map>
	);
}

export default MapBox;
