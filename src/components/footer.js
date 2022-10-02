import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/baddel-logo.png';

export default function Footer({ mode }) {
  return (
    <div className={`${mode ? 'bg-light' : 'bg-dark text-light'}`}>
      <div className="container ">
        <footer className="py-5">
          <div className="row">
            <div className="col-lg-4 col-md-5  mb-3">
              <a href="#header" className="logo d-flex align-items-center">
                <img src={logo} alt="Baddel" width="150" height="50" />
              </a>
              <p className={`${mode ? 'text-muted' : ''} fs-5`}>
                The First Bike sharing system in mena.
              </p>
            </div>

            <div className="col-lg-2 col-md-2 mb-3">
              <h5>Useful Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="#header"
                    className={`nav-link p-0 ${mode ? 'text-muted' : 'text-light'}`}>
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#work" className={`nav-link p-0 ${mode ? 'text-muted' : 'text-light'}`}>
                    How it Work
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#features"
                    className={`nav-link p-0 ${mode ? 'text-muted' : 'text-light'}`}>
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="#contact"
                    className={`nav-link p-0 ${mode ? 'text-muted' : 'text-light'}`}>
                    contact
                  </a>
                </li>
                {/* <li className="nav-item mb-2">
                  <a href="/#" className={`nav-link p-0 ${mode ? 'text-muted' : 'text-light'}`}>
                    FAQs
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-3 col-md-2 mb-3 ">
              <h5>Contact Us</h5>
              <p className={`fs-6 ${mode ? 'text-muted' : 'text-light'}`}>
                3b, street 199, Degla,
                <br /> Maadi, Cairo 11431, EG
                <br />
                <br />
                <strong className="text-success">Phone: </strong> +201000810010
                <br />
                <strong className="text-success">Email: </strong>
                info@baddelonline.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-2 mb-3">
              <h5>Our Social Media</h5>
              <div className="social-links d-flex  gap-2 fs-3 text-sucsess">
                <a
                  href="https://www.facebook.com/Baddelonline/"
                  className="facebook"
                  target="_blank"
                  rel="noreferrer">
                  <i className="bi bi-facebook text-success"></i>
                </a>
                <a
                  href="https://www.instagram.com/baddelonline/"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer">
                  <i className="bi bi-instagram text-success"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/18220062/"
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer">
                  <i className="bi bi-linkedin text-success"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top text-center">
            <p>
              &copy; Copyright <span className="text-success">Baddel</span>. All Rights Reserved
              <br />
              Design By
              <a
                href="https://www.linkedin.com/in/iferoo/"
                className="link-danger"
                target="_blank"
                rel="noreferrer">
                <b> Iferoo</b>
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
Footer.propTypes = {
  mode: PropTypes.bool
};
