import React from "react";
import "./indexblogcomp.css";
import enquireImage from "../../assets/images/enquire_img.jpg";
import { motion } from "framer-motion";

export default function Indexblogcomp() {
  return (
    <>
    <div class="blog">
      <div class="container ">
        <div class="row ">
          <div class="col-md-12">
            <div class="titlepage">
              <h2 className="blog-title ">From The Stories</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 my-5">
            <motion.div
              class="blog_bg margin_bottom30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
            >
              <div class="row d_flex">
                <div class="col-md-6">
                  <div class="blog_img">
                    <figure>
                      <img src={enquireImage} alt="#" />
                    </figure>
                    <span>
                      06
                      <br />
                      Feb
                    </span>
                  </div>
                </div>
                <div class="col-md-6 my-2">
                  <div class="marriage_text">
                    <h3>Tempor incididunt ut labore et dolore</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div class="col-sm-12 my-2">
            <motion.div
              class="blog_bg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
            >
              <div class="row d_flex">
                <div class="col-md-6">
                  <div class="blog_img">
                    <figure>
                      <img src={enquireImage} alt="#" />
                    </figure>
                    <span>
                      06
                      <br />
                      Feb
                    </span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="marriage_text">
                    <h3>Tempor incididunt ut labore et dolore</h3>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
     
    </div>
    <div>
    
    </div>
    </>
  );
}
