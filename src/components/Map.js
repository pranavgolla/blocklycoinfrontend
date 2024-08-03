import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 17.385044,
  lng: 78.486671,
};

const Map = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://blocklycoinbackend.onrender.com/api/vehicle');
        const data = await response.json();
        console.log(data); // Log the data to see if it's being fetched correctly
        if (data.length > 0) {
          setVehicleData(data);
        }
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };

    // Fetch data initially
    fetchData();
  }, []);

  useEffect(() => {
    if (vehicleData.length > 0) {
      // Update the position every second
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicleData.length);
      }, 1000);

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [vehicleData]);

  // Get the current position from the vehicle data
  const currentLocation = vehicleData.length > 0 ? {
    lat: vehicleData[currentIndex].latitude,
    lng: vehicleData[currentIndex].longitude,
  } : center;

  // Map the fetched data to the format required by the Polyline component
  const pathCoordinates = vehicleData.map((point) => ({
    lat: point.latitude,
    lng: point.longitude,
  }));

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={currentLocation} zoom={15}>
        {vehicleData.length > 0 && <Marker position={currentLocation} />}
        {vehicleData.length > 1 && <Polyline path={pathCoordinates} options={{ strokeColor: '#FF0000' }} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
