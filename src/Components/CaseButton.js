import React, { Component } from "react"
import { Consumer } from "../context"

export default class CaseButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      category: props.category,
      numHospitals: props.numHospitals,
      balance: props.balance,
      isComplete: props.isComplete
    }
  }
  deleteCase(e, dispatch) {
    dispatch({ type: "DELETE_CASE", payload: this.state })
  }

  completeCase(e, dispatch) {
    this.setState({ isComplete: !this.state.isComplete })
    dispatch({ type: "CASE_UPDATE", payload: this.state })
  }

  showBalance() {
    if (this.state.balance <= 0) {
      return ""
    } else {
      return (
        <div className="balance">
          Balance:{" "}
          <span>
            ${this.state.balance.toString().replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </span>
        </div>
      )
    }
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { hospitals, dispatch } = value
          return (
            <div
              onClick={e => this.completeCase(e, dispatch)}
              className={`row btn-case ${
                this.state.isComplete ? "complete" : ""
              }`}
            >
              <div className="col-3">
                <img
                  src={`http://alanthinks.com/projects/medical-audit-app/media/specialties/${
                    this.state.category
                  }.png`}
                  alt={`${this.state.category} symbol`}
                />
              </div>
              <div className="col pl-3">
                <h3>#{this.state.id}</h3>
                <i className="fas fa-check" />
                <i
                  onClick={e => this.deleteCase(e, dispatch)}
                  className="fas fa-trash"
                />
                <div className="case-description">
                  <ul className="tags">
                    {hospitals
                      .slice(0, this.state.numHospitals)
                      .map((name, i) => (
                        <li key={i}>{name}</li>
                      ))}
                  </ul>
                  {this.showBalance()}
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
