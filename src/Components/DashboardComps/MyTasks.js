import React, { Component } from "react"

export default class MyTasks extends Component {
  render() {
    return (
      <div className="col my-tasks">
        <h2>My Tasks</h2>
        <div className="all-tasks">
          <div className="row">
            <div className="col-2">
              <i className="fas fa-info-circle" />
            </div>
            <p>Barcelona vs Real Madrid Oct/28</p>
          </div>
          <div className="row">
            <div className="col-2">
              <i class="fas fa-question-circle" />
            </div>
            <p>Call Doctor Smith about Invoice #3434223</p>
          </div>
          <div className="row">
            <div className="col-2">
              <i class="fas fa-smile-beam" />
            </div>
            <p>Follow Up with Mr. Smith at Memorial West</p>
          </div>
          <div className="row">
            <button className="btn">New Task</button>
          </div>
          <div className="row">
            <button className="btn">New Task</button>
          </div>
        </div>
      </div>
    )
  }
}
