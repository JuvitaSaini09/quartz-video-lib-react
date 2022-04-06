import React from 'react'
// import { videos } from '../../backend/db/products';
import { Navbar, Sidebar, VideoListing } from '../../components/allComponents';
import "./home.css";
import "../../css/videoCard.css"


function Home() {

  return (
    <>
      <Navbar />

      <section className='main-page'>

        <Sidebar />

        {/* videos */}
        <div className="col2">
          <div className='btn-category'>
            <button>All</button>
            <button>Ice Cream</button>
            <button>Cake</button>
            <button>Chocolate</button>
          </div>
          <VideoListing />
        </div>

      </section>



      {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=_kUrW9SEaJc'style={{marginBottom:40+"px",display:"flex",justifyContent:"center"}} /> */}


    </>
  )
}

export { Home };