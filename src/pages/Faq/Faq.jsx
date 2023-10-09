import React from "react";
import "./faq.css";
import { Link } from "react-router-dom";
import Faqnav from "../../components/Faqnav/Faqnav";
import Sociallinks from "../../components/Sociallinks/Sociallinks";
import Whatsappicon from "../../components/Whatsappicon/Whatsappicon";


export default function Faq() {
  return (

    <>
      <Faqnav/> 
      <Whatsappicon/>   
      <div className="faq-main" >
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="faq-container">
                <h1 className="mb-4 faq-header">Frequently Asked Questions</h1>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        FAQ Question one
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classNamees that we use to style each
                        element. These classNamees control the overall
                        appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS
                        or overriding our default variables. It's also worth
                        noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        FAQ Question two
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classNamees that we use to style each
                        element. These classNamees control the overall
                        appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS
                        or overriding our default variables. It's also worth
                        noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        FAQ Question three
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classNamees that we use to style each
                        element. These classNamees control the overall
                        appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS
                        or overriding our default variables. It's also worth
                        noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sociallinks/>
      </>
    
  );
}
