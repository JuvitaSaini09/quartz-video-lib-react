import React from 'react'
import { Navbar, Sidebar } from '../../components/allComponents'
import "./videoo.css"
import { useApi } from '../../context/apiContext/api'

function Video() {
  const {apiVideos}=useApi()
  
  return (
    <>
    <Navbar/>
    <section className="main-page-video">
        <Sidebar />
        <div className="col2 video-container">
            <div className="single-video">
              <div className='video-player-wrapper'>
              
              <iframe src="https://www.youtube.com/embed/ZcnEDtJgTX8" ></iframe>
            </div>
            </div>
            <div className="video-recommendation">{
               apiVideos.map(item => {
                    return (
                        <>
                            <div className="video-card">
                                <img className="img-thumbnail" src={item.thumbnailUrl} alt={item.title} />
                                <h1 className="play"><i className="fas fa-play"></i>play</h1>
                                <div className="video-description">
                                    <img className="video-logo" src={item.logoUrl} alt="log" />
                                    <h4 className="video-title">{item.title}<br />
                                        <span style={{ fontWeight: "lighter" }}>{item.categoryName}</span>
                                    </h4>
                                    <div className="video-setting">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                            </div>

                        </>
                    )
                })
            }</div>
        </div>
      </section>
    </>
  )
}

export  {Video}