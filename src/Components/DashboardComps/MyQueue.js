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
              {myQueue.map(caseItem => (
                <CaseButton
                  key={caseItem.id}
                  id={caseItem.id}
                  numHospitals={caseItem.numHospitals}
                  category={caseItem.category}
                  balance={caseItem.balance}
                  isComplete={caseItem.isComplete}
                />
              ))}
            </div>
          )
        }}
      </Consumer>
    )
  }
}
