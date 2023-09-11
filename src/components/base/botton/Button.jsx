import React from 'react'
import "./button.css"

export default function Button({title,size,type}) {
    const Objstyle={
        width:size,
    }
  return (
    <>
    <div>
    <button style={Objstyle} className={`q-button q-button-${type}`}>{title}</button>
    </div>
    </>
  )
}
