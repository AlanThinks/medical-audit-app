import React, { Component } from "react"

export default class DashboardView extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-8 week-stats">
            <h2>Weekly Performance</h2>
            <div className="bar-graph-group-item">
              <img src="https://www.toplist.pk/assets/images/circle1.png" />
              <div class="progress" style={{ width: "95%", height: 25 }}>
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
              <img src="https://www.toplist.pk/assets/images/circle1.png" />
              <div class="progress" style={{ width: "95%", height: 25 }}>
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
              <img src="https://www.toplist.pk/assets/images/circle1.png" />
              <div class="progress" style={{ width: "95%", height: 25 }}>
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
              <img src="https://www.toplist.pk/assets/images/circle1.png" />
              <div class="progress" style={{ width: "95%", height: 25 }}>
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

          <div className="col my-tasks">
            <h2>My Tasks</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8 summary">
            <h2>Team Summary</h2>
          </div>
          <div className="col my-queue">
            <h2>My Queue</h2>
          </div>
        </div>
      </div>
    )
  }
}
