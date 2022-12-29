import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"

function Sidebar() {
  return (
   <>
   {/* sidebar */}
   <div className="col1">
     <ul>
      <Link to="/"> <li className="home"><i className="fas fa-home"></i><span>Home</span> </li></Link>
      <Link to="/playlist"> <li className="playlists"><i className="fas fa-folder"></i><span>Playlists</span> </li></Link>
      <Link to="/likedVideo"> <li className="liked"><i className="fas fa-heart"></i><span>Liked </span></li></Link>
      <Link to="/watchlater" ><li className="watchlater"><i className="fas fa-clock"></i><span>Watch Later</span> </li></Link>
      <Link to="/historyVideo"><li className="history"><i className="fas fa-history"></i><span>History</span> </li></Link>
     </ul>
      </div>
   </>
  )
}

export { Sidebar }