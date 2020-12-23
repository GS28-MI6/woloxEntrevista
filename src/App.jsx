import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./store";
import Landing from "./components/landing"
import Header from "./components/header"
import Registro from "./components/registro"
import Lista from "./components/lista"
import PropTypes from 'prop-types';
import "./css/main.css"

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.token !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/registro" render={() => <Registro />} />
          <Route exact path="/listas" render={() => <Lista />} />
          {/* <PrivateRoute exact path="/listas" component={Registro} /> */}
        </Router>
      </Provider>
    );
  }
}

//All Prop Types

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  location: PropTypes.string,
}

//actions que utilizo en este componente
export default connect(null, { })(App);

