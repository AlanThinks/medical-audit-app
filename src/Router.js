// React & Router Imports
import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "./Components/GlobalComponents/logic/context"

// Components
// import LoginView from "./Components/LoginView"
import NavigationBar from "./Components/GlobalComponents/NavigationBar"
import ModalSettings from "./Components/GlobalComponents/ModalSettings"
import DashboardView from "./Components/DashboardView"
import CaseSearchView from "./Components/CaseSearchView"
import "./css/styles.css"

class Router extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
          <div className="container">
            <ModalSettings />
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={DashboardView} />z
              <Route exact path="/allcases" component={CaseSearchView} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Router
