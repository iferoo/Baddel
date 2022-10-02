import React from 'react';
import logo from '../assets/baddel-logo.png';

export default function Footer({ mode }) {
  return (
    <div className={`${mode ? 'bg-light' : 'bg-dark text-light'}`}>
      <div className="container ">
        <footer className="py-5">
          <div className="row">
            <div className="col-lg-4 col-md-5  mb-3">
              <a href="index.html" className="logo d-flex align-items-center">
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
                    href="/#"
                    className={`nav-link p-0 ${
                      mode ? 'text-muted' : 'text-light'
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/#"
                    className={`nav-link p-0 ${
                      mode ? 'text-muted' : 'text-light'
                    }`}
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/#"
                    className={`nav-link p-0 ${
                      mode ? 'text-muted' : 'text-light'
                    }`}
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/#"
                    className={`nav-link p-0 ${
                      mode ? 'text-muted' : 'text-light'
                    }`}
                  >
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="/#"
                    className={`nav-link p-0 ${
                      mode ? 'text-muted' : 'text-light'
                    }`}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-2 mb-3 ">
              <h5>Contact Us</h5>
              <p className={`fs-6 ${mode ? 'text-muted' : 'text-light'}`}>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong className="text-success">Phone: </strong> +1 5589 55488
                55
                <br />
                <strong className="text-success">Email: </strong>
                info@example.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-2 mb-3">
              <h5>Our Social Media</h5>
              <div className="social-links d-flex  gap-2 fs-3 text-sucsess">
                <a href="/#" className="twitter">
                  <i className="bi bi-twitter text-success"></i>
                </a>
                <a href="/#" className="facebook">
                  <i className="bi bi-facebook text-success"></i>
                </a>
                <a href="/#" className="instagram">
                  <i className="bi bi-instagram text-success"></i>
                </a>
                <a href="/#" className="linkedin">
                  <i className="bi bi-linkedin text-success"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top text-center">
            <p>
              &copy; Copyright <span className="text-success">Baddel</span>. All
              Rights Reserved
              <br />
              Design By <b>Iferoo</b>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
