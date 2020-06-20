import React, { useState } from 'react';
import '../styles/login.css'

function ItemList(props) {
    const [message, setMessage] = useState('')

   function speak(name, location, i) {
    var msg = `the location you gave for item ${name} is ${location}`
    const speek = new SpeechSynthesisUtterance(msg);
    window.speechSynthesis.speak(speek);
    setMessage(`name:"${name}" location:"${location}"`)
   }

   function handleMessage() {
    return (
        <div className='error-div'>
            <p className='error' >{message}{<br></br>}</p>
        </div>
        )
    };

    return (
        <div className='error-div'>
            <div className='message'>
                    {message? handleMessage() : null}
            </div>
            {props.items.map( (item, i) => {
                return <p className='error' key={i}><button onClick={() => {speak(item.name, item.location, i)}}>{item.name}</button></p> })}
        </div>
        )
};

export default ItemList;