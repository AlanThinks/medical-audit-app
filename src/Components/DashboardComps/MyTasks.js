import React, { Component } from "react"

export default class MyTasks extends Component {
  state = { isVisible: false }
  toggleView() {
    this.setState({ isVisible: !this.state.isVisible })
  }
  render() {
    return (
      <div className="col-lg-5 my-tasks">
        <h2>
          My Tasks
          <i
            onClick={e => this.toggleView()}
            className={`fas fa-caret-down`}
            style={{
              transform: `translateY(5px) rotate(${
                this.state.isVisible ? "0deg" : "180deg"
              })`
            }}
          />
          <i className="fas fa-plus" />
        </h2>
        <div
          className={`all-tasks ${this.state.isVisible ? "" : "not-visible"}`}
        >
          <div className="row">
            <div className="col-2">
              <i className="fas fa-info-circle" />
            </div>
            <p>Barcelona vs Real Madrid Oct/28</p>
          </div>
          <div className="row">
            <div className="col-2">
              <i className="fas fa-question-circle" />
            </div>
            <p>Call Doctor Smith about Invoice #3434223</p>
          </div>
          <div className="row">
            <div className="col-2">
              <i className="fas fa-smile-beam" />
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
