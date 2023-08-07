import React from 'react'
import "./photographyblog.css"
import enquireImage from "../../assets/images/enquire_img.jpg";
import { motion } from "framer-motion";
import Singleblog from '../../components/Singleblog/Singleblog';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


export default function Photographyblog() {
  const navigate = useNavigate()
  return (
    <>
    <Navbar/>
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
        <div class="col-sm-12 col-md-6 my-4  ">
         <Singleblog />
        </div>
        <div class="col-sm-12 col-md-6 my-4 ">
         <Singleblog />
        </div>

        <div class="col-sm-12 col-md-6 my-4 ">
         <Singleblog />
        </div>

        <div class="col-sm-12 col-md-6 my-4 ">
         <Singleblog />
        </div>

        <div class="col-sm-12 col-md-6 my-4 ">
         <Singleblog />
        </div>

        <div class="col-sm-12 col-md-6 my-4 ">
         <Singleblog />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

