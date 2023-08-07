import React,{useRef} from "react";
import "./plans.css";
import planImg from "../../assets/images/plan_img.jpg";
import {motion, useScroll} from "framer-motion"

export default function Plans() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["0 1", "1 1"]
  })

  // Define the scaling factor for the animation
  const scaleValue = 0.95; // You can adjust this value to make the element smaller or larger

  // Calculate the final scale value for the animation
  const finalScale = 1 - scrollYProgress * (1 - scaleValue);


  return (
    <motion.div class="plans" ref = {ref} style={{scale:finalScale}}>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-header">
              <h2 className="plans-title">Our Plans</h2>
              <div className="plan-info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod t dolor in reprehenderit in voluptate{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <motion.div className="plan_box text_align_center" initial={{ scale: 0.8, opacity: 0 }}    
      animate={{ scale: 1, opacity: 1 }}      
      transition={{ duration: 0.5, type:'spring', stiffness:120}}        
      whileHover={{ scale: 1.1 }}            
      whileTap={{ scale: 0.9 }}              
      >
              <figure>
                <img src={planImg} alt="#" />
              </figure>
              <div id="ho_plan" class="plan-text-box">
                <h3 className="plan-header">WEDDING PHOTOGRAPHY</h3>
                <p className="plan-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod t dolor in reprehenderit in voluptate{" "}
                </p>
                <a className="read-more" href="Javascript:void(0)">
                  Read More
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div className="plan_box text_align_center" initial={{ scale: 0.8, opacity: 0 }}    
      animate={{ scale: 1, opacity: 1 }}      
      transition={{ duration: 0.5, type:'spring', stiffness:120}}        
      whileHover={{ scale: 1.1 }}            
      whileTap={{ scale: 0.9 }}>
              <figure>
                <img src={planImg} alt="#" />
              </figure>
              <div id="ho_plan" class="plan-text-box">
                <h3 className="plan-header">BABY PHOTOGRAPHY</h3>
                <p className="plan-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod t dolor in reprehenderit in voluptate{" "}
                </p>
                <a className="read-more" href="Javascript:void(0)">
                  Read More
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-md-2"></div>
        </div>

        
      </div>
    </motion.div>
  );
}
