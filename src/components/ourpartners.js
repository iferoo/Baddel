import React from 'react';
import img1 from '../assets/partners/gouna.png';
import img2 from '../assets/partners/cib.png';
import img3 from '../assets/partners/orascom.png';
import img4 from '../assets/partners/sodic.jpg';

export default function OurPartners() {
  return (
    <section
      className="py-4 text-center"
      style={{ backgroundImage: '../assets/bike1.jpeg' }}
    >
      <h1 className="m-5 text-success">Our Partners</h1>
      <div class="container">
        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-3">
            <img src={img1} class="img-fluid rounded" alt="" width="90" />
          </div>
          <div class="col-md-3">
            <img src={img2} class="img-fluid rounded" alt="" width="180" />
          </div>
          <div class="col-md-3">
            <img src={img3} class="img-fluid rounded" alt="" width="300" />
          </div>
          <div class="col-md-3 mt-0">
            <img src={img4} class="img-fluid rounded" alt="" width="300" />
          </div>
        </div>
      </div>
    </section>
  );
}
