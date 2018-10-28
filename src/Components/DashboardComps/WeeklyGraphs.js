import React, { Component } from "react"
import { Consumer } from "../../context"
import BarGraphItem from "../BarGraphItem"
import SectionTitle from "./SectionTitle"

export default class WeeklyPerformanceGraphs extends Component {
  constructor() {
    super()
    this.state = { isVisible: true }
    this.toggleView = this.toggleView.bind(this)
  }
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
              <SectionTitle
                h2="Weekly Performance"
                toggleView={this.toggleView}
                isVisible={this.state.isVisible}
              />
              <div
                className={`all-graph-items ${
                  this.state.isVisible ? "" : "not-visible"
                }`}
              >
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
