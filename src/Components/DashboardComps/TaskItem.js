import React, { Component } from "react"
import { Consumer } from "../../context"

export default class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: this.props.icon,
      text: this.props.text
    }
    this.updateCase = this.updateCase.bind(this)
  }
  handleChange(e) {
    this.state.handleChange(e)
  }
  updateCase(e) {
    this.state.editCase()
    // dispatch({ type: "CREATE_CASE", payload: this.state })
  }
  taskRendering() {
    let { icon, text } = this.state
    if (text) {
      if (!icon) {
        icon = "fas fa-question-circle"
      }
      return (
        <div className="row task-item">
          <div className="col-2">
            <i className={icon} />
          </div>
          <div className="col task-text">
            <p>{text}</p>
          </div>
        </div>
      )
    }
    return (
      <div className="row task-item">
        <button className="btn">New Task</button>
      </div>
    )
  }

  render() {
    return (
      <Consumer>
        {value => {
          return this.taskRendering()
        }}
      </Consumer>
    )
  }
}
