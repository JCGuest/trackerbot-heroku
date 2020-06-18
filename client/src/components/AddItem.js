import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: ''
        }
    };

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    };

    handleSubmit = () => {

    }

    render() {
        return (
            <div className='addItem'>
                <Logo/>
                <Navbar/>
                <form onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <input onChange={this.handleChange}
                        type='text' name='name' className='input'
                        placeholder='add item name'/>
                    </div>
                    <div className='field'>
                            <input onChange={this.handleChange}
                        type='text' name='location' className='input'
                        placeholder='add item location'/>
                    </div>
                    <button type="submit" className='text'>next ></button>
                </form>
            </div>
        ) 
    };  
};

export default AddItem;