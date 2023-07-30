import React from 'react'
import enquireImage from '../../assets/images/enquire_img.jpg'
import './enquire.css'
import {motion} from 'framer-motion'

export default function Enquire() {
  return (

    <div className='enquire container'>
        <div className="enquire-img-box ">
        <img className = 'enquire-img' src={enquireImage} alt="" />
        <motion.button className='enquire-btn' >Enquire</motion.button>
        </div>
        
     </div>
  )
}
