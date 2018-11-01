import React, { Component } from "react"
import { Consumer } from "../GlobalComponents/logic/context"

export default class BarGraphItem extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { range, name } = this.props.user
          return (
            <div className="bar-graph-group-item">
              <img
                data-toggle="modal"
                data-target="#modalSettings"
                alt="placeholder alt text"
                src={`http://alanthinks.com/projects/medical-audit-app/media/users/${name}.jpg`}
              />
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: range.toString() + "%" }}
                  aria-valuenow={range}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {range < 10 ? "" : range.toString() + "%"}{" "}
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
