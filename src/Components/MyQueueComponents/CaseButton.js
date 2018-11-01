import React, { Component } from "react"
import EditCaseButton from "./EditCaseButton"
import { Consumer } from "../GlobalComponents/logic/context"

export default class CaseButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: { ...this.props.case },
      id: this.props.id,
      isEditing: false
    }
    this.editCase = this.editCase.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  deleteCase(e, dispatch) {
    dispatch({ type: "DELETE_CASE", payload: this.state.user })
  }

  completeCase(e, dispatch) {
    let { user } = this.state
    user.isComplete = !user.isComplete

    this.setState({ user: user })
    // dispatch({ type: "CASE_UPDATE", payload: this.state })
  }

  handleChange(e) {
    let { user } = this.state
    user[e.target.name] = e.target.value
    this.setState({ user: user })
  }
  editCase(e, dispatch) {
    this.setState({
      isEditing: !this.state.isEditing,
      isComplete: !this.state.user.isComplete
    })
    if (!this.state.isEditing) {
      dispatch({ type: "UPDATE_CASE", payload: this.state })
    }
  }

  showBalance() {
    const { balance } = this.state.user
    if (balance <= 0) {
      return ""
    } else {
      return (
        <div className="balance">
          Balance:{" "}
          <span>
            $
            {parseFloat(balance)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
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
          const { isEditing, user } = this.state
          if (isEditing) {
            return (
              <EditCaseButton
                currentCase={user}
                editCase={e => this.editCase(e, dispatch)}
                handleChange={this.handleChange}
              />
            )
          }
          return (
            <div
              onClick={e => this.completeCase(e, dispatch)}
              className={`row btn-case ${user.isComplete ? "complete" : ""}`}
            >
              <div className="col-3">
                <img
                  src={`http://alanthinks.com/projects/medical-audit-app/media/specialties/${
                    user.category
                  }.png`}
                  alt={`${user.category} symbol`}
                />
                <i className="fas fa-check" />
              </div>
              <div className="col pl-3">
                <h3>#{user.caseId.toUpperCase()}</h3>
                <div>
                  <i
                    onClick={e => this.deleteCase(e, dispatch)}
                    className="fas fa-trash"
                  />
                </div>
                <i
                  onClick={e => this.editCase(e, dispatch)}
                  className="fas fa-edit"
                />
                <div className="case-description">
                  <ul className="tags">
                    {hospitals.slice(0, user.numHospitals).map((name, i) => (
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
