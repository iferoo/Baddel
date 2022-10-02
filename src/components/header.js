import React from 'react';
import PropTypes from 'prop-types';

import playStore from '../assets/play-store.png';
import appStore from '../assets/app-store.png';
import bike1 from '../assets/bike1.png';

export default function Header({ mode }) {
  return (
    <section id="header" className={` ${mode ? 'bg-light' : 'bg-dark'}`}>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-7 align-self-center mb-4">
            <div className="text-start">
              <h1 className="featurette-heading fw-normal lh-1 text-success">Baddel</h1>
              <p className={`${mode ? 'text-muted' : 'text-light'} fs-2`}>
                The First Bike sharing system in mena.
              </p>
              <div className="row">
                <a
                  className="w-50"
                  href="https://play.google.com/store/apps/details?id=com.baddel.baddel&hl=en"
                  target="_blank"
                  rel="noreferrer">
                  <img className="w-100" src={playStore} alt="Play Store" />
                </a>
                <a
                  className=" w-50"
                  href="https://itunes.apple.com/us/app/baddel/id1229055047?mt=8&ign-mpt=uo%3D4"
                  target="_blank"
                  rel="noreferrer">
                  <img className=" w-100" src={appStore} alt="App Store" />
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-md-5 d-flex">
            <div className="thumbnail">
              <img className="rounded img-fluid" src={bike1} alt="Bike" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Header.propTypes = {
  mode: PropTypes.bool
};
