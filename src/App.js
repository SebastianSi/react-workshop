import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import UsersList from './components/UsersList';
import Notfound from './components/staticPages/NotFound';
import ContactPage from './components/staticPages/Contact';
import Posts from './components/staticPages/Posts';
import { store, persistor } from './store';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" exact component={UsersList} />
                <Route path="/contact/" exact component={ContactPage} />
                <Route path="/posts" exact component={Posts} />

                <Route component={Notfound} />
              </Switch>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
