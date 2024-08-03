import React from 'react';
import Map from './components/Map';
import './styles.css';

const appStyles = {
  backgroundColor: '#E2DFD0',
  color: '#32012F',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  transition: 'background-color 0.3s ease',
};

const containerStyles = {
  backgroundColor: '#F97300',
  color: '#524C42',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px auto',
  maxWidth: '800px',
  transition: 'transform 0.3s ease',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

const mapSectionStyles = {
  marginTop: '20px',
  borderRadius: '8px',
  padding: '10px',
  backgroundColor: '#524C42',
  color: '#E2DFD0',
  transition: 'transform 0.3s ease',
};

// const hoverEffect = {
//   ':hover': {
//     backgroundColor: '#F97300',
//     transform: 'scale(1.02)',
//   }
// };

const App = () => {
  return (
    <div style={appStyles}>
      <h1>Vehicle Tracking</h1>
      <Map />
      <div style={containerStyles}>
        <h1>Vehicle Tracking System</h1>
        <p>
          A vehicle tracking system allows you to monitor the real-time location of a vehicle using GPS technology. By integrating with mapping services such as Google Maps, you can visualize the vehicle's location on a map, track its movement, and view its route.
        </p>
        <p>
          The tracking system uses location data obtained from the vehicle's GPS device and displays it on a map. Key features of such a system include:
        </p>
        <ul>
          <li><strong>Real-Time Location:</strong> Monitor the current position of the vehicle on the map.</li>
          <li><strong>Movement Tracking:</strong> Observe the vehicle's movement along its route.</li>
          <li><strong>Route Visualization:</strong> Display the route taken by the vehicle, highlighting the path traveled.</li>
          <li><strong>Historical Data:</strong> Access historical tracking data to review past trips and routes.</li>
        </ul>
        <div style={mapSectionStyles}>
          <h2>Example Map View</h2>
          <p>
            Above is a simulated example of how the vehicle tracking information would be displayed on a map. The map shows the vehicle's current location and the path it has taken.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
