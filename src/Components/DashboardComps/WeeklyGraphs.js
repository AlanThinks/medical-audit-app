import React, { Component } from "react"
import { Consumer } from "../../context"

export default class WeeklyPerformanceGraphs extends Component {
  state = { isVisible: true }
  toggleView() {
    this.setState({ isVisible: !this.state.isVisible })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const user1 = value.users[0]
          const user2 = value.users[1]
          const user3 = value.users[2]
          const user4 = value.users[3]
          return (
            <div className="col-lg-7 week-stats">
              <h2>
                Weekly Performance
                <i
                  onClick={e => this.toggleView()}
                  className={`fas fa-caret-${
                    this.state.isVisible ? "down" : "up"
                  }`}
                />
              </h2>
              <div className={`${this.state.isVisible ? "" : "not-visible"}`}>
                <div className="bar-graph-group-item">
                  <img
                    alt="placeholder alt text"
                    src="http://alanthinks.com/projects/medical-audit-app/media/users/user1.jpg"
                  />
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: user1.range.toString() + "%" }}
                      aria-valuenow={user1.range}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {user1.range < 7 ? "" : user1.range.toString() + "%"}{" "}
                    </div>
                  </div>
                </div>
                <div className="bar-graph-group-item">
                  <img
                    alt="placeholder alt text"
                    src="http://alanthinks.com/projects/medical-audit-app/media/users/user2.jpg"
                  />
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: user2.range.toString() + "%" }}
                      aria-valuenow={user2.range}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {user2.range < 7 ? "" : user2.range.toString() + "%"}{" "}
                    </div>
                  </div>
                </div>
                <div className="bar-graph-group-item">
                  <img
                    alt="placeholder alt text"
                    src="http://alanthinks.com/projects/medical-audit-app/media/users/user3.jpg"
                  />
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: user3.range.toString() + "%" }}
                      aria-valuenow={user3.range}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {user3.range < 7 ? "" : user3.range.toString() + "%"}{" "}
                    </div>
                  </div>
                </div>
                <div className="bar-graph-group-item">
                  <img
                    alt="placeholder alt text"
                    src="http://alanthinks.com/projects/medical-audit-app/media/users/user4.jpg"
                  />
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: user4.range.toString() + "%" }}
                      aria-valuenow={user4.range}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {user4.range < 7 ? "" : user4.range.toString() + "%"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
