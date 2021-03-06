import React, { Component } from "react"
import CaseButton from "./CaseButton"
import NewCaseButton from "./NewCaseButton"
import { Consumer } from "../GlobalComponents/logic/context"
import SectionTitle from "../GlobalComponents/SectionTitle"
import uniqid from "uniqid"

export default class MyQueue extends Component {
  constructor() {
    super()
    this.state = { uniqId: uniqid(), isVisible: false, newCaseHidden: false }
    this.toggleView = this.toggleView.bind(this)
    this.toggleNewCase = this.toggleNewCase.bind(this)
  }

  toggleView() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  toggleNewCase() {
    const { isVisible } = this.state
    if (isVisible) {
      this.setState({
        newCaseHidden: !this.state.newCaseHidden
      })
    } else {
      this.setState({
        newCaseHidden: true,
        isVisible: true
      })
    }
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
              <i onClick={this.toggleNewCase} className="fas fa-plus" />
              <div
                className={`all-cases ${
                  this.state.isVisible ? "" : "not-visible"
                }`}
              >
                <NewCaseButton
                  uniqId={this.state.uniqId}
                  toggleNewCase={this.toggleNewCase}
                  newCaseHidden={this.state.newCaseHidden}
                />
                {myQueue.map(caseItem => (
                  <CaseButton
                    key={caseItem.id}
                    id={caseItem.id}
                    case={caseItem}
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
