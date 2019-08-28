import React, { Component } from "react"
import BeyCard from "./BeyCard"

export default class Favorites extends Component {
  render() {
    const favBeys = this.props.favBeys
      .filter(bey => bey.favorite)
      .map(bey => (
        <BeyCard
          key={"bey-" + bey.id}
          info={bey}
          clicked={this.props.clicked}
        />
      ))

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {favBeys}
      </div>
    )
  }
}
