import React, { Component } from "react"
import { Consumer } from "../../context"

export default class ModalSettings extends Component {
  updateRange1(e, dispatch) {
    // Using React's Context API to dispatch this action which
    // track if the modal should be open/closes in the Provider
    dispatch({ type: "RANGE_UPDATE", payload: e.target.value })
  }
  render() {
    return (
      <Consumer>
        {value => {
          // Data coming from 'vale' comes from the Provider in
          // ./data/context.js
          const { range1, dispatch } = value
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
                      value={range1}
                      type="range"
                      className="custom-range"
                      id="customRange1"
                    />
                  </div>
                  {/* <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Update
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
