import React from 'react';
import PropTypes from 'prop-types';

export default function Contact({ mode }) {
  return (
    <section id="contact" className={`contact p-5 text-center ${mode ? '' : 'bg-dark'}`}>
      <h1 className="text-success p-5">Contact us</h1>
      <div className="container" data-aos="fade-up" data-aos-delay="600">
        <div>
          <iframe
            title="Baddel Company Location"
            className="w-100"
            height="300"
            src="https://maps.google.com/maps?q=3b%20Street%20199,%20Maadi%20as%20Sarayat%20Al%20Gharbeyah,%20Maadi,%20Cairo%20Governorate%2011431&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
        <div className="row gy-4 mt-4">
          <div className="col-lg-4 d-flex flex-column gap-2 text-start">
            <div className="info-item d-flex gap-2">
              <div className="bg-success d-flex text-center rounded px-2 h-50">
                <i className="bi bi-geo-alt fs-2 text-white align-self-center"></i>
              </div>
              <div>
                <h4 className={`${mode ? '' : 'text-light'}`}>Location:</h4>
                <p className={`${mode ? 'text-muted' : 'text-light'}`}>
                  3b, street 199, Degla,
                  <br /> Maadi, Cairo 11431, EG
                </p>
              </div>
            </div>

            <div className="info-item d-flex gap-2">
              <div className="bg-success d-flex text-center rounded px-2 h-50">
                <i className="bi bi-envelope fs-2 text-white align-self-center"></i>
              </div>
              <div>
                <h4 className={`${mode ? '' : 'text-light'}`}>Email:</h4>
                <p className={`${mode ? 'text-muted' : 'text-light'}`}>info@baddelonline.com</p>
              </div>
            </div>

            <div className="info-item d-flex gap-2">
              <div className="bg-success d-flex text-center rounded px-2 h-50">
                <i className="bi bi-phone flex-shrink-0 fs-2 text-white align-self-center"></i>
              </div>
              <div>
                <h4 className={`${mode ? '' : 'text-light'}`}>Call:</h4>
                <p className={`${mode ? 'text-muted' : 'text-light'}`}>+201000810010</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required></textarea>
              </div>

              <div className="text-center mt-4">
                <button type="submit" className="btn btn-success">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  mode: PropTypes.bool
};
