import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditUser from '../EditUser/EditUser';
import User from '../User/User';

class UserList extends Component {
    render() {
        return (
            <div className="list-container">
                <h1 className="list-header">Users</h1>
                {this.props.users.map((user)=> (
                    <div key={user.id}>
                        {user.editing ? <EditUser user={user} key={user.id} /> : <User user={user}
                            key={user.id}/>}
                    </div>
                ))}
                
            </div>
        );
    }
}


const mapSateToProps = (state) =>{
    return {
        users : state
    }
}

export default  connect(mapSateToProps)(UserList);