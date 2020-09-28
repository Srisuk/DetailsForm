import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import showResults from "./components/showResults";
import Login from "./components/Login";
import PersonalDetailsForm from "./components/DetailForms/PersonalDetailForm";
import AddressDetailForm from "./components/DetailForms/AddressDetailForm";
import ExperienceDetailForm from "./components/DetailForms/ExperienceDetailForm";
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/personaldetails" component={PersonalDetailsForm} />
          <Route exact path="/addressdetails" component={AddressDetailForm} />
          <Route exact path="/experiencedetails" component={ExperienceDetailForm} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  </Provider>,
  rootEl
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
