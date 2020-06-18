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
    render() {
        return (
            <div className='error'>
                <br></br>
                {this.state.items.map( item => {
                    return 
                })}
            </div>
        )
    }
};

export default ItemList;