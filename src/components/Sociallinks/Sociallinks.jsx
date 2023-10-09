import React from "react";
import "./sociallinks.css";
import { BsYoutube, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import commonFunctions from "../../utils/common/commonfunctions";

export default function Sociallinks() {
  const navigate = useNavigate();
  const handleSocialLinkClick = (data) => {
    if (data == "youtube") {
      window.open(
        "https://www.youtube.com/@Thewedlockstories/featured",
        "_blank"
      );
    } else if (data == "instagram") {
      window.open("https://www.instagram.com/itss_me_sanmil/", "_blank");
    } else {
      const phoneNumber = "9552705890"; // Replace with your WhatsApp phone number
      const message = "Hello, I want to chat!"; // Replace with your desired message
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  const handleContactBtnClick=()=>{  
      commonFunctions.navigateToContactUsGForm();
  }
  
  return (
    <div class="contact social-links">
      <div class="container">
        <div class="row d_flex mt-">
          <div class="col-md-6">
            <div class="col-md-12">
              <div class="titlepage">
                <h1 className="contactus-header" onClick={handleContactBtnClick}>Contact Us</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <ul class="social_icon">
                  <li className="my-2">
                    <Link to="" className="link-comp">
                      <BsYoutube
                        style={{
                          width: "50px",
                          height: "50px",
                          color: "white",
                        }}
                      />
                      <span
                        className="social-icon-name mx-4"
                        onClick={() => {
                          handleSocialLinkClick("youtube");
                        }}
                      >
                        Youtube
                      </span>
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link to="" className="link-comp">
                      <BsInstagram
                        style={{
                          width: "50px",
                          height: "50px",
                          color: "white",
                        }}
                      />
                      <span
                        className="social-icon-name mx-4"
                        onClick={() => {
                          handleSocialLinkClick("instagram");
                        }}
                      >
                        Instagram
                      </span>
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to="" className="link-comp">
                      <BsWhatsapp
                        style={{
                          width: "50px",
                          height: "50px",
                          color: "white",
                        }}
                      />
                      <span
                        className="social-icon-name mx-4"
                        onClick={() => {
                          handleSocialLinkClick("whatsapp");
                        }}
                      >
                        Whatsapp
                      </span>
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="map_main">
              <div class="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14722.310224448653!2d75.9151996!3d22.7067648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3b9f9ded07%3A0x93cf203eba679699!2sThe%20Wedlock%20Stories!5e0!3m2!1sen!2sin!4v1695385502719!5m2!1sen!2sin"
                  width="600"
                  height="378"
                  style={{ border: "0", width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
