import React from 'react'
import { useToast } from '../../context/toastContext/toastContext'
import './toast.css'

function Toast(props) {
    const {toggle}=useToast()

  return (
   <>
    <main id="main-Toast-id" className={toggle?"main-toast display-block":"main-toast display-none"}>
  <div className="toast-container" >
     <div className="items">{props.text} </div>
     <div className="toast-btns">
     </div>
  </div>
</main>

</>
  )
}

export  {Toast}

