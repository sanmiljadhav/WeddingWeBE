import React, { useState } from "react";
import "./singlestory.css";
import Navbar from "../../components/Navbar/Navbar";
import enquireImage from "../../assets/images/enquire_img.jpg";
import car_one from "../../assets/images/car_one.jpg"
import car_two from "../../assets/images/car_two.jpg"
import car_three from "../../assets/images/car_three.webp"
import car_four from "../../assets/images/car_four.jpg"
import car_five from "../../assets/images/car_five.jpg"
import {motion} from 'framer-motion'



import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaWindowClose } from 'react-icons/fa';
import Faqnav from "../../components/Faqnav/Faqnav";
import Whatsappicon from "../../components/Whatsappicon/Whatsappicon";




export default function Singlestorygallery() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const galleryImages = [
    {
      img: enquireImage,
    },
    {
      img: car_one,
    },
    {
      img: car_two,
    },
    {
      img: car_three,
    },
    {
      img:car_four,
    },
    {
      img: car_five,
    },
    {
      img: car_five,
    },
    {
      img: car_five,
    },
    {
      img: car_five,
    }
  ];

  const handleOpenModal=(index)=>{
    setSlideNumber(index)
    setOpenModal(true)
 }

 // Close the modal
 const handleCloseModal =()=>{
    setOpenModal(false)

 }

 const prevSlide =()=>{
    slideNumber === 0 ? setSlideNumber(galleryImages.length - 1): setSlideNumber(slideNumber - 1)


 }

 const nextSlide = ()=>{
    slideNumber === galleryImages.length - 1 ? setSlideNumber(0): setSlideNumber(slideNumber+1)

 }

  return (
    <>
      <Faqnav/>

      <div class="single-story-gallery">
        <Whatsappicon/>
        <div class="container ">
            {openModal && <div className="sliderWrap ">
                <div className="icons-box my-4">
                <FaWindowClose className = 'btn-close' onClick = {handleCloseModal}/>
                <FaArrowAltCircleLeft className="btn-prev" onClick = {prevSlide}/>
                <FaArrowAltCircleRight className="btn-next" onClick = {nextSlide}/>
                </div>
                <div className = 'fullScreenImage'>
                    <img src = {galleryImages[slideNumber].img} alt = '' />


                </div>

                </div>}
          <div class="row ">
            <div className="col-md-12">
            <div class="card-group">
            {galleryImages &&
              galleryImages.map((slide, index) => (
                <div className="card h-80" onClick={()=>handleOpenModal(index)}>
                  <motion.div class="card" initial={{ scale: 0.8, opacity: 0 }}    
      animate={{ scale: 1, opacity: 1 }}      
      transition={{ duration: 0.5, type:'spring', stiffness:120}}        
      whileHover={{ scale: 1.1 }}            
      whileTap={{ scale: 0.9 }}>
                    <img src={slide.img} class="card-img-top" alt="..." />
                  </motion.div>
                </div>
              ))}
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
