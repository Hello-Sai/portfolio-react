import React from 'react';
import data from '../data.json';
import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt,faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
export default function Projects() {
  const [showAlert, setShowAlert] = useState(false);
  function handleUpdate(){
    setShowAlert(true); // Set showAlert state to true when button is clicked
    setTimeout(() => {
      setShowAlert(false); // Hide alert after 1000 milliseconds (1 second)
    }, 800);
  }
  const projects = data.projects;
  return (
    <>
          
    {showAlert && (
    <div className="alert-card text-center ">
      coming soon ...
    </div>
    )}
          <div className='row rounded mt-4'>
      
        <h1 className='text-center mb-4' style = {{color:'#7d74f5',fontWeight:'bolder',fontStyle:'italic'}}>Projects</h1>
        {projects.map((item, index) => (
          <div key={index} className="col mb-3">
            <div className="card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <a
                    target='_blank'
                    style={{ color: 'black', textDecoration: 'none' }}
                    href={item.link}
                    >
                    <div className='card-header p-2'>
                      <div className="card-img-top">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </a>
                  <div className="card-body">
                    <h3 className="card-title" style={{fontStyle:'italic'}}>{item.name}</h3>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  {item.siteLink ? (<a
                    href={item.siteLink}
                    target='_blank'
                    className="btn btn-custom button-top"
                    style={{fontStyle:'italic'}}
                  >
                    Go to Site <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>):(<a
                    onClick={handleUpdate}
                    
                    className="btn btn-custom button-top"
                    style={{fontStyle:'italic'}}
                  >
                    Go to Site <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>)}
                  <div className="text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <a
                    href={item.repoLink}
                    
                    className="btn btn-custom button-bottom"
                    style={{fontStyle:'italic'}}
                  >
                    Go to Repository <FontAwesomeIcon icon={faFolderOpen} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
