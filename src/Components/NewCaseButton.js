import React, { Component } from "react"
import { Consumer } from "../context"

export default class NewCaseButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 23423,
      category: "optometry",
      numHospitals: 3,
      balance: 800,
      isComplete: false,
      editCase: this.props.editCase
    }
  }
  createCase(e, dispatch) {
    this.state.editCase()
    // dispatch({ type: "CREATE_CASE", payload: this.state })
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { categories, dispatch } = value
          return (
            <div className={`row btn-case new-case`}>
              <div className="col">
                <i onClick={e => this.createCase()} className="fas fa-times" />
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
