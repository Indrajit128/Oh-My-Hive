import React, { useState } from 'react';

const CarbonCalculator = () => {
  const [energyUsed, setEnergyUsed] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const calculateCarbonFootprint = () => {
    // Simple calculation: 0.92 kg CO2 per kWh (example factor)
    const footprint = parseFloat(energyUsed) * 0.92;
    setCarbonFootprint(footprint.toFixed(2));
  };

  return (
    <div>
      <h2>Carbon Footprint Calculator</h2>
      <input
        type="number"
        placeholder="Enter energy used (kWh)"
        value={energyUsed}
        onChange={(e) => setEnergyUsed(e.target.value)}
      />
      <button onClick={calculateCarbonFootprint}>Calculate</button>
      {carbonFootprint !== null && (
        <p>Your estimated carbon footprint is {carbonFootprint} kg CO2</p>
      )}
    </div>
  );
};

export default CarbonCalculator;
