import React, { Component } from "react"

export default class CaseSearchView extends Component {
  render() {
    return (
      <div className="casesearch-container">
        <div className="row">
          <div className="col-8">
            <h2>Case Search</h2>
            <button>Open</button>
            <button>Specialties</button>
            <button>Hospital</button>
            <div className="row" />
            <div className="row">
              <div className="col">case buttons</div>
            </div>
          </div>
          <div className="col">
            <h2>My Queue</h2>
            <button>case1</button>
            <button>case2</button>
            <button>case3</button>
          </div>
        </div>
      </div>
    )
  }
}
