import React, { Component } from "react"
import MediaQuery from "react-responsive"

import WeeklyPerformance from "./WeeklyPerfComponents/WeeklyPerformance"
import MyTasks from "./MyTasksComponents/MyTasks"
import TeamSummary from "./TeamSummaryComponents/TeamSummary"
import MyQueue from "./MyQueueComponents/MyQueue"

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
                    <WeeklyPerformance />
                    <MyTasks />
                    <TeamSummary />
                    <MyQueue />
                  </React.Fragment>
                )
              } else {
                return (
                  <React.Fragment>
                    <WeeklyPerformance />
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
