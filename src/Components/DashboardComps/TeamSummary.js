import React, { Component } from "react"
import { Consumer } from "../../context"
import SectionTitle from "./SectionTitle"

export default class TeamSummary extends Component {
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
          const { teamAverage } = value
          const user1 = value.users[0]
          let { monthLeader } = value
          if (monthLeader.name.length < 1) {
            monthLeader.name = "user2"
          }
          return (
            <div className="col-lg-7 summary">
              <SectionTitle
                h2="Team Summary"
                toggleView={this.toggleView}
                isVisible={this.state.isVisible}
              />
              <div
                className={`row all-team-data ${
                  this.state.isVisible ? "" : "not-visible"
                }`}
              >
                <div className="circ1 col-lg-4">
                  <h3>October Leader</h3>
                  <div className={`circ1 c100 p${monthLeader.range} big`}>
                    <span>
                      <img
                        alt="This Week's Leader"
                        src={`http://alanthinks.com/projects/medical-audit-app/media/users/${
                          monthLeader.name
                        }.jpg`}
                      />
                    </span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                  <p>
                    <span className="dot" />
                    Completed
                  </p>
                  <p>
                    <span className="dot" />
                    In Progress
                  </p>
                  <p>
                    <span className="dot" />
                    Under Review
                  </p>
                </div>
                <div className="circ2 col-lg-4">
                  <h3>Team Average</h3>
                  <div className={`circ2 c100 p${teamAverage} big`}>
                    <span>{teamAverage}</span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                  <p>
                    <span className="dot" />
                    Completed
                  </p>
                  <p>
                    <span className="dot" />
                    In Progress
                  </p>
                  <p>
                    <span className="dot" />
                    Under Review
                  </p>
                </div>

                <div className="circ3 col-lg-4">
                  <h3>Team Tasks</h3>
                  <div className={`circ3 c100 p${user1.range} big`}>
                    <span>{user1.range}</span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                  <p>
                    <span className="dot" />
                    Follow-Ups
                  </p>
                  <p>
                    <span className="dot" />
                    Corrections
                  </p>
                  <p>
                    <span className="dot" />
                    Verifications
                  </p>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
