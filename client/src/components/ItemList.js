import React from 'react';
import '../styles/login.css'


class ItemList extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           items: [
               {name: 'keys', location: 'green bowl'}, {name:'charger', location: 'small desk'}
           ]
       }
   }

   speak = (msg) => {
    const speek = new SpeechSynthesisUtterance(`${msg}`);
    window.speechSynthesis.speak(msg);
   }


    render() {
        
        return (
            <div className='error'>
                <br></br>
                {this.state.items.map( item => {
                    return <p>{item.name}</p>
                })}
            </div>
        )
    }
};

export default ItemList;