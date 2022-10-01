import React from 'react';
import img1 from '../assets/howitwork/pr-1.jpg';
import img2 from '../assets/howitwork/pr-2.jpg';
import img3 from '../assets/howitwork/pr-3.jpg';
import img4 from '../assets/howitwork/pr-4.jpg';

export default function HowItWork({ mode }) {
  return (
    <section
      id="howitwork "
      className={`py-4 text-center ${mode ? '' : 'bg-dark'}`}
    >
      <h1 className="m-5 text-success ">How It Work</h1>

      <div className={`container ${mode ? 'text-dark' : 'text-light'}`}>
        <div data-aos="fade-right" data-aos-delay="600" className="row gy-4 align-items-center features-item mb-5">
          <div className="col-md-4">
            <img src={img1} className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-8">
            <h3>Download our mobile application</h3>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="row gy-4 align-items-center features-item mb-5">
          <div className="col-md-4 order-1 order-md-2">
            <img src={img2} className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-8 order-2 order-md-1">
            <h3>Scan QR Code on back of bike to unlock it</h3>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="500" className="row gy-4 align-items-center features-item mb-5">
          <div className="col-md-4">
            <img src={img3} className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-8">
            <h3>commute freely and enjoy your ride</h3>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="row gy-4 align-items-center features-item mb-5">
          <div className="col-md-4 order-1 order-md-2">
            <img src={img4} className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-8 order-2 order-md-1">
            <h3>return bike to any nearby station</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
