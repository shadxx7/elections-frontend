// NPM imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

//Global CSS File
import "./style/index.scss";

//Private Routes
import PrivateRoute from "./utils/PrivateRoute";

//Store and Persistor
import { store, persistor } from "./store";

//Create-React-App Import for faster loading
import * as serviceWorker from "./serviceWorker";

//Component Imports
import LoginPage from "./components/Login/";
import PollMain from "./components/Poll/";
import AdminDashboard from "./components/AdminDashboard";

//react-toastify library
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 4000,
  pauseOnHover: false
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <Switch>
          <PrivateRoute path="/admin" component={AdminDashboard} />
          <PrivateRoute path="/poll" component={PollMain} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
