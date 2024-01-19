import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

export default function Page() {
  return (
    <APIProvider apiKey={"YOUR_API_KEY"}>
      <Geocoding />
    </APIProvider>
  );
}

function Geocoding() {
  const geocodingLibrary = useMapsLibrary("geocoding");
  useEffect(() => {
    if (!geocodingLibrary) return;

    const geocoder = new geocodingLibrary.Geocoder();
    // ...
  }, [geocodingLibrary]);
}
