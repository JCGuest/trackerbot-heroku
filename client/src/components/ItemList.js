import React from 'react';
import '../styles/login.css'


const ItemList = (props) =>  {

   function speak(name, location) {
    var msg = `the location you gave for item ${name} is ${location}`
    const speek = new SpeechSynthesisUtterance(msg);
    window.speechSynthesis.speak(speek);
   }

    return (
        <div className='error-div'>
            {props.items.map( item => {
                return <p className='error'><button onClick={ () => speak(item.name, item.location)}>{item.name}</button></p> })}
        </div>
    )
};

export default ItemList;