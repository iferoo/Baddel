import React from 'react';
import img1 from '../assets/howitwork/pr-1.jpg';
import img2 from '../assets/howitwork/pr-2.jpg';
import img3 from '../assets/howitwork/pr-3.jpg';
import img4 from '../assets/howitwork/pr-4.jpg';

export default function HowItWork() {
  return (
    <section id='howitwork' className="py-4 text-center">
      <h1 className='m-5 text-success'>How It Work</h1>

      <div class="container">
        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-4">
            <img src={img1} class="img-fluid rounded" alt="" />
          </div>
          <div class="col-md-8">
            <h3>Download our mobile application</h3>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-4 order-1 order-md-2">
            <img src={img2} class="img-fluid rounded" alt="" />
          </div>
          <div class="col-md-8 order-2 order-md-1">
            <h3>Scan QR Code on back of bike to unlock it</h3>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-4">
            <img src={img3} class="img-fluid rounded" alt="" />
          </div>
          <div class="col-md-8">
            <h3>commute freely and enjoy your ride</h3>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-4 order-1 order-md-2">
            <img src={img4} class="img-fluid rounded" alt="" />
          </div>
          <div class="col-md-8 order-2 order-md-1">
            <h3>return bike to any nearby station</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
