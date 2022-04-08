import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useApi } from '../../context/apiContext/api';


function VideoListing() {
    const {apiVideos}=useApi()
    return (
        <div className='videosListing'>

            {
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
            }


        </div>

    )
}

export { VideoListing }