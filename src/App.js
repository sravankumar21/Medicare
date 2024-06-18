import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Indiadashboard from './IndiaDashboard';
import DiseaseDashboardPowerBi from './DiseaseDashboardPowerBi';
import Dashboard3 from './Dashboard3';
import Dashboard4 from './Dashboard4';
import Dashboard5 from './Dashboard5';
import Dashboard6 from './Dashboard6';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/indiadashboard" element={<Indiadashboard />} />
          <Route path="/diseasedashboard" element={<DiseaseDashboardPowerBi />} />
          <Route path="/rankingdashboard" element={<Dashboard3 />} />
          <Route path="/worstdashboard" element={<Dashboard4 />} />
          <Route path="/healthiestdashboard" element={<Dashboard5 />} />
          <Route path="/freedashboard" element={<Dashboard6 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
