import React, { Component } from "react"
import { Consumer } from "../context"

export default class BarGraphItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numHospitals: this.props.numHospitals,
      editCase: this.props.editCase,
      handleChange: this.props.handleChange
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

  render() {
    return (
      <Consumer>
        {value => {
          // const { categories, dispatch } = value
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
                  {range < 7 ? "" : range.toString() + "%"}{" "}
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
