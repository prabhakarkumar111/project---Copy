import React, { useState } from 'react'
import './App.css';
const Color = () => {
    const [text, setText] = useState("upperCase")
  return (
    <div className='header'>
        <h1>Enter some text here</h1>
        <textarea name="" value={text} id="text" onChange={(e)=> setText(e.target.value)} cols="30" rows="10"></textarea>
        <button onClick={()=> setText(text.toUpperCase())}>Convert to uppercase</button>
    </div>
  )
}

export default Color


