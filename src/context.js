import React, { Component } from "react"
import uniqid from "uniqid"
const Context = React.createContext()

const reducer = (state, action) => {
  let updatedQueue = []
  switch (action.type) {
    case `RANGE_UPDATE`:
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

      return {
        ...state,
        users: [...updatedUsers],
        monthLeader,
        teamAverage
      }

    case `CREATE_CASE`:
      console.log(state.myQueue)
      state.myQueue.unshift(action.payload)
      console.log(updatedQueue, action.payload)
      return {
        ...state,
        myQueue: state.myQueue
      }

    case `UPDATE_CASE`:
      updatedQueue = state.myQueue.map((caseObj, i) => {
        if (action.payload.id === i) {
          return action.payload.user
        }
        return caseObj
      })

      return {
        ...state,
        myQueue: updatedQueue
      }

    case `DELETE_CASE`:
      updatedQueue = state.myQueue.filter(
        caseObj => action.payload.id !== caseObj.id
      )

      return {
        ...state,
        myQueue: updatedQueue
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
        id: uniqid(),
        caseId: uniqid(),
        numHospitals: 2,
        category: "respiratory",
        balance: 0,
        isComplete: false
      },
      {
        id: uniqid(),
        caseId: uniqid(),
        numHospitals: 4,
        category: "dentistry",
        balance: 12021.97,
        isComplete: false
      },
      {
        id: uniqid(),
        caseId: uniqid(),
        numHospitals: 3,
        category: "orthopedic",
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
    categories: [
      "Orthopedic",
      "Dentistry",
      "Neurology",
      "Optometry",
      "Respiratory"
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
