import React, { useState, useEffect } from 'react';
import { fetchDevices } from './services/deviceService';
import CustomizedTable from './components/CustomizedTable';
import Alert from './components/Alert';
import './App.css';

const App = () => {
  const [devices, setDevices] = useState([]);
  const [notif, setNotif] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchDevices();
      setDevices(data);
    } catch (e) {
      setNotif({ severity: 'error', message: e.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {notif && <Alert severity={notif.severity} message={notif.message} />}
      <CustomizedTable devices={devices} />
    </div>
  );
}

export default App;
