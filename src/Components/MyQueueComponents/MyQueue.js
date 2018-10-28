import React, { Component } from "react"
import CaseButton from "./CaseButton"
// import NewCaseButton from "../EditCaseButton"
import { Consumer } from "../../context"
import SectionTitle from "../GlobalComponents/SectionTitle"

export default class MyQueue extends Component {
  constructor() {
    super()
    this.state = { isVisible: false }
    this.toggleView = this.toggleView.bind(this)
  }
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
              <SectionTitle
                h2="My Queue"
                toggleView={this.toggleView}
                isVisible={this.state.isVisible}
              />
              <i className="fas fa-plus" />
              <div
                className={`all-cases ${
                  this.state.isVisible ? "" : "not-visible"
                }`}
              >
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
