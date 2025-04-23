import React from 'react';
import faqImage from '../assets/images/faqs-image.jpg';

function Faq() {
  return (
    <>
      {/* Pre-Header Area */}
      <div className="pre-header" id="top">
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
                  <img src={faqImage} alt="Logo" style={{ maxWidth: '112px' }} />
                </a>
                <ul className="nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
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

      {/* Page Heading */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>
                  Most Frequently Asked <em>Questions</em> Here <em>?</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={faqImage} alt="FAQs" />
            </div>
          </div>
        </div>
      </div>

      {/* Happy Steps Section */}
      <div className="happy-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
            </div>
            <div className="col-lg-12">
              <div className="steps">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src="assets/images/services-01.jpg"
                        alt="Step 1"
                        style={{
                          maxWidth: '66px',
                          borderRadius: '50%',
                          margin: '0 auto',
                        }}
                      />
                      <h4>Project Introduction</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src="assets/images/services-02.jpg"
                        alt="Step 2"
                        style={{
                          maxWidth: '66px',
                          borderRadius: '50%',
                          margin: '0 auto',
                        }}
                      />
                      <h4>Work Development</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src="assets/images/services-03.jpg"
                        alt="Step 3"
                        style={{
                          maxWidth: '66px',
                          borderRadius: '50%',
                          margin: '0 auto',
                        }}
                      />
                      <h4>Data Analysis</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item last-item">
                      <img
                        src="assets/images/services-04.jpg"
                        alt="Step 4"
                        style={{
                          maxWidth: '66px',
                          borderRadius: '50%',
                          margin: '0 auto',
                        }}
                      />
                      <h4>Project Finishing</h4>
                    </div>
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

export default Faq;