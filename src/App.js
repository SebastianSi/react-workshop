import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import UsersList from './components/UsersList';
import Notfound from './components/staticPages/NotFound';
import ContactPage from './components/staticPages/Contact';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={UsersList} />
              <Route path="/contact/" exact component={ContactPage} />

              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
