import React, { Component } from "react"
import { Consumer } from "../GlobalComponents/logic/context"
import BarGraphItem from "./BarGraphItem"
import SectionTitle from "../GlobalComponents/SectionTitle"

export default class WeeklyPerformance extends Component {
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
          const { users } = value
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
                {users.map(user => (
                  <BarGraphItem key={user.name} user={user} />
                ))}
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
