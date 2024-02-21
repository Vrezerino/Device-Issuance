import React, { useState, useEffect } from 'react';
import { fetchDevices } from './services/deviceService';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';

import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import DevicePage from './components/DevicePage';

import CustomizedTable from './components/CustomizedTable';
import IssueForm from './components/IssueForm';
import Alert from './components/Alert';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [devices, setDevices] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [notif, setNotif] = useState(null);
  const [addIssue, setAddIssue] = useState(null); // For toggling the form of device issue.
  const onClick = () => setAddIssue(true); // Toggler func for 'Add Device' button.

  // Request all devices from server.
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

  // Clear notification after four seconds.
  if (notif) {
    setTimeout(() => {
      setNotif(null);
    }, 4000)
  }

  // Device searching function.
  const searchDevice = e => {
    const search = e.target.value.toLowerCase().trim();

    if (search.length > 1) {
      setSearchResults(devices.filter(d => d.deviceName.toLowerCase().includes(search)));
    } else {
      setSearchResults([]);
    }
  }

  const { deviceNumber } = useParams();

  const router = createBrowserRouter([
    {
      ////// INDEX PAGE //////
      path: '/',
      element: <>
        <h1>Device Issuance — ICT Team</h1>

        <div className='searchFormContainer'>
          <SearchField searchDevice={searchDevice} />
        </div>

        {notif && <Alert severity={notif.severity} message={notif.message} />}

        {/* 
            Any existing search results will cause SearchResults 
            to render, instead of the main device issue view.
        */}
        {searchResults.length > 0
          ? <SearchResults results={searchResults} />
          : <>
            <h3>All issues</h3>
            <CustomizedTable devices={devices} /><br />
            <Button text='New Issue' handleClick={onClick} />

            {addIssue && <IssueForm handleClick={setAddIssue} setNotif={setNotif} setDevices={setDevices} />}
          </>}
      </>
    },
    {
      ////// DEVICE VIEW PAGE //////
      path: '/devices/:deviceNumber',
      element: <DevicePage device={devices.find(d => d.deviceNumber === deviceNumber)} />
    }
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
