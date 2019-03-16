import React, { Component } from 'react';
import UsersList from './components/UsersList';
import './styles/App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <UsersList />
        </div>
    );
  }
}

export default App;
