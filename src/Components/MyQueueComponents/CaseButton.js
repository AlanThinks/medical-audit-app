import React, { Component } from "react"
import EditCaseButton from "./EditCaseButton"
import { Consumer } from "../../context"

export default class CaseButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      category: props.category,
      numHospitals: props.numHospitals,
      balance: props.balance,
      isComplete: props.isComplete,
      isEditing: false
    }
    this.editCase = this.editCase.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
            $
            {parseFloat(this.state.balance)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </span>
        </div>
      )
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  editCase() {
    this.setState({
      isEditing: !this.state.isEditing,
      isComplete: !this.state.isComplete
    })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { hospitals, dispatch } = value
          const { isEditing } = this.state
          if (isEditing) {
            return (
              <EditCaseButton
                currentCase={this.state}
                editCase={this.editCase}
                handleChange={this.handleChange}
              />
            )
          }
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
                <div>
                  <i
                    onClick={e => this.deleteCase(e, dispatch)}
                    className="fas fa-trash"
                  />
                </div>
                <i
                  onClick={e => this.editCase(e, dispatch)}
                  className="fas fa-pen"
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
