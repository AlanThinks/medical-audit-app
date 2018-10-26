import React, { Component } from "react"
import CaseButton from "../CaseButton"
import { Consumer } from "../../context"

export default class MyQueue extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { myQueue } = value
          return (
            <div className="col-lg-5 my-queue">
              <h2>My Queue</h2>
              {myQueue.map((eachCase, i) => (
                <CaseButton
                  key={i}
                  id={eachCase.id}
                  numHospitals={eachCase.numHospitals}
                  category={eachCase.category}
                  balance={eachCase.balance}
                  isComplete={eachCase.isComplete}
                />
              ))}
            </div>
          )
        }}
      </Consumer>
    )
  }
}
