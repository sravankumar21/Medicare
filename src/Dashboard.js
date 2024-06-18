import React from 'react';
import TableauEmbed from '../src/TableauEmbed';

const Dashboard = () => {
  return (
<div className="dashboard" style={{  background: '#ffffff' , marginLeft:'25vh' }}>
<h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '0px',marginTop: '10px', marginRight:'25vh',textAlign: 'center' }}>Top 10 Deadliest Diseases Dashboard</h1>

  <TableauEmbed />
  
</div>
  );
}

export default Dashboard;
