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
            <i class="fas fa-check" />
            <div class="case-description">
              <ul class="tags">
                <li>Princeton Hospital</li>
                <li>Memorial West</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btn-case row">
          <div className="col-3">
            <img
              src="/media/specialties/dentistry.png"
              alt="Respiratory Symbol"
            />
          </div>
          <div className="col pl-3">
            <h3>#73221</h3>
            <i class="fas fa-check" />

            <div class="case-description">
              <ul class="tags">
                <li>Princeton Hospital</li>
                <li>Memorial West</li>
                <li>Radiology</li>
                <li>Emergency</li>
              </ul>
              <div className="balance">
                Balance: <span>$12,021.97</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row btn-case complete ">
          <div className="col-3">
            <img src="/media/specialties/bones.png" alt="Respiratory Symbol" />
          </div>
          <div className="col pl-3">
            <h3>#10034</h3>
            <i class="fas fa-check" />
            <div class="case-description">
              <ul class="tags">
                <li>Princeton Hospital</li>
                <li>Memorial West</li>
                <li>Radiology</li>
                <li>Emergency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
