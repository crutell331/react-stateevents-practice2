import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"

class App extends React.Component {
  state = { allBeys: [], favBeys: [] }

  componentDidMount() {
    fetch("http://localhost:4000/beys")
      .then(resp => resp.json())
      .then(json => {
        this.setState({ allBeys: json, favBeys: json })
      })
  }

  handleClick = bey => {
    fetch(`http://localhost:4000/beys/${bey.props.info.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favorite: !bey.props.info.favorite
      })
    })
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
      })

    let allBeys = this.state.favBeys
    let newBeys = allBeys.filter(beyInstance => beyInstance !== bey.props.info)
    bey.props.info.favorite = !bey.props.info.favorite
    newBeys = [bey.props.info, ...newBeys]
    this.setState({ favBeys: newBeys })
  }

  render() {
    // console.log("APP", this.state.allBeys)
    return (
      <div className="container">
        <BeyContainer allBeys={this.state.allBeys} clicked={this.handleClick} />
        <Favorites favBeys={this.state.favBeys} clicked={this.handleClick} />
      </div>
    )
  }
}

export default App
