import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Import the logo image

function Navbar() {
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
                {/* Logo */}
                <Link to="/" className="logo">
                  <img src={logo} alt="Logo" />
                </Link>

                {/* Navigation Menu */}
                <ul className="nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>

                {/* Menu Trigger */}
                <a className="menu-trigger" aria-label="Menu">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;