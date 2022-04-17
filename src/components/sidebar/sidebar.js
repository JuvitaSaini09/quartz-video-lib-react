import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"

function Sidebar() {
  return (
   <>
   {/* sidebar */}
   <div className="col1">
     <ul>
      <Link to="/"> <li class="home"><i className="fas fa-home"></i><span>Home</span> </li></Link>
       <li class="playlists"><i className="fas fa-folder"></i><span>Playlists</span> </li>
       <Link to="/likedVideo"> <li class="liked"><i className="fas fa-heart"></i><span>Liked </span></li></Link>
       <li class="watchlater"><i class="fas fa-clock"></i><span>Watch Later</span> </li>
       <Link to="/historyVideo"><li class="history"><i class="fas fa-history"></i><span>History</span> </li></Link>
     </ul>
      </div>
   </>
  )
}

export { Sidebar }