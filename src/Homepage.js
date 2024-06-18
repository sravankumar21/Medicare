import React, { useState } from 'react';
import Navbar from '../src/Navbar'; // Import the Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeImage from '../src/images/medical image.jpeg';

const Homepage = () => {
  const [selectedDashboard, setSelectedDashboard] = useState('/dashboard');

  const handleSelectionChange = (event) => {
    setSelectedDashboard(event.target.value);
    window.location.href = event.target.value;
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* First section */}
      <div
        className="container-fluid p-0 d-flex flex-column align-items-center justify-content-center"
        style={{
          background: '#ffffff', // white background color
          color: '#000000', // black text color
          minHeight: '50vh', // Set section height
        }}
      >
        <div className="text-center mb-4">
          <img
            src={HomeImage}
            alt="Lock"
            className="img-fluid blend-mode"
            style={{
              maxWidth: '90%',
              height: '5%',
              margin: '0 auto',
            }}
          />
        </div>
        <div className="row w-100 text-center" style={{ maxWidth: '1200px', marginBottom: '90px' }}>
          <div className="col-md-8 d-flex flex-column align-items-start justify-content-center">
            <h1 className="display-4 mb-2" style={{ fontFamily: 'Perfect Dark BRK', fontSize: '3.5rem' }}>
              Healthcare Analytics Redefined
            </h1>
            <p className="lead" style={{ fontFamily: 'Perfect Dark BRK', fontSize: '1.5rem' }}>
              Empowering Medical Decisions with Analytics
            </p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <select
              className="form-select mt-3"
              style={{ fontFamily: 'Perfect Dark BRK', fontSize: '1.2rem' }}
              value={selectedDashboard}
              onChange={handleSelectionChange}
            >
              <option value="/dashboard">Disease Dashboard</option>
              <option value="/indiadashboard">India Dashboard</option>
              <option value="/diseasedashboard">Another Disease Dashboard</option>
              <option value="/rankingdashboard">World Ranking Dashboard</option>
              <option value="/worstdashboard">Worst Healthcare Dashboard</option>
              <option value="/healthiestdashboard"> Healthy Healthcare Dashboard</option>
              <option value="/freedashboard">Free vs Expensive Healthcare Dashboard</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
