import React, { Component } from "react"
import uniqid from "uniqid"
import { Consumer } from "../../context"

export default class NewCaseButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        id: this.props.uniqId,
        caseId: this.props.uniqId,
        numHospitals: 1,
        category: "orthopedic",
        balance: "",
        isComplete: false
      },
      toggleNewCase: this.props.toggleNewCase
    }
    this.toggleNewCase = this.toggleNewCase.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  createCase(e, dispatch, categories) {
    e.preventDefault()
    const startIndex = Math.floor(Math.random() * categories.length)
    const newId = uniqid()
    const updatedUser = {
      id: newId,
      caseId: newId,
      numHospitals: Math.ceil(Math.random() * 4),
      category: categories
        .slice(startIndex, startIndex + 1)
        .toString()
        .toLowerCase(),
      balance: ""
    }
    this.setState({ user: updatedUser })
    this.state.toggleNewCase()
    dispatch({ type: "CREATE_CASE", payload: this.state.user })
  }

  toggleNewCase() {
    this.state.toggleNewCase()
  }

  handleChange(e) {
    let { user } = this.state
    user[e.target.name] = e.target.value
    this.setState({ user: user })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { categories, dispatch } = value
          const { user } = this.state
          return (
            <div
              className={`row new-case ${
                this.props.newCaseHidden ? "" : "hide"
              }`}
            >
              <div className="col">
                <i onClick={this.toggleNewCase} className="fas fa-times" />
                <form onSubmit={e => this.createCase(e, dispatch, categories)}>
                  <div className="form-group">
                    <label htmlFor="idNumberInput">ID Number</label>
                    <input
                      className="form-control"
                      id="idNumberInput"
                      name="caseId"
                      value={user.caseId.toUpperCase()}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialtySelect">Specialty (Image)</label>
                    <div className="new-case-select">
                      <select
                        name="category"
                        value={user.category}
                        onChange={this.handleChange}
                        className="form-control"
                        id="specialtySelect"
                      >
                        {categories.map((category, i) => (
                          <option key={i} value={category.toLowerCase()}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="labelsSelect">Number of Labels</label>
                    <select
                      value={user.numHospitals}
                      onChange={this.handleChange}
                      className="form-control"
                      id="labelsSelect"
                      name="numHospitals"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="balanceInput">Balance</label>
                    <input
                      className="form-control"
                      id="balanceInput"
                      name="balance"
                      value={user.balance}
                      onChange={this.handleChange}
                      placeholder="$0.00"
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-sm btn-block"
                    type="submit"
                    value="submit"
                  >
                    Create New Case
                  </button>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
