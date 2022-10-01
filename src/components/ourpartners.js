import React from 'react';
import img1 from '../assets/partners/gouna.png';
import img2 from '../assets/partners/cib.png';
import img3 from '../assets/partners/orascom.png';
import img4 from '../assets/partners/sodic.jpg';

export default function OurPartners({ mode }) {
  return (
    <section
      className={`p-5 text-center ${mode ? 'bg-light' : 'bg-dark'}`}
      style={{ backgroundImage: '../assets/bike1.jpeg' }}
    >
      <h1 className="text-success py-5">Our Partners</h1>
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-3">
            <img src={img1} className="img-fluid rounded" alt="" width="90" />
          </div>
          <div className="col-md-3">
            <img src={img2} className="img-fluid rounded" alt="" width="180" />
          </div>
          <div className="col-md-3">
            <img src={img3} className="img-fluid rounded" alt="" width="300" />
          </div>
          <div className="col-md-3 mt-0">
            <img src={img4} className="img-fluid rounded" alt="" width="300" />
          </div>
        </div>
      </div>
    </section>
  );
}
