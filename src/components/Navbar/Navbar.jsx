import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import "./navbar.css";
import img from "../../assets/images/Lamborghini.jpg";
import pdf from "../../assets/planpdf/Gujarat.pdf"
import commonFunctions from "../../utils/common/commonfunctions";
// var img = require('../../assets/images/Lamborghini.jpg');




  // whileHover={{scale:1.1}} transition={{delay:1.5,duration:1,type:'spring',stiffness:120}}>

export default function Navbar() {
  const MotionLink = motion(Link);
  const handleDownload = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file.
    const pdfUrl = pdf;

    // Create a temporary anchor element and trigger a click event to download the PDF.
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'wedlockstories-quotation-file.pdf'; // You can set the desired file name here
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  const handleContactBtnClick = () =>{
    commonFunctions.navigateToContactUsGForm();
  }

 
  
  return (
    <>
      <header className="full_bg">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <Link className="logo-link" to="/">
                        The Wedlock Stories
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample04"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link className="nav-Link" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-Link" to="/faqs">
                          Faqs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-Link" to="/photography">
                          Photography
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-Link" onClick={handleContactBtnClick}>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section>
         

          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="container">
                  <div className="carousel-caption  banner_po">
                    <div className="row">
                      <div className="col-lg-8 col-md-9 ">
                        <div className="build_box">
                          <motion.h1 className="heading" initial={{ y: -5, opacity: 1 }}  
                          whileHover={{ y: 0 }} 
  
transition={{
  type: 'spring',                 
  stiffness: 100,                 
  damping: 10,                   
  duration: 1 }}>
                            Wedding <span className="custom-color"> Couple</span>
                          </motion.h1>
                          <motion.p className="description" whileHover={{ scale: 1.1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            laboreLorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                          </motion.p>
                          <Link
                            className="read_more quote_btn"
                            to=""
                            role="button"
                            onClick={handleDownload}

                          >
                            Get A Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <div className="container">
                  <div className="carousel-caption  banner_po">
                    <div className="row">
                      <div className="col-lg-8 col-md-9 ">
                        <div className="build_box">
                          <motion.h1 className="heading" initial={{ y: -5, opacity: 1 }}  
                          whileHover={{ y: 0 }} 
  
transition={{
  type: 'spring',                 
  stiffness: 100,                 
  damping: 10,                   
  duration: 1 }} >
                            Wedding <span className="custom-color"> Couple</span>
                          </motion.h1>
                          <motion.p className="description"  whileHover={{ scale: 1.1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            laboreLorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                          </motion.p>
                          <MotionLink
                            className="read_more quote_btn"
                            to=""
                            role="button"
                          >
                            Get A Quote
                          </MotionLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <div className="container">
                  <div className="carousel-caption  banner_po">
                    <div className="row">
                      <div className="col-lg-8 col-md-9 ">
                        <div className="build_box">
                          <motion.h1 className="heading" initial={{ y: -5, opacity: 1 }}  
                          whileHover={{ y: 0 }} 
  
transition={{
  type: 'spring',                 
  stiffness: 100,                 
  damping: 10,                   
  duration: 1 }}>
                            Wedding <span className="custom-color"> Couple</span>
                          </motion.h1>
                          <motion.p className="description" whileHover={{ scale: 1.1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            laboreLorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                          </motion.p>
                          <Link
                            className="read_more quote_btn"
                            to=""
                            role="button"
                          >
                            Get A Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          {/* <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption  banner_po">
                  <div className="row">
                    <div className="col-lg-8 col-md-9 ">
                      <div className="build_box">
                        <h1>
                          Wedding <span className="orange"> Couple</span>
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut laboreLorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore
                        </p>
                        <Link
                          className="read_more quote_btn"
                          to=""
                          role="button"
                        >
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption  banner_po">
                  <div className="row">
                    <div className="col-lg-8 col-md-9 ">
                      <div className="build_box">
                        <h1>
                          Wedding <span className="orange"> Couple</span>
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut laboreLorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore
                        </p>
                        <Link
                          className="read_more quote_btn"
                          to=""
                          role="button"
                        >
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container">
                <div className="carousel-caption  banner_po">
                  <div className="row">
                    <div className="col-lg-8 col-md-9 ">
                      <div className="build_box">
                        <h1>
                          Wedding <span className="orange"> Couple</span>
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut laboreLorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore
                        </p>
                        <Link
                          className="read_more quote_btn"
                          to=""
                          role="button"
                        >
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
        </section>

        {/* <section className="banner_main">
            <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="carousel-caption  banner_po">
                           <div className="row">
                              <div className="col-lg-8 col-md-9 ">
                                 <div className="build_box">
                                    <h1>Wedding <span className="orang"> Couple</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    <Link className="read_more quote_btn" to="" role="button">Get A Quote</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                 
                 
               </div>
               <a className="carousel-control-prev" to="#myCarousel" role="button" data-slide="prev">
               <i className="fa fa-angle-left" aria-hidden="true"></i>
               <span className="sr-only">Previous</span>
               </a>
               <Link className="carousel-control-next" to="#myCarousel" role="button" data-slide="next">
               <i className="fa fa-angle-right" aria-hidden="true"></i>
               <span className="sr-only">Next</span>
               </Link>
            </div>
         </section> */}
      </header>
    </>
  );
}
