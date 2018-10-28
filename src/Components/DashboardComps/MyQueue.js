import React, { Component } from "react"
import CaseButton from "../CaseButton"
// import NewCaseButton from "../EditCaseButton"
import { Consumer } from "../../context"

export default class MyQueue extends Component {
  state = { isVisible: true }
  toggleView() {
    this.setState({ isVisible: !this.state.isVisible })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { myQueue } = value
          return (
            <div className="col-lg-5 my-queue">
              <h2>
                My Queue
                <i
                  onClick={e => this.toggleView()}
                  className={`fas fa-caret-down`}
                  style={{
                    transform: `translateY(5px) rotate(${
                      this.state.isVisible ? "0deg" : "180deg"
                    })`
                  }}
                />
                <i className="fas fa-plus" />
              </h2>
              <div className={`${this.state.isVisible ? "" : "not-visible"}`}>
                {/* <NewCaseButton /> */}
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
            </div>
          )
        }}
      </Consumer>
    )
  }
}
