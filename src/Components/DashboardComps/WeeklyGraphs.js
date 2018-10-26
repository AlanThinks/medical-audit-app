import React, { Component } from "react"

export default class WeeklyPerformanceGraphs extends Component {
  render() {
    return (
      <div className="col-lg-7 week-stats">
        <h2>Weekly Performance</h2>
        <div className="bar-graph-group-item">
          <img src="/media/users/user1.jpg" />
          <div class="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
        </div>
        <div className="bar-graph-group-item">
          <img src="/media/users/user2.jpg" />
          <div class="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "81%" }}
              aria-valuenow="81"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              81%
            </div>
          </div>
        </div>
        <div className="bar-graph-group-item">
          <img src="/media/users/user3.jpg" />
          <div class="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              65%
            </div>
          </div>
        </div>
        <div className="bar-graph-group-item">
          <img src="/media/users/user4.jpg" />
          <div class="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "34%" }}
              aria-valuenow="34"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              34%
            </div>
          </div>
        </div>
      </div>
    )
  }
}
