import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-md mr-auto navbar-light bg-light d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          <img
            src="http://alanthinks.com/projects/medical-audit-app/media/ev-logo.png"
            height="30"
            alt="Envision Logo"
          />
        </Link>
        <div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 dropleft">
            <span style={{ marginTop: "12%" }}> Welcome Leo!</span>
            {/* <li className="nav-item dropdown"> */}
            <li
              className="nav-link"
              data-toggle="modal"
              data-target="#modalSettings"
              data-backdrop="false"
            >
              <img
                className="user-picture"
                src="http://alanthinks.com/projects/medical-audit-app/media/users/user1.jpg"
                alt=""
              />
            </li>
            {/* <li className="nav-item dropdown">
              <li
                className="nav-link dropdown-toggle "
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="user-picture"
                  src="http://alanthinks.com/projects/medical-audit-app/media/users/user1.jpg"
                  alt=""
                />
              </li> */}
            {/* <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Link to="/" className="dropdown-item">
                  My Profile
                </Link>
                <Link to="/" className="dropdown-item">
                  Logout
                </Link>
              </div> */}
            {/* </li> */}
          </ul>
        </div>
      </nav>
    )
  }
}
