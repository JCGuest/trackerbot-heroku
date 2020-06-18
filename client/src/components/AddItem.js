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
        console.log(this.state)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // const { name, location } = this.state
        let item = {
            name: this.state.name,
            location: this.state.location
        }
        // let axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         "Access-Control-Allow-Origin": "*",
        //     }
        //   };
        // debugger
        axios.post(`http://localhost:3001/users/${this.props.user.id}/items`, {item}, {withCredentials:true})
        .then(json => {
            if (json.data.logged_in) {
                this.setState({
                    ...this.state,
                    message: ` saved name=${json.data.item.name}  location=${json.data.item.location} to database`
                })
            } else {
                this.setState({
                    ...this.state,
                    errors: json.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    };

    handleErrors = () => {
        return (
            <div className='error-div'>
              {this.state.errors.map(error => {
                  return (
                  <text className='error' key={error}>ERROR: {error}{<br></br>}</text>
                  ) 
              })};
          </div>
        )
    };

    handleMessage = () => {
        return (
            <div className='error-div'>
                <text className='error' >CONFIRMATION: {this.state.message}{<br></br>}</text>
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
                        placeholder='add item name'/>
                    </div>
                    <div className='field'>
                            <input onChange={this.handleChange}
                        type='text' name='location' className='input'
                        placeholder='add item location'/>
                    </div>
                    <button type="submit" className='text'>next ></button>
                </form>
                <div>
                    {this.state.errors? this.handleErrors() : null}
                </div>
            </div>
        ) 
    };  
};

export default AddItem;