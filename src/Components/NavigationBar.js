import React, { Component } from "react"
import EvLogo from "../media/ev-logo.png"

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-md mr-auto navbar-light bg-light d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          <img src={EvLogo} height="30" alt="Envision Logo" />
        </a>
        <div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 dropleft">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="user-picture"
                  src="https://www.toplist.pk/assets/images/circle1.png"
                  alt=""
                />
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  My Profile
                </a>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
