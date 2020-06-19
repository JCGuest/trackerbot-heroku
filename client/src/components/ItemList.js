import React from 'react';
import '../styles/login.css'

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

   speak = (name, location, i) => {
    var msg = `the location you gave for item ${name} is ${location}`
    const speek = new SpeechSynthesisUtterance(msg);
    window.speechSynthesis.speak(speek);
    this.setState({
        ...this.state,
        message: `name:"${name}" location:"${location}"`
    })
   }

   handleMessage = () => {
    return (
        <div className='error-div'>
            <p className='error' >{this.state.message}{<br></br>}</p>
        </div>
        )
    };

   render() {
    return (
        <div className='error-div'>
            <div className='message'>
                    {this.state.message? this.handleMessage() : null}
            </div>
            {this.props.items.map( (item, i) => {
                return <p className='error' key={i}><button onClick={() => this.speak(item.name, item.location, i)}>{item.name}</button></p> })}
        </div>
        )
    }
};

export default ItemList;