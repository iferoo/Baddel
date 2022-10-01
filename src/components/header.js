import React from 'react';
import playStore from '../assets/play-store.png';
import appStore from '../assets/app-store.png';
import bike1 from '../assets/bike1.png';

export default function Header() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row vh-100">
          <div className="col-md-7 align-self-center">
            <div className="text-start">
              <h1 className="featurette-heading fw-normal lh-1 text-success">
                Baddel
              </h1>
              <p className="text-muted fs-2">
                The First Bike sharing system in mena.
              </p>
              <div className="row">
                <img className=" w-25" src={playStore} />
                <img className=" w-25" src={appStore} />
              </div>
            </div>
          </div>

          <div className="col-md-5 align-self-center">
            <div class="thumbnail">
              <img className="rounded img-fluid mx-auto " src={bike1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
