import React from 'react';
import bike2 from '../assets/bike2.png';

export default function Features() {
  return (
    <section id="contact" className="contact mb-4 text-center">
      <h1 className="m-5 text-success">Features</h1>

      <div className="container" data-aos="fade-up">
        <div className="row align-items-center gy-4 mt-4">
          <div className="col-lg-4 d-flex flex-column align-items-end gap-2">
            <div className="d-flex ">
              <p className="text-muted border-bottom border-success px-1">
                Electric Motor (40 KM ) In One Charge
              </p>
              <div className="border border-success text-center rounded-circle px-2">
                <i className="bi bi-airplane-fill fs-2  align-self-center"></i>
              </div>
            </div>
            <div className="d-flex ">
              <p className="text-muted border-bottom border-success px-1">
                Integrated Tork Sensor
              </p>
              <div className="border border-success text-center rounded-circle px-2">
                <i className="bi bi-gear-fill fs-2  align-self-center"></i>
              </div>
            </div>
            <div className="d-flex ">
              <p className="text-muted border-bottom border-success px-1">
                Charging Connector
              </p>
              <div className="border border-success text-center rounded-circle px-2">
                <i className="bi bi-plug-fill fs-2  align-self-center"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex flex-column gap-2">
            <img src={bike2} alt="Baddel" />
          </div>

          <div className="col-lg-4 d-flex flex-column align-items-start gap-2">
            <div className="d-flex ">
              <div className="border border-success text-center rounded-circle px-2">
                <i className="bi bi-bicycle fs-2  align-self-center"></i>
              </div>
              <p className="text-muted border-bottom border-success px-1">
                Free Roller Brake System
              </p>
            </div>
            <div className="d-flex ">
              <div className="border border-success text-center rounded-circle px-2">
                <i className="bi bi-battery-full fs-2  align-self-center"></i>
              </div>
              <p className="text-muted border-bottom border-success px-1">
                Well Protected Battery
              </p>
            </div>
            <div className="d-flex ">
              <div className="border border-success text-center rounded-circle px-2">
                <i className="bi bi-bicycle fs-2  align-self-center"></i>
              </div>
              <p className="text-muted border-bottom border-success px-1">
                FlashLight
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}