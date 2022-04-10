import React from 'react'
import { useSingleVideo } from '../../context/singleVideoContext/singleVideoContext'
import {addToList} from "../../images/allImages"

function SingleVideo() {
  const {singleVideo}=useSingleVideo()
  
    const splittedvideoUrl=singleVideo.videoUrl.split("=");
    const videoUrl=`https://www.youtube.com/embed/${splittedvideoUrl[1]}`
  
  return (
    <div className="single-video">
    <div className='video-player-wrapper'>
    
      <iframe src={videoUrl} ></iframe>
    </div>
    <div>

    <div className="video-options">
        <span><i className="fas fa-thumbs-up"></i></span>
        <span><i className="fas fa-thumbs-down fa-1x"></i></span>
        <span><img src={addToList} /></span>
        <span><i className="fas fa-ellipsis-v fa-x"></i></span>
    </div>

    <div className="flex-row des-container" >
    <img className="single-video-logo" src={singleVideo.logoUrl} alt="logo" />
    <h4  className="single-video-title">{singleVideo.title} </h4> 
    </div>

   
   </div>
  </div>
  )
}

export { SingleVideo}