import React, { Component } from "react"
import WeeklyPerformanceGraphs from "./DashboardComps/WeeklyGraphs"
import MyTasks from "./DashboardComps/MyTasks"
import TeamSummary from "./DashboardComps/TeamSummary"
import MyQueue from "./DashboardComps/MyQueue"
import MediaQuery from "react-responsive"

export default class DashboardView extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <MediaQuery minWidth={990}>
            {matches => {
              if (matches) {
                return (
                  <React.Fragment>
                    <WeeklyPerformanceGraphs />
                    <MyQueue />
                    <TeamSummary />
                    <MyTasks />
                  </React.Fragment>
                )
              } else {
                return (
                  <React.Fragment>
                    <WeeklyPerformanceGraphs />
                    <TeamSummary />
                    <MyQueue />
                    <MyTasks />
                  </React.Fragment>
                )
              }
            }}
          </MediaQuery>
        </div>
      </div>
    )
  }
}
