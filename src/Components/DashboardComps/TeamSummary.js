import React, { Component } from "react"

export default class TeamSummary extends Component {
  render() {
    return (
      <div className="col-lg-7 summary">
        <h2>Team Summary</h2>
        <div className="row">
          <div className="circ1 col-4">
            <h3>October Leader</h3>
            <div class="circ1 c100 p85 big">
              <span>
                <img alt="This Week's Leader" src="/media/users/user2.jpg" />
              </span>
              <div class="slice">
                <div class="bar" />
                <div class="fill" />
              </div>
            </div>
            <p>
              <dot />
              Completed
            </p>
            <p>
              <dot />
              In Progress
            </p>
            <p>
              <dot />
              Under Review
            </p>
          </div>
          <div className="circ2 col-4">
            <h3>Team Audits</h3>
            <div class="circ2 c100 p80 big">
              <span>70%</span>
              <div class="slice">
                <div class="bar" />
                <div class="fill" />
              </div>
            </div>
            <p>
              <dot />
              Completed
            </p>
            <p>
              <dot />
              In Progress
            </p>
            <p>
              <dot />
              Under Review
            </p>
          </div>

          <div className="circ3 col-4">
            <h3>Team Tasks</h3>
            <div class="circ3 c100 p20 big">
              <span>20%</span>
              <div class="slice">
                <div class="bar" />
                <div class="fill" />
              </div>
            </div>
            <p>
              <dot />
              Follow-Ups
            </p>
            <p>
              <dot />
              Corrections
            </p>
            <p>
              <dot />
              Verifications
            </p>
          </div>
        </div>
      </div>
    )
  }
}
