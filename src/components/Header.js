import React, { useState } from 'react'
import Title from './Title';
import Resume from './Resume';
import Dropdown from 'react-bootstrap/Dropdown'
import './../App.css'
export default function Header() {
  const [dropdown,setDropdown] = useState(false);
  return (
    <div className="container-fluid sticky-top">
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
      <div  className="container">
        <a  className="navbar-brand" href="#">DAGUDU SAI KUMAR</a>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <a  id="resumelink" href='https://drive.google.com/file/d/1ueKvTkXFqB5CmbuQ7M3ox7aMg5RGc75m/view?usp=drive_link' download="resume.pdf" className="btn btn-primary my-2 my-sm-0 mx-auto">Resume</a>
          <ul className="navbar-nav ml-auto"></ul>
        </div>
        <span class="navbar-brand">
          Django Developer
        </span>

        {/* <Dropdown 
        alignRight 
        className='rounded'
        show = {dropdown}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)} >
            <Dropdown.Toggle variant="primary" style={{background:"red"}}>
              Gmail
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
      </div>
    </nav>
          </div>
  )
}
