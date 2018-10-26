import React, { Component } from "react"
import { Consumer } from "../../context"

export default class ModalSettings extends Component {
  updateRange1(e, dispatch) {
    // Using React's Context API to dispatch this action which
    // track if the modal should be open/closes in the Provider
    dispatch({ type: "RANGE1_UPDATE", payload: e.target.value })
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
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Developer Test Settings</h5>
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
                    <label htmlFor="customRange1">User 1 Bar Graph</label>
                    <input
                      onChange={e => this.updateRange1(e, dispatch)}
                      value={range1}
                      type="range"
                      className="custom-range"
                      id="customRange1"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Update
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
