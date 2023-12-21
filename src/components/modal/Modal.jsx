import React from 'react'
import './Modal.css'
const Modal = ({score}) => {
  return (
    <div className='modal'>
     <div className='modal-title'>Skor :  {score}</div>
     <div onClick={()=>window.location="/"} className='modal-btn'>Yeniden Başla</div>
    </div>
  )
}

export default Modal
