import React from 'react'
import "./Desc.css"

const Desc = () => {
  return (
    <div className="desc-container">
        <div className='textbox'>
            <div className='cards' id='front'>Home</div>
            <div className='cards' id='back'>About me</div>
            <div className='cards' id='left'>Contact me</div>
            <div className='cards' id='right'>Projects</div>
            <div className='cards' id='top'>Portfolio</div>
            <div className='cards' id='bottom'>Help</div>
        </div>
    </div>
  )
  // changes in desc
}

export default Desc