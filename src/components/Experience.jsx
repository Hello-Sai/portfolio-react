import React from 'react'

export default function Experience() {
  return (
      <div className='row'>
          <h1>Experience</h1>
          <div className="col mb-3">
              <div className="card" >
                  <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} >
                      <div className='card-header p-2'>
                          <div className='card-img-top  '><img /></div>
                      </div>
                  </a>
                  <div className="card-body ">
                      <h3 className="card-title"></h3>
                      <p className="card-text">Price:</p>
                      <p className={`card-text `} ></p>

                  </div>
              </div>
          </div>
      </div>
  )
}
