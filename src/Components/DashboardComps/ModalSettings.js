import React, { Component } from "react"
import { Consumer } from "../../context"

export default class ModalSettings extends Component {
  state = {
    id: "88888",
    numHospitals: 2,
    category: "respiratory",
    balance: 12,
    isComplete: false
  }

  updateRange1(e, dispatch) {
    dispatch({ type: "RANGE_UPDATE", payload: e.target.value })
  }

  // updateCase(dispatch, updatedCase) {
  //   dispatch({ type: "CASE_UPDATE", payload: updatedCase })
  // }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          const range = value.users[0].range
          return (
            <div
              data-show
              className="modal fade"
              id="modalSettings"
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header" style={{ border: "none" }}>
                    <h2 className="modal-title">{`Demo Range Selector: ${range}%`}</h2>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span style={{ fontSize: "2.2rem" }} aria-hidden="true">
                        &times;
                      </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {/* <div className="ml-4">
                      <ol>
                        <li>Directly modifies User 1's bar</li>
                        <li>Randomizes the other 3 bars</li>
                      </ol>
                    </div>
                    <h3>Subsequently the following happens:</h3>
                    <div className="ml-4">
                      <ol>
                        <li>The new "Monthly Leader" is shown</li>
                        <li>The team average is calculated</li>
                        <li>
                          Placeholder: User 1's value is shown in "Team Tasks"
                        </li>
                      </ol>
                    </div> */}
                    <h3>Select a value below:</h3>
                    <input
                      onChange={e => this.updateRange1(e, dispatch)}
                      value={range}
                      type="range"
                      className="custom-range"
                      id="customRange1"
                    />
                    {/* <h3>Modify third case in "My Queue":</h3>
                    <br />
                    <form>
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
                        <label htmlFor="specialtySelect">
                          Specialty (Image)
                        </label>
                        <select className="form-control" id="specialtySelect">
                          <option>Orthopedic</option>
                          <option>Dentist</option>
                          <option>Neurology</option>
                          <option>Optometry</option>
                          <option>Respiratory</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="labelsSelect">Number of Labels</label>
                        <select className="form-control" id="labelsSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                        <div className="form-group">
                          <label htmlFor="balanceInput">Balance</label>
                          <input
                            className="form-control"
                            id="balanceInput"
                            placeholder={this.state.balance}
                          />
                        </div>
                      </div>
                    </form> */}
                  </div>

                  {/* <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary disabled"
                      data-dismiss="modal"
                      onClick={e => this.updateCase(dispatch, this.state)}
                    >
                      Update (Working on it now)
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
