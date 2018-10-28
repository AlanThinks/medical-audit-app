import React, { Component } from "react"
import { Consumer } from "../context"

export default class EditCaseButton extends Component {
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
          const {
            id,
            category,
            numHospitals,
            balance,
            isComplete
          } = this.props.currentCase
          return (
            <div className={`row new-case`}>
              <div className="col">
                <div>
                  <i onClick={this.updateCase} className="fas fa-save" />
                </div>
                <form onSubmit={this.updateCase}>
                  <div className="form-group">
                    <label htmlFor="idNumberInput">ID Number</label>
                    <input
                      className="form-control"
                      id="idNumberInput"
                      name="id"
                      value={id}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  {/* <div className="form-group">
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
                    <select
                      value={numHospitals}
                      onChange={e => this.handleChange(e)}
                      className="form-control"
                      id="labelsSelect"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="balanceInput">Balance</label>
                    <input
                      className="form-control"
                      id="balanceInput"
                      value={balance}
                      onChange={e => this.handleChange(e)}
                      name="balance"
                    />
                  </div>
                  <button
                    style={{ display: "none" }}
                    type="submit"
                    value="submit"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
