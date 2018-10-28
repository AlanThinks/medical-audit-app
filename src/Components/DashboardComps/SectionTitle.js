import React, { Component } from "react"

export default class SectionTitle extends Component {
  render() {
    return (
      <h2 onClick={this.props.toggleView}>
        {this.props.h2}
        <i
          onClick={this.props.toggleView}
          className={`fas fa-caret-up ${
            this.props.isVisible ? "rotate-carat" : ""
          }`}
        />
      </h2>
    )
  }
}
