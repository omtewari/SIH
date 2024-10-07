import React from 'react'
import Agentbox from "./Agentbox"
import agentimage1 from "../images/s1.jpg"
import agentimage2 from "../images/s2.jpg"
import agentimage3 from "../images/s3.jpg"
import agentimage4 from "../images/s4.jpg"

const Agent = () => {
  return (
    <div className='agent'>
        <div className='a-heading'>
            <h1>Medicines</h1>
            <p>Medicines can treat diseases and improve your health. If you are like most people, you need to take medicine at some point in your life.</p>
        </div>
        <div className='b-container'>
            <Agentbox image={agentimage1} name="Paracetamol"/>
            <Agentbox image={agentimage2} name="Cetrizine"/>
            <Agentbox image={agentimage3} name="Pilorute"/>
            <Agentbox image={agentimage4} name="Flexon"/>
            
 

        </div>
    </div>
  )
}

export default Agent