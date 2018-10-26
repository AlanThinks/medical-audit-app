import React, { Component } from "react"
import { Consumer } from "../../context"

export default class ModalSettings extends Component {
  updateRange1(e, dispatch) {
    dispatch({ type: "RANGE_UPDATE", payload: e.target.value })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          const range = value.users[0].range
          console.log(range)
          return (
            <div
              className="modal fade"
              id="modalSettings"
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header" style={{ border: "none" }}>
                    <h2 className="modal-title">Developer Test Settings</h2>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <label htmlFor="customRange1">
                      <h3>The following range selector does the following:</h3>
                    </label>
                    <div className="ml-4">
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
                    </div>
                    <input
                      onChange={e => this.updateRange1(e, dispatch)}
                      value={range}
                      type="range"
                      className="custom-range"
                      id="customRange1"
                    />
                    <h3>Modify Last case in "My Queue":</h3>
                    <br />
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          ID Number
                        </label>
                        <input
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="012345"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Specialty (Image)
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Orthopedic</option>
                          <option>Dentist</option>
                          <option>Neurology</option>
                          <option>Optometry</option>
                          <option>Respiratory</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Number of Labels
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                        <div className="form-group">
                          <label htmlFor="balanceInput">Balance</label>
                          <input
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="5000.0"
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary disabled"
                      data-dismiss="modal"
                    >
                      Update (Working on it now)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
