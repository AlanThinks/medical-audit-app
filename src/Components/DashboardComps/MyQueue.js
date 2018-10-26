import React, { Component } from "react"
import CaseButton from "../CaseButton"
import { Consumer } from "../../context"

export default class MyQueue extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { myQueue } = value
          console.log(myQueue)
          return (
            <div className="col my-queue">
              <h2>My Queue</h2>
              {myQueue.map(eachCase => (
                <CaseButton
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
