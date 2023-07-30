import React from "react";
export default function Youtubecomp() {
  return (
    <div class="plans">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-header">
              <h2 className="plans-title">Our Specifics</h2>
              <div className="plan-info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod t dolor in reprehenderit in voluptate{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 my-2">
            <div className="youtube-video-box">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/HfR7JEFuTkA"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
              
              
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="youtube-video-box my-2">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/89UkBhOB8fA"
                title="YouTube video"
                allowFullScreen
              ></iframe>

            </div>
              
              
            </div>
          </div>
          

          <div className="col-md-2"></div>
        </div>

        <div className="row my-4">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="youtube-video-box my-2">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/HfR7JEFuTkA"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
              
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="youtube-video-box my-2">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/89UkBhOB8fA"
                title="YouTube video"
                allowFullScreen
              ></iframe>

            </div>
              
              
            </div>
          </div>
          

          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
