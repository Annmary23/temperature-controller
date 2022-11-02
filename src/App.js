import React, { useState } from 'react';

function App() {
  const [temperatureValue, setTemperatureValue] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const incrementTemperature = () => {
    const newTemperature =temperatureValue + 1;

    if(newTemperature >= 20) {
      setTemperatureColor('hot');
    } 
     
    setTemperatureValue(newTemperature);
  };

  const decrementTemperature = () => {
    const newTemperature =temperatureValue - 1;

    if(newTemperature < 20) {
      setTemperatureColor('cold');
    } 
     
    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`} >
        {temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => incrementTemperature()}>+</button>
        <button onClick={() => decrementTemperature()}>-</button>
      </div>
    </div>
  );
}

export default App;
