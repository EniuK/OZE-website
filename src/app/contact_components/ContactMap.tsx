import { Box } from "@mui/material";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

interface GoogleMapProps {
  apiKey: string;
}

const MapContainerStyle = {
  width: "100%",
  height: "400px",
};
const position = { lat: 53.169307708740234, lng: 23.062885284423828 };
const ContactMap = () => {
  const key = "AIzaSyBSNzfsJFbBl3dCnEMgTxC172twvEPutGA";
  return (
    <Box>
      <APIProvider apiKey={key}>
        <Map
          center={position}
          zoom={15}
          style={{ width: "500px", height: "500px" }}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </Box>
  );
};

export default ContactMap;
