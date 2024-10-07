import React from 'react'
import video from "../images/vdo.mp4"
function Main() {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={video} autoPlay loop muted/>
        <div className='content'>
            <h1>  Welcome</h1>
            <p>TO our site</p>
        </div>
    </div>
  )
}

export default Main