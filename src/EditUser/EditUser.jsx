import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditUser.css';


class EditUser extends Component {

    handleEdit = (e) =>{
        e.preventDefault();
        const newFirstName = this.getFirstName.value;
        const newLastName = this.getLastName.value;
        const newSelectCountry = this.getSelectCountry.value;

        const data = {
            newFirstName,
            newLastName,
            newSelectCountry
        }

        this.props.dispatch({type:'UPDATE', id:this.props.user.id, data: data})
    }

    render() {
        return (
            <div className="edit-container" key={this.props.user.id}>
               <h1>Edit User</h1>
                <form className="form" onSubmit={this.handleEdit}>
                    <input type="text" placeholder="Enter First Name" required
                     ref={(input) => this.getFirstName = input} 
                     defaultValue={this.props.user.firstName} className="input"/>
                    <br />
                    <br />
                    <input type="text" placeholder="Enter Last Name"
                    ref={(input) => this.getLastName = input} 
                    defaultValue={this.props.user.lastName} className="input"/>
                    <br />
                    <br />
                    <select ref={(input) => this.getSelectCountry = input} required 
                    defaultValue={this.props.user.selectCountry} className="select" >
                        <option value="Peru">Peru</option>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United Arabs">United Arabs</option>
                        <option value="Malasia">Malasia</option>
                        <option value="Argentina">Argentina</option>
                    </select>
                    <br />
                    <br/>
                    <button className="button">Save</button>
                </form>
            </div>
        );
    }
}


export default connect()(EditUser);