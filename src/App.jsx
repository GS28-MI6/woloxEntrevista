import React, { useEffect, useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./store";
import PropTypes from "prop-types";
import "./css/main.css";
const Landing = React.lazy (() => import("./components/landing")) 
const Header = React.lazy (() => import("./components/header")) 
const Registro = React.lazy (() => import("./components/registro")) 
const Lista = React.lazy (() => import("./components/lista")) 
const NotFound = React.lazy (() => import("./components/notFound")) 


//Redirect when not logged in

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.token !== undefined ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Switch>
            <Route path="/registro">
              {loggedIn ? <Redirect to="/listas" /> : <Registro />}
            </Route>
            <PrivateRoute path="/listas" component={Lista} />
            <Route exact path="/" render={() => <Landing />} />
            <Route render={() => <NotFound />} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

//All Prop Types

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  location: PropTypes.string,
};

// App.propTypes = {
//   updateFavourites: PropTypes.func
// }

//actions que utilizo en este componente
export default connect(null, null)(App);
