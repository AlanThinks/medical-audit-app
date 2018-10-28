import React, { Component } from "react"
import TaskItem from "./TaskItem"
import SectionTitle from "../GlobalComponents/SectionTitle"

export default class MyTasks extends Component {
  constructor() {
    super()
    this.state = { isVisible: false }
    this.toggleView = this.toggleView.bind(this)
  }
  toggleView() {
    this.setState({ isVisible: !this.state.isVisible })
  }
  render() {
    return (
      <div className="col-lg-5 my-tasks">
        <SectionTitle
          h2="My Tasks"
          toggleView={this.toggleView}
          isVisible={this.state.isVisible}
        />
        <i className="fas fa-plus" />
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
        </div>
      </div>
    )
  }
}
