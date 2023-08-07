import React from 'react'
import "./singleblog.css"
import enquireImage from "../../assets/images/enquire_img.jpg";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function Singleblog() {
    const navigate = useNavigate()
    const handleStoryClick = () => {
        navigate('/singlestorygallery')
    }
  return (
   
          <motion.div
            class="single_blog_bg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleStoryClick}
          >
            <div class="row d_flex">
              <div class="col-md-6">
                <div class="single_blog_img">
                  <figure>
                    <img src={enquireImage} alt="#" />
                  </figure>
                 
                </div>
              </div>
              <div class="col-md-6">
                <div class="singleblog_marriage_text">
                  <h3>Tempor incididunt ut labore et dolore</h3>
                  <p className="singleblog_desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
     
  )
}
