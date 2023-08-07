import React, { useState } from "react";
import "./singlestory.css";
import Navbar from "../../components/Navbar/Navbar";
import enquireImage from "../../assets/images/enquire_img.jpg";
import car_one from "../../assets/images/car_one.jpg"
import car_two from "../../assets/images/car_two.jpg"
import car_three from "../../assets/images/car_three.webp"
import car_four from "../../assets/images/car_four.jpg"
import car_five from "../../assets/images/car_five.jpg"



import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaWindowClose } from 'react-icons/fa';




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
      <Navbar />

      <div class="single-story-gallery">
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
            {galleryImages &&
              galleryImages.map((slide, index) => (
                <div className="col-md-4 single-story-box" onClick={()=>handleOpenModal(index)}>
                  <div class="card my-4">
                    <img src={slide.img} class="card-img-top" alt="..." />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
