import React, { Component } from "react"
import { Consumer } from "../../context"
import BarGraphItem from "../BarGraphItem"

export default class WeeklyPerformanceGraphs extends Component {
  state = { isVisible: true }
  toggleView() {
    this.setState({ isVisible: !this.state.isVisible })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const [user1, user2, user3, user4] = value.users
          return (
            <div className="col-lg-7 week-stats">
              <h2>
                Weekly Performance
                <i
                  onClick={e => this.toggleView()}
                  className={`fas fa-caret-down`}
                  style={{
                    transform: `translateY(5px) rotate(${
                      this.state.isVisible ? "0deg" : "180deg"
                    })`
                  }}
                />
              </h2>
              <div className={`${this.state.isVisible ? "" : "not-visible"}`}>
                <BarGraphItem user={user1} />
                <BarGraphItem user={user2} />
                <BarGraphItem user={user3} />
                <BarGraphItem user={user4} />
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
