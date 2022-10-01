import React from 'react';
import playStore from '../assets/play-store.png';
import appStore from '../assets/app-store.png';
import bike1 from '../assets/bike1.png';

export default function Header({ mode }) {
  return (
    <div className={` ${mode ? 'bg-light' : 'bg-dark'}`}>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-7 align-self-center mb-4">
            <div className="text-start">
              <h1 className="featurette-heading fw-normal lh-1 text-success">
                Baddel
              </h1>
              <p className={`${mode ? 'text-muted' : 'text-light'} fs-2`}>
                The First Bike sharing system in mena.
              </p>
              <div className="row">
                <img className=" w-25" src={playStore} />
                <img className=" w-25" src={appStore} />
              </div>
            </div>
          </div>

          <div className="col-md-5 d-flex">
            <div class="thumbnail">
              <img className="rounded img-fluid" src={bike1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
