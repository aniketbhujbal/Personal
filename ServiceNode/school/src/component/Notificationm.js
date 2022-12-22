import React, { startTransition } from 'react'
import { alignPropType } from 'react-bootstrap/esm/types'

function Notificationm() {
  return (
    <div style={{backgroundColor:'lightblue',alignItems:"center"}}>
          <marquee style={{ color: 'red', fontSize: '1em' , direction:'right',behavior:'scroll',
    scrollamount:'20' ,width:'70%',alignItems:"center"}}>Test</marquee>
    <hr style={{color:'lightgray'}} ></hr>
    </div>
  )
}

export default Notificationm