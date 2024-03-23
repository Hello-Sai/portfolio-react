import React from 'react'

export default function Title(props) {
  return (
    <div style={{display:'inline',fontSize:30,float:props.align}} className='titlename'>
      {props.name}
    </div>
    )
}