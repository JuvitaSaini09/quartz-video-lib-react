import React from 'react'
import { Link } from 'react-router-dom';
import { EmptyPage,Navbar, Sidebar, Toast } from '../../components/allComponents';
import { useSingleVideo } from '../../context/singleVideoContext/singleVideoContext';
import { useToast } from '../../context/toastContext/toastContext';
import { useWatchLaterCheckbox } from '../../context/watchLaterContext/watchLaterContext';
import { removeFromWatchLater } from '../../util/watchLaterApi';
import "./watchLater.css"

function WatchLater() {
    const {videosInPlaylist,setwatchLaterCheckbox,setWatchLaterCheckboxDisptach,}=useWatchLaterCheckbox(); 
    const { setSingleVideo} = useSingleVideo();
    const {setToast,toastState,toastDispatch}=useToast();

     // delete video from watchlater
     const deleteVideoFromWatchLaterHandler=(item)=>{
        removeFromWatchLater(item,setWatchLaterCheckboxDisptach,toastDispatch,setToast)
        setwatchLaterCheckbox(prev=>!prev)
     }
    
  return (
    <>
    <Navbar />
    <section className="main-page watchlater-page">
      <Sidebar />
      <div className="col2">
        {videosInPlaylist[0] !== undefined && <h1 className="playlistHeading">WATCH LATER VIDEOS</h1>}
        {/* <---------History Videos-------------> */}
        <div className="videosListing mt-3">
          {videosInPlaylist === undefined || videosInPlaylist[0] === undefined ? <EmptyPage text="Empty Watch Later" /> :<>
          {videosInPlaylist.map((item) => {
            return (
              <div className="video-card" key={item._id}>
                <Link onClick={() => setSingleVideo(item)} to="/video">
                  <img
                    className="img-thumbnail"
                    src={item.thumbnailUrl}
                    alt={item.title}
                  />
              
                  <h1 className="play">
                    <i className="fas fa-play"></i>play
                  </h1>
                </Link>
                <span onClick={()=>deleteVideoFromWatchLaterHandler(item)} className="historyDustbin"><i className="fas fa-trash-alt fa-2x"></i></span>
                <div className="video-description">
                  <img className="video-logo" src={item.logoUrl} alt="logo" />
                  <h4 className="video-title">
                    {item.title}
                    <br />
                    <span style={{ fontWeight: "lighter" }}>
                      {item.categoryName}
                    </span>
                  </h4>
                  <div className="video-setting">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
              </div>
            );
          })}</>}
          
        </div>
        {/* <---------watchLater Videos-------------> */}
      </div>
    </section>

  {/*<------------- TOAST --------------> */}
  <Toast text={toastState} />

  </>
  )
}

export {WatchLater}


