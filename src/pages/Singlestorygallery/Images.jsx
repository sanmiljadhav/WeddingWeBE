import React from 'react'
import './images.css'
import enquireImage from "../../assets/images/enquire_img.jpg";
import car_one from "../../assets/images/car_one.jpg"
import car_two from "../../assets/images/car_two.jpg"
import car_three from "../../assets/images/car_three.webp"
import car_four from "../../assets/images/car_four.jpg"
import car_five from "../../assets/images/car_five.jpg"
import {motion} from 'framer-motion'


export default function Images() {
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
      ]

     // Function to generate image elements
  const generateImageElements = () => {
    return galleryImages.map((slide, index) => (
      <img key={index} src={slide.img} style={{ width: '100%' }} alt={`Image ${index}`} />
    ));
  };

  return (
  

   

  

  <div className="row text-center text-lg-start">

    {galleryImages && galleryImages.map((slide,index)=>{
        return <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100"><div className='img-container'>
            <img class="img-fluid img-thumbnail" src={slide.img} alt="" />

        </div>
          
        </a>
      </div>


    })}

    
    
   
  </div>


    
  )
}
