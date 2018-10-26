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
  complete(e) {
    this.setState({ isComplete: !this.state.isComplete })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { hospitals } = value
          return (
            <div
              onClick={e => this.complete(e)}
              className={`row btn-case ${
                this.state.isComplete ? "complete" : ""
              }`}
            >
              <div className="col-3">
                <img
                  src={`/media/specialties/${this.state.category}.png`}
                  alt="Respiratory Symbol"
                />
              </div>
              <div className="col pl-3">
                <h3>#{this.state.id}</h3>
                <i className="fas fa-check" />

                <div className="case-description">
                  <ul className="tags">
                    {hospitals.slice(0, this.state.numHospitals).map(name => (
                      <li>{name}</li>
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
