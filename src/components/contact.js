import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact mb-4 text-center">
        <h1 className="m-5 text-success">Contact us</h1>
      <div className="container" data-aos="fade-up">
        <div>
          <iframe
            className="w-100"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div className="row gy-4 mt-4">
          <div className="col-lg-4 d-flex flex-column gap-2 text-start">
            <div className="info-item d-flex gap-2">
              <div className="bg-success d-flex text-center rounded px-2 h-50">
                <i className="bi bi-geo-alt fs-2 text-white align-self-center"></i>
              </div>
              <div>
                <h4>Location:</h4>
                <p className="text-muted">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>
            </div>

            <div className="info-item d-flex gap-2">
              <div className="bg-success d-flex text-center rounded px-2 h-50">
                <i className="bi bi-envelope fs-2 text-white align-self-center"></i>
              </div>
              <div>
                <h4>Email:</h4>
                <p className="text-muted">info@example.com</p>
              </div>
            </div>

            <div className="info-item d-flex gap-2">
              <div className="bg-success d-flex text-center rounded px-2 h-50">
                <i className="bi bi-phone flex-shrink-0 fs-2 text-white align-self-center"></i>
              </div>
              <div>
                <h4>Call:</h4>
                <p className="text-muted">+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
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
                  required
                ></textarea>
              </div>

              <div className="text-center mt-4">
                <button type="submit" class="btn btn-success">
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
