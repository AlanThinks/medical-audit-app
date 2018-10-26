import React, { Component } from "react"

export default class MyQueue extends Component {
  render() {
    return (
      <div className="col my-queue">
        <h2>My Queue</h2>
        <div className="btn-case row">
          <div className="col-3">
            <img
              src="/media/specialties/respiratory.png"
              alt="Respiratory Symbol"
            />
          </div>
          <div className="col pl-3">
            <h3>#90221</h3>
          </div>
        </div>
        <div className="btn-case row">
          <div className="col-3">
            <img
              src="/media/specialties/neurology.png"
              alt="Respiratory Symbol"
            />
          </div>
          <div className="col pl-3">
            <h3>#777891</h3>
          </div>
        </div>
        <div className="btn-case row">
          <div className="col-3">
            <img
              src="/media/specialties/optometry.png"
              alt="Respiratory Symbol"
            />
          </div>
          <div className="col pl-3">
            <h3>#50478</h3>
          </div>
        </div>
      </div>
    )
  }
}
