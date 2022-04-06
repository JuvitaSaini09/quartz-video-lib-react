import React from 'react'
// import { videos } from '../../backend/db/products';
import { Navbar } from '../../components/allComponents';
import "./home.css";
import { products } from '../../backend/db/products';
import "../../css/videoCard.css"


function Home() {
  return (
    <>
    <Navbar />

    <section className='main-page'>

      {/* sidebar */}
      <div className="col1">
     <ul>
       <li><i className="fas fa-home"></i><span>Home</span> </li>
       <li><i className="fas fa-folder"></i><span>Playlists</span> </li>
       <li><i className="fas fa-heart"></i><span>Liked </span></li>
       <li><i class="fas fa-clock"></i><span>Watch Later</span> </li>
       <li><i class="fas fa-history"></i><span>History</span> </li>
     </ul>
      </div>

      {/* videos */}
      <div className="col2">
        <div className='btn-category'>
          <button>All</button>
          <button>Ice Cream</button>
          <button>Cake</button>
          <button>Choclate</button>
        </div>
        <div className='videosListing'>

        {
          products.map(item=>{
            return(
              <>
              <div className="video-card">
  <img className="img-thumbnail" src={item.thumbnailUrl} alt={item.title}/>
  <h1 className="play"><i className="fas fa-play"></i>play</h1>
  <div className="video-description">
    <img className="video-logo" src={item.logoUrl} alt="logo" /> 
    <h4 className="video-title">{item.title}<br/>
    <span style={{fontWeight:"lighter"}}>{item.categoryName}</span>
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

      </div>

    </section>

   

{/* <ReactPlayer controls url='https://www.youtube.com/watch?v=_kUrW9SEaJc'style={{marginBottom:40+"px",display:"flex",justifyContent:"center"}} /> */}

    
    </>
  )
}

export {Home};