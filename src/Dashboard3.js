import React from 'react';
import TableauEmbed3 from '../src/TableauEmbed3';


const Dashboard3 = () => {
  return (
    <div className="dashboard" style={{ background: '#ffffff', marginLeft: '25vh' }}>
      <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '0px', marginTop: '10px', marginRight: '25vh', textAlign: 'center' }}>
        World rankings
      </h1>
      <TableauEmbed3 />
    </div>
  );
};

export default Dashboard3;
