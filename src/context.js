import React, { Component } from "react"
const Context = React.createContext()

const reducer = (state, action) => {
  const random2 = Math.ceil(Math.random() * 101)
  const random3 = Math.ceil(Math.random() * 101)
  const random4 = Math.ceil(Math.random() * 101)
  const updatedUsers = [
    { name: "user1", range: parseInt(action.payload) },
    { name: "user2", range: random2 },
    { name: "user3", range: random3 },
    { name: "user4", range: random4 }
  ]

  let monthLeader = state.monthLeader
  monthLeader.range = 0
  let teamAverage = updatedUsers[0].range
  for (let i = 0; i < updatedUsers.length; i++) {
    if (updatedUsers[i].range >= monthLeader.range) {
      monthLeader = updatedUsers[i]
      teamAverage += updatedUsers[i].range
    }
  }
  teamAverage = parseInt(teamAverage / updatedUsers.length)

  if (action.payload)
    switch (action.type) {
      case `RANGE_UPDATE`:
        return {
          ...state,
          users: [...updatedUsers],
          monthLeader,
          teamAverage
        }
      default:
        return state
    }
}

export class Provider extends Component {
  state = {
    users: [
      { name: "user1", range: 75 },
      { name: "user2", range: 81 },
      { name: "user3", range: 65 },
      { name: "user4", range: 34 }
    ],
    myQueue: [
      {
        id: "90221",
        numHospitals: 2,
        category: "respiratory",
        balance: 0,
        isComplete: false
      },
      {
        id: "73221",
        numHospitals: 4,
        category: "dentistry",
        balance: 12021.97,
        isComplete: false
      },
      {
        id: "10034",
        numHospitals: 3,
        category: "bones",
        balance: 0,
        isComplete: true
      }
    ],
    monthLeader: { name: "user2", range: 75 },
    teamAverage: 64,
    hospitals: [
      "Princeton Hospital",
      "Memorial West",
      "Radiology",
      "Emergency"
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer