import React, { Component } from 'react';
import { connect } from 'react-redux';
import './User.css';

class User extends Component {

    render() {
        return (
            <div className="user">
                <label>First Name
                <h2 className="firstName">{this.props.user.firstName}</h2>
                </label>
                <label>Last Name
                <h2 className="lastName">{this.props.user.lastName}</h2>
                </label>
                <label>Country
                <h2 className="lastName">{this.props.user.selectCountry}</h2>
                </label>
                <div className="buttons">
                    <button className="edit" 
                        onClick={() => this.props.dispatch({type:'EDIT-USER', id: this.props.user.id})}>
                         <i className="fas fa-user-edit"></i>
                    </button>
                    <button className="delete"
                        onClick={() => this.props.dispatch({type:'DELETE-USER', id: this.props.user.id})}>
                        <i className="fas fa-user-minus"></i>
                    </button>
                </div>
            </div>
        );
    }
}


export default connect()(User);