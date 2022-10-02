import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/baddel-logo.png';
import './navbar.css';

export default function Navbar({ activeLink, mode, modeHandle, visible }) {
  console.log(activeLink.toString() === 'work');
  return (
    <nav
      className={`navbar ${visible ? '' : ''} sticky-top navbar-expand-lg ${
        mode ? 'bg-light' : 'bg-dark'
      }`}>
      <div className="container">
        <a className="navbar-brand" href="#header">
          <img src={logo} alt="Baddel" width="150" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${mode ? 'text-muted' : 'text-light'} ${
                  activeLink === 'header' ? 'active-link' : ''
                }`}
                aria-current="page"
                href="/#header">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${mode ? 'text-muted' : 'text-light'} ${
                  activeLink === 'work' ? 'active-link' : ''
                }`}
                href="/#work">
                How it Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${mode ? 'text-muted' : 'text-light'} ${
                  activeLink === 'features' ? 'active-link' : ''
                }`}
                href="/#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${mode ? 'text-muted' : 'text-light'} ${
                  activeLink === 'contact' ? 'active-link' : ''
                }`}
                href="/#contact">
                Contact
              </a>
            </li>
            <li className="nav-item" onClick={modeHandle}>
              <div className="nav-link ">
                {mode ? (
                  <i className="bi bi-moon-fill text-dark border rounded p-1"></i>
                ) : (
                  <i className="bi bi-sun-fill text-light border rounded p-1"></i>
                )}
              </div>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <button className="btn btn-success" type="submit">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  activeLink: PropTypes.string,
  mode: PropTypes.bool,
  modeHandle: PropTypes.func,
  visible: PropTypes.bool
};
