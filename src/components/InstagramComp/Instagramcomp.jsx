import React from "react";
import "./instagramcomp.css";
import enquireImage from "../../assets/images/enquire_img.jpg";



export default function Instagramcomp() {

    const handleInstaImageNavigation = () =>{
        window.location.href = 'https://www.instagram.com/itss_me_sanmil/';

    }

  return (
    <div className="instagram-container m-2">
      <div className="container-fluid my-4">
        <div class="row ">
          <div class="col-md-12 mb-4">
            <div class="titlepage">
              <h2 className="instagram-title ">Follow us on Instagram</h2>
            </div>
          </div>

          <div class="col-md-12 ">
          <div className="insta-image-box">
            <div class="card-group">
              <div class="card h-80 ">
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation}  
             />       
              </div>
              <div class="card h-80" >
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation}  />            
              </div>
              <div class="card h-80">
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation}  />
              </div>
              <div class="card h-80">
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation}  />
              </div>
              <div class="card h-80">
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation}  />
              </div>
            </div>
          </div>
          </div>
          
          
        </div>


        <div class="row ">
         

          <div class="col-md-12">
          <div className="insta-image-box">
            <div class="card-group">
              <div class="card h-80 ">
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation} />       
              </div>
              <div class="card h-80" >
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation} />            
              </div>
              <div class="card h-80">
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation} />
              </div>
              <div class="card h-80">
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation} />
              </div>
              <div class="card h-80">
                <img src={enquireImage} class="card-img-top card-img" alt="..." onClick={handleInstaImageNavigation} />
              </div>
            </div>
          </div>
          </div>
          
          
        </div>
         
      </div>
    </div>
  );
}
