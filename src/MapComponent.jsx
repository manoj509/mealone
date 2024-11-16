import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  // State to store the user's location
  const [currentLocation, setCurrentLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco

  useEffect(() => {
    // Check if geolocation is available and get the user's current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error retrieving location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentLocation} // Set center to current location
      >
        <Marker position={currentLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
