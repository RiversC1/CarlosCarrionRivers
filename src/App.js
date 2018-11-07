import React, { Component } from 'react';
import './App.css';
import UserForm from './UserForm/UserForm'
import UserList from './UserList/UserList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
        <UserList />
      </div>
    );
  }
}

export default App;
