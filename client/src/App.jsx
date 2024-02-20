import React, { useState, useEffect } from 'react';
import deviceService from './services/deviceService';
import './App.css';

const App = () => {
  const [devices, setDevices] = useState([]);

  const fetchData = async () => {
    try {
      const data = await deviceService.fetchDevices();
      setDevices(data);
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
