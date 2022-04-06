import React from 'react'
import { products } from '../../backend/db/products';
import { useVideo} from '../../context/VideoListing/videoListingContext';


function VideoListing() {
    const { state }=useVideo();
    return (
        <div className='videosListing'>

            {
                products.map(item => {
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