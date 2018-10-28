import React, { Component } from "react"
import TaskItem from "./TaskItem"

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
          <TaskItem
            icon="fas fa-info-circle"
            text="Barcelona vs Real Madrid Oct-28"
          />
          <TaskItem text="Call Doctor Smith about Invoice #3434223" />
          <TaskItem
            icon="fas fa-smile-beam"
            text="Follow Up with Mr. Smith at Memorial West"
          />
          <TaskItem
            icon="fas fa-info-circle"
            text="Barcelona vs Real Madrid Oct-28"
          />
          <TaskItem />
          <TaskItem />
        </div>
      </div>
    )
  }
}
