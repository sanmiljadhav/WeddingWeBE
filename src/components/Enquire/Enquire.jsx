import React from 'react'
import enquireImage from '../../assets/images/enquire_img.jpg'
import './enquire.css'
import {motion} from 'framer-motion'
import commonFunctions from '../../utils/common/commonfunctions'

export default function Enquire() {

  const handleContactBtnClick=()=>{  
    commonFunctions.navigateToContactUsGForm();
  }

  return (

    <div className='enquire container'>
        <div className="enquire-img-box ">
        <img className = 'enquire-img' src={enquireImage} alt="" />
        <motion.button className='enquire-btn' onClick={handleContactBtnClick}>Enquire</motion.button>
        </div>
        
     </div>
  )
}
