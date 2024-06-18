import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DiseaseDashboardPowerBi = () => {
  return (
    <div className="disease-dashboard d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '3rem', marginBottom: '20px' }}>Top Disease Analytics</h1>
      <iframe
        title="Disease"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=792cf0a7-7bfd-4007-8b66-12f66d80b598&autoAuth=true&ctid=8ba02f42-a433-4ad5-bdab-0103a1bc5fa5"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default DiseaseDashboardPowerBi;
