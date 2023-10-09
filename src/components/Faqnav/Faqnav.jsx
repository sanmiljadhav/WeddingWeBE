import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './faqnav.css'
import commonFunctions from "../../utils/common/commonfunctions";

const Faqnav = () => {
  const location = useLocation()

  const handleContactBtnClick = () =>{
    commonFunctions.navigateToContactUsGForm();
  }

  return (
    <nav className="navbar faq-nav navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        <Link className="navbar-brand faq-nav-heading" to="/">
          The Wedlock Stories
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/photography' ? "active" : ""}`} to="/photography">
                Photography
              </Link>
              {/* Note u can do this also using Navlink and Using its active class and giving styling to it */}
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} onClick={handleContactBtnClick}>
                Contact Us
              </Link>
              {/* Note u can do this also using Navlink and Using its active class and giving styling to it */}
            </li>
           
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Faqnav;


