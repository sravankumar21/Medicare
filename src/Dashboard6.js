// Dashboard4.js
import React from 'react';
import TableauEmbed6 from '../src/TableauEmbed6';

const Dashboard4 = () => {
  return (
    <div className="dashboard" style={{ background: '#ffffff', marginLeft: '25vh' }}>
      <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '0px', marginTop: '10px', marginRight: '25vh', textAlign: 'center' }}>
        FREE VS EXPENSIVE Healthcare Dashboard
      </h1>
      <TableauEmbed6 />
    </div>
  );
};

export default Dashboard4;
