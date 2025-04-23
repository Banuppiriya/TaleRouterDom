import React from 'react';

function AboutUs() {
  return (
    <>
      {/* Pre-Header Area */}
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li>
                    <a href="tel:+00012345678" aria-label="Phone">
                      <i className="fa fa-phone"></i>+000 1234 5678
                    </a>
                  </li>
                  <li>
                    <a href="mailto:infocompany@email.com" aria-label="Email">
                      <i className="fa fa-envelope"></i>infocompany@email.com
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Location">
                      <i className="fa fa-map-marker"></i>St. London 54th Bull
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Google Plus">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
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
                <a href="/" className="logo">
                  <img src="assets/images/logo.png" alt="Logo" style={{ maxWidth: '112px' }} />
                </a>
                <ul className="nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li>
                    <a href="/about" className="active">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
                <a className="menu-trigger" aria-label="Menu">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <div className="services section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2>
                      We Provide <em>Different Services</em> &amp; <span>Features</span> For Your Agency
                    </h2>
                    <div className="line-dec"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-01.jpg" alt="Discover SEO" className="templatemo-feature" />
                    </div>
                    <h4>Discover More on Latest SEO Trends</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-02.jpg" alt="Data Analysis" className="templatemo-feature" />
                    </div>
                    <h4>Real-Time Big Data Analysis</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-03.jpg" alt="Precise Data" className="templatemo-feature" />
                    </div>
                    <h4>Precise Data Analysis &amp; Prediction</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="assets/images/services-04.jpg" alt="SEO Marketing" className="templatemo-feature" />
                    </div>
                    <h4>SEO Marketing &amp; Social Media</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infos Section */}
      <div className="infos section" id="infos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img src="assets/images/left-infos.jpg" alt="About Us" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section-heading">
                      <h2>
                        More <em>About Us</em> &amp; What <span>We Offer</span>
                      </h2>
                      <div className="line-dec"></div>
                      <p>
                        You are free to use this template for any purpose. Redistribution of the downloadable ZIP file
                        of Tale SEO Template on other template websites is not allowed. Please contact us. Thank you.
                      </p>
                    </div>
                    <div className="skills">
                      <div className="skill-slide marketing">
                        <div className="fill"></div>
                        <h6>Marketing</h6>
                        <span>90%</span>
                      </div>
                      <div className="skill-slide digital">
                        <div className="fill"></div>
                        <h6>Digital Media</h6>
                        <span>80%</span>
                      </div>
                      <div className="skill-slide media">
                        <div className="fill"></div>
                        <h6>Social Media Managing</h6>
                        <span>95%</span>
                      </div>
                    </div>
                    <p className="more-info">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2025 <a href="#">Cohort 11</a>. All rights reserved.
              <br />
              Design: <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer">TemplateMo</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;