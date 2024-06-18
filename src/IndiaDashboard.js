import React from 'react';
import TableauEmbed2 from '../src/TableauEmbed2';
import 'bootstrap/dist/css/bootstrap.min.css';

const Indiadashboard = () => {
  return (
    
    <div className="indiadashboard" style={{  background: '#ffffff' , marginLeft:'25vh' }}>
    <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '20px',marginTop: '10px', marginRight:'25vh',textAlign: 'center' }}>Healthcare Analytics in India (2024)</h1>

      <TableauEmbed2 />
      
    </div>
    
  );
}

export default Indiadashboard;
