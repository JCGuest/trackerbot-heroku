import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import axios from 'axios';

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            message: '',
            errors: ''
        }
    };

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, location } = this.state
        let item = {
            name: name,
            location: location
        }
        axios.post(`/users/${this.props.user.id}/items`, {item}, {withCredentials:true})
        .then(json => {
            if (json.data.logged_in) {
                this.setState({
                    ...this.state,
                    message: ` confirm: name="${json.data.item.name}"  location="${json.data.item.location}"`,
                    errors: ''
                })
                this.speak(json.data.item.name, json.data.item.location)
            } else {
                this.setState({
                    ...this.state,
                    errors: json.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
        this.setState({
            ...this.state,
            name: '',
            location: ''
        })
    };

    handleErrors = () => {
        return (
            <div className='error-div'>
              {this.state.errors.map(error => {
                  return (
                  <p className='error' key={error}>ERROR: {error}{<br></br>}</p>
                  ) 
              })};
          </div>
        )
    };

    speak = (name, location) => {
        var msg = `item ${name} saved to location ${location}`
        const speek = new SpeechSynthesisUtterance(msg);
        window.speechSynthesis.speak(speek);
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
            <div className='addItem'>
                <Logo/>
                <Navbar/>
                <div className='message'>
                    {this.state.message? this.handleMessage() : null}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <input onChange={this.handleChange}
                        type='text' name='name' className='input'
                        placeholder='add item name'
                        value={this.state.name}/>
                    </div>
                    <div className='field'>
                            <input onChange={this.handleChange}
                        type='text' name='location' className='input'
                        placeholder='add item location'
                        value={this.state.location}/>
                    </div>
                    <button type="submit" className='text'>{'next >'}</button>
                </form>
                <div>
                    {this.state.errors? this.handleErrors() : null}
                </div>
            </div>
        ) 
    };  
};

export default AddItem;