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
       <li class="liked"><i className="fas fa-heart"></i><span>Liked </span></li>
       <li class="watchlater"><i class="fas fa-clock"></i><span>Watch Later</span> </li>
       <li class="history"><i class="fas fa-history"></i><span>History</span> </li>
     </ul>
      </div>
   </>
  )
}

export { Sidebar }