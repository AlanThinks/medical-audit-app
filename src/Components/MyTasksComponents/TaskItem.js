import React, { Component } from "react"
import { Consumer } from "../GlobalComponents/logic/context"

export default class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: this.props.icon ? this.props.icon : "fas fa-question-circle",
      text: this.props.text,
      isEditing: false
    }
    this.toggleEditing = this.toggleEditing.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing })
  }
  taskEditRendering() {
    let { icon, text } = this.state
    return (
      <form onSubmit={this.toggleEditing}>
        <div className="row task-item editing">
          <div onClick={this.toggleEditing} className="col-2">
            <i className={icon} />
          </div>
          <div className="col-10 task-text">
            <textarea
              name="text"
              className="form-control"
              onChange={this.handleChange}
              value={text}
              type="text"
            />
          </div>
        </div>
      </form>
    )
  }

  taskRendering() {
    let { icon, text } = this.state
    if (text.replace(/\s/g, "")) {
      return (
        <div className="row task-item">
          <div className="col-2">
            <i className={icon} />
          </div>
          <div onClick={this.toggleEditing} className="col-10 task-text">
            <p>{text}</p>
          </div>
        </div>
      )
    }
    return (
      <div className="row task-item">
        <button onClick={this.toggleEditing} className="btn">
          New Task
        </button>
      </div>
    )
  }

  render() {
    return (
      <Consumer>
        {value => {
          if (this.state.isEditing) {
            return this.taskEditRendering()
          }
          return this.taskRendering()
        }}
      </Consumer>
    )
  }
}
