import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.css"

function Sidebar() {
  return (
   <>
   {/* sidebar */}
   <div className="col1">
     <ul>
      <NavLink to="/"> <li className="home"><i className="fas fa-home"></i><span>Home</span> </li></NavLink>
      <NavLink to="/playlist"> <li className="playlists"><i className="fas fa-folder"></i><span>Playlists</span> </li></NavLink>
      <NavLink to="/likedVideo"> <li className="liked"><i className="fas fa-heart"></i><span>Liked </span></li></NavLink>
      <NavLink to="/watchlater" ><li className="watchlater"><i className="fas fa-clock"></i><span>Watch Later</span> </li></NavLink>
      <NavLink to="/historyVideo"><li className="history"><i className="fas fa-history"></i><span>History</span> </li></NavLink>
     </ul>
      </div>
   </>
  )
}

export { Sidebar }