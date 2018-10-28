import React, { Component } from "react"
import { Consumer } from "../../context"

export default class NewCaseButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 23423,
      category: "optometry",
      numHospitals: 3,
      balance: 800,
      isComplete: false,
      toggleNewCase: this.props.toggleNewCase
    }
    this.toggleNewCase = this.toggleNewCase.bind(this)
  }
  createCase(e, dispatch) {
    this.state.toggleNewCase()
    // dispatch({ type: "CREATE_CASE", payload: this.state })
  }

  toggleNewCase() {
    this.state.toggleNewCase()
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { categories, dispatch } = value
          return (
            <div
              className={`row new-case ${
                this.props.newCaseHidden ? "" : "hide"
              }`}
            >
              <div className="col">
                <i onClick={this.toggleNewCase} className="fas fa-times" />
                <form onSubmit={e => this.createCase(e, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="idNumberInput">ID Number</label>
                    <input
                      className="form-control"
                      id="idNumberInput"
                      name="id"
                      value={this.state.id}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialtySelect">Specialty (Image)</label>
                    <div className="new-case-select">
                      <select className="form-control" id="specialtySelect">
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
                    <select className="form-control" id="labelsSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="balanceInput">Balance</label>
                    <input
                      className="form-control"
                      id="balanceInput"
                      placeholder={this.state.balance}
                    />
                  </div>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
