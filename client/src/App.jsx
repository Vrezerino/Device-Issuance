import React, { useState, useEffect } from 'react';
import { fetchDevices } from './services/deviceService';
import CustomizedTable from './components/CustomizedTable';
import IssueForm from './components/IssueForm';
import Alert from './components/Alert';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [devices, setDevices] = useState([]);
  const [notif, setNotif] = useState(null);
  const [addIssue, setAddIssue] = useState(null); // For toggling the form of device issue.
  const onClick = () => setAddIssue(true); // Toggler func for 'Add Device' button.

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
    <div className='App'>
      <h1>Device Issuance — ICT Team</h1>
      <h3>All issues</h3>
      {notif && <Alert severity={notif.severity} message={notif.message} />}
      <CustomizedTable devices={devices} /><br />
      <Button text='New Issue' handleClick={onClick} />

      {addIssue && <IssueForm handleClick={setAddIssue} setNotif={setNotif} setDevices={setDevices}/>}
    </div>
  );
}

export default App;
