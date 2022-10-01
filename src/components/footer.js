import React from 'react';
import logo from '../assets/baddel-logo.png';

export default function Footer() {
  return (
    <div className='bg-light'>
      <div class="container ">
        <footer class="py-5">
          <div class="row">
            <div class="col-lg-4 col-md-5  mb-3">
              <a href="index.html" class="logo d-flex align-items-center">
                <img src={logo} alt="Baddel" width="150" height="50" />
              </a>
              <p className="text-muted fs-5">
                The First Bike sharing system in mena.
              </p>
            </div>

            <div class="col-lg-2 col-md-2 mb-3">
              <h5>Useful Links</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-2 mb-3 ">
              <h5>Contact Us</h5>
              <p className="fs-6 text-muted">
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong className="text-success">Phone:</strong> +1 5589 55488
                55
                <br />
                <strong className="text-success">Email:</strong>{' '}
                info@example.com
                <br />
              </p>
            </div>
            <div class="col-lg-2 col-md-2 mb-3">
              <h5>Our Social Media</h5>
              <div class="social-links d-flex  gap-2 fs-3 text-sucsess">
                <a href="#" class="twitter">
                  <i class="bi bi-twitter text-success"></i>
                </a>
                <a href="#" class="facebook">
                  <i class="bi bi-facebook text-success"></i>
                </a>
                <a href="#" class="instagram">
                  <i class="bi bi-instagram text-success"></i>
                </a>
                <a href="#" class="linkedin">
                  <i class="bi bi-linkedin text-success"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top text-center">
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
