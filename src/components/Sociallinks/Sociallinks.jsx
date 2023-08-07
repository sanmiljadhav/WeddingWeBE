import React from "react";
import './sociallinks.css'
import { BsYoutube,BsInstagram,BsWhatsapp} from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Sociallinks() {
  return (
    <div class="contact social-links">
      <div class="container">
       
        <div class="row d_flex mt-">
          <div class="col-md-6">
            <div class="col-md-12">
              <div class="titlepage">
                <h1 className="contactus-header">Contact Us</h1>
              </div>
            </div>
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <ul class="social_icon">
                    <li className="my-2">
                      <Link to="" className="link-comp">
                       <BsYoutube style={{width:"50px",height:"50px", color:"white"}}/>
                       <span className="social-icon-name mx-4">Youtube</span>
                      </Link>
                    </li>
                    <li className="my-4">
                    <Link to="" className="link-comp">
                    <BsInstagram style={{width:"50px",height:"50px", color:"white"}}/>
                    <span className="social-icon-name mx-4">Instagram</span>
                      </Link>
                    </li>
                    <li className="my-2">
                    <Link to="" className="link-comp">
                    <BsWhatsapp style={{width:"50px",height:"50px", color:"white"}}/>
                    <span className="social-icon-name mx-4">Whatsapp</span>
                      </Link>
                    </li>
                    <li>
                    
                    </li>
                  </ul>
                </div>
              </div>
            
          </div>
          <div class="col-md-6">
            <div class="map_main">
              <div class="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                  width="600"
                  height="378"
                  frameborder="0"
                  style={{border:"0", width: "100%"}}
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
