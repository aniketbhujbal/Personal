import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown } from 'react-bootstrap';
import './NAvbar.css'
function Navbar() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false)
    const [title,settitle]=useState("");
const showDropdown = (e)=>{
    console.log(e.target)
    if(e.target.id=="About Us"){
        console.log("inside about us")
    setShow1(!show1);
    }
    if(e.target.id=="Students" && show1==false && show3==false && show4==false){
        console.log("inside students")
        setShow2(!show2);
        }

     if(e.target.id=="Examination"){
        setShow3(!show3);
        }
    if(e.target.id=="Academics"){
            setShow4(!show4);
            }
}
const hideDropdown = e => {
    if(e.target.id=="About Us"){
          setShow1(false);
        }
        if(e.target.id=="Students"){
              setShow2(false);
            }
    
         if(e.target.id=="Examination"){
              setShow3(false);
            }
        if(e.target.id=="Academics"){
                  setShow4(false);
                }
  
}

  return (
    <div className='div'>
       <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="collapse navbar-collapse main" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li>
      <NavDropdown title="About Us" 
   id="About Us" 
   show={show1}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   >
                <NavDropdown.Item href="/publishers/radio">Radio Stations</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/podcasters">Audio Podcasters</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/videopodcasters">Video Podcasters</NavDropdown.Item>
            </NavDropdown>
            </li>
      <li>
      <NavDropdown title="Students" 
   id="Students" 
   show={show2}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   >
                <NavDropdown.Item href="/publishers/radio">Radio Stations</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/podcasters">Audio Podcasters</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/videopodcasters">Video Podcasters</NavDropdown.Item>
            </NavDropdown>
            </li>
            <li>
      <NavDropdown title="Academics" 
   id="Academics" 
   show={show4}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   >
                <NavDropdown.Item href="/publishers/radio">Radio Stations</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/podcasters">Audio Podcasters</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/videopodcasters">Video Podcasters</NavDropdown.Item>
            </NavDropdown>
            </li>
            <li>
      <NavDropdown title="Examination" 
   id="Examination" 
   show={show3}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   >
                <NavDropdown.Item href="/publishers/radio">Radio Stations</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/podcasters">Audio Podcasters</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/videopodcasters">Video Podcasters</NavDropdown.Item>
            </NavDropdown>
            </li>
      <li class="nav-item">
        <a class="nav-link navbar" href="#">R & D Cell</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar" href="#">incubation center</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar" href="#">Pricing</a>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar