import React, { useState } from 'react'
import data from '../data.json'
import svg from './../logo.svg'
import automation from'../images/Automation.jpeg' 
import './Card.css'
export default function Projects() {
  return (
    <>
      {/* <div className="d-inline-flex card" style={{width: "18rem"}}> */}
      {/* style={{borderColor:'#A8DAEF',borderWidth:1,borderStyle:'solid'}} */}
    <div className='row rounded mt-4' >
      <h1 className='text-center mb-4'> Projects</h1>
    {data.map((item,index) =>(
      <div key={index} className="col mb-3">
        <div className="card" >
        <a target='_blank' style={{color:'black',textDecoration:'none'}} href={item.link}>
          <div className='card-header p-2'>
            <div className='card-img-top  '><img src={item.image ||  svg} /></div>
          </div>
        </a>
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text" >{item.description}</p>
          </div>
        
        </div>
      </div>
        ))}
        </div>    
        </>
  )
}
