import React from 'react'
import roiLion from'../roi.mp4'

const BackgroungVideo=()=>(
<div>
        <video
        autoPlay
        muted
        loop
        style={{position:"absolute",width:"100%",left:"50%",right:"0",top:"50%",height:"100%",objectFit:"100%",transform:"translate(-50%, -50%)",zIndex:"-1"}}
        >
          <source src={roiLion} type="video/mp4"/>
        </video>
        </div>
)

export default BackgroungVideo