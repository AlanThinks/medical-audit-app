// React & Router Imports
import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "./data/context"

// Components
import LoginView from "./Components/LoginView"
import NavigationBar from "./Components/NavigationBar"
// import DashboardView from "./Component/DashboardView"
// import NotFound from "./Components/NotFound"
import "./css/styles.css"

class Router extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
          <div className="app">
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={LoginView} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Router
