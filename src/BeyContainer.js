import React from "react"
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  render() {
    // console.log("BeyContainer", this.props.allBeys)
    const allBeys = this.props.allBeys.map(bey => (
      <BeyCard key={"bey-" + bey.id} info={bey} clicked={this.props.clicked} />
    ))

    return (
      <div className="index">
        <h1>Index</h1>
        {allBeys}
      </div>
    )
  }
}

export default BeyContainer
