import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserForm.css'

class UserForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const firstName = this.getFirstName.value;
        const lastName = this.getLastName.value;
        const selectCountry = this.getSelectCountry.value;

        const data = {
            id: new Date(),
            firstName,
            lastName,
            selectCountry
        }

        this.props.dispatch({
            type: 'ADD-USER',
            data
        });

        this.getFirstName.value = '';
        this.getLastName.value = '';
        this.getSelectCountry.value = 'Peru';

    }
    render() {
        return (
            <div className="container">
                    <h1 className="form-title">Create New User</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter First Name" required
                        ref={(input) => this.getFirstName = input} className="input" />
                    <br />
                    <br />
                    <input type="text" placeholder="Enter Last Name"
                        ref={(input) => this.getLastName = input} className="input" />
                    <br />
                    <br />
                    Country / Region
                    <br/>
                    <br/>
                    <select ref={(input) => this.getSelectCountry = input} required className="select">
                        <option value="Peru">Peru</option>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United Arabs">United Arabs</option>
                        <option value="Malasia">Malasia</option>
                        <option value="Argentina">Argentina</option>
                    </select>
                    <br />
                    <br />
                    <button className="button">Sign Up</button>
                </form>
            </div>
        );
    }
}


export default connect()(UserForm);