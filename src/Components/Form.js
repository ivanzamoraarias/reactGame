import React, { Component } from 'react';
import axios from 'axios';
class Form extends Component{
    state={username:''};
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event: Form Submit ', this.state.username);
        axios.get(`https://api.github.com/users/${this.state.username}`)
            .then(resp => {
                console.log(resp);
                this.props.onSubmit(resp.data);
                this.setState({username: ''});
            });
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    value={this.state.username}
                    onChange={(event)=> this.setState({username: event.target.value})}
                    placeholder="Git Hub user name" required />
                <button type="submit">Add User</button>
            </form>
        );
    }
};
export default Form;