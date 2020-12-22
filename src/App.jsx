import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./store";
import Landing from "./components/landing"
import Header from "./components/header"
import "./css/main.css"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" render={props => <Landing />} />
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
});

//actions que utilizo en este componente
export default connect(mapStateToProps, { })(App);

