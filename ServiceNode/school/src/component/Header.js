import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
function Header() {
  return (
    <div className='main'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-1'>
            <img src="images/logodypatil.png" alt='logo'/>

            </div>
            <div className='col-md-9 space'>
                    <h4><b>Dr. D. Y. Patil Vidyapeeth, Pune</b></h4>
                    <h6> <b>(Deemed to be University)</b> </h6>
                    <p className='pp'>Established under Section 3 of the UGC Act, 1956, vide NotificationNo. F.9-39/2001-U.3 dated 11th January 2003 of Government of India</p>
                    <p className='pp'>Accredited (3rd Cycle) by NAAC with a CGPA of 3.64 on four point scale at ‘A++’ Grade</p>
                    <p className='pp'>ISO 9001 : 2015 and 14001 : 2015 Certified University</p>

            </div>
            <div className='col-md-2'>
         
            </div>

        </div>
    </div>
    <hr/>
    </div>
  )
}

export default Header