import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  // Sample data for live consumption chart
  const data = {
    labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: [20, 35, 40, 50, 45, 30],
        fill: false,
        backgroundColor: 'rgb(75,192,192)',
        borderColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Coordinates for Nagpur
  const position = [21.1458, 79.0882];

  return (
    <div>
      <h2>Energy Dashboard - Nagpur</h2>
      <MapContainer center={position} zoom={12} style={{ height: '300px', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Nagpur City Center
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{ marginTop: '20px' }}>
        <h3>Live Energy Consumption</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
