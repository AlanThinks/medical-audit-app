import React, { Component } from "react"
import WeeklyPerformanceGraphs from "./DashboardComps/WeeklyGraphs"
import MyTasks from "./DashboardComps/MyTasks"
import TeamSummary from "./DashboardComps/TeamSummary"
import MyQueue from "./DashboardComps/MyQueue"

export default class DashboardView extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <WeeklyPerformanceGraphs />
          <MyTasks />
        </div>
        <div className="row">
          <TeamSummary />
          <MyQueue />
        </div>
      </div>
    )
  }
}
