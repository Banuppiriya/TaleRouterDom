function Contact() {
  return (
    <div>
      {/* Pre-Header Area */}
      <div className="pre-header" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
                  <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
                  <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Area */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="Logo" style={{ maxWidth: '112px' }} />
                </a>
                <ul className="nav">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="faq.html">FAQs</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="contact.html" className="active">Contact</a></li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <div className="contact-us section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-us-content">
                <div className="row">
                  <div className="col-lg-4">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                        width="100%"
                        height="670px"
                        frameBorder="0"
                        style={{ border: 0, borderRadius: '23px' }}
                        allowFullScreen=""
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <form id="contact-form" action="" method="post">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-heading">
                            <h2>
                              <em>Contact Us</em> &amp; Get In <span>Touch</span>
                            </h2>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Name..."
                              autoComplete="on"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="surname"
                              id="surname"
                              placeholder="Your Surname..."
                              autoComplete="on"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Your E-mail..."
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              placeholder="Subject..."
                              autoComplete="on"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Your Message"
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="orange-button"
                            >
                              Send Message Now
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                    <div className="more-info">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="info-item">
                            <i className="fa fa-phone"></i>
                            <h4><a href="#">010-020-0340</a></h4>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-item">
                            <i className="fa fa-envelope"></i>
                            <h4><a href="#">info@company.com</a></h4>
                            <h4><a href="#">hello@company.com</a></h4>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-item">
                            <i className="fa fa-map-marker"></i>
                            <h4>
                              <a href="#">Sunny Isles Beach, FL 33160, United States</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;