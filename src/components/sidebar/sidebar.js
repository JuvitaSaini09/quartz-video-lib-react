import React from 'react'
import "./sidebar.css"

function Sidebar() {
  return (
   <>
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
   </>
  )
}

export { Sidebar }