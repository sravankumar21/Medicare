import React from 'react';
import BarChart2 from 'react-feather/dist/icons/bar-chart-2';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-body-tertiary navbar-expand-lg" style={{ height: '70px', backgroundColor: '#e3f2fd', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <BarChart2 style={{ marginRight: '20px', marginLeft: '45px' }} /> 
          Med Care
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav mb-2 mb-lg-0" style={{ paddingRight: '60px' }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ paddingLeft: '15px' ,paddingRight: '15px', position: 'relative'  }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ paddingLeft: '15px' ,paddingRight: '15px', position: 'relative' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ paddingLeft: '15px' ,paddingRight: '15px', position: 'relative' }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
