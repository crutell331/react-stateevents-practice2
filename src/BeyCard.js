import React from "react"

class BeyCard extends React.Component {
  state = { fav: this.props.info.favorite }

  render() {
    const beyInfo = this.props.info
    return (
      <div onClick={() => this.props.clicked(this)}>
        <h3>{beyInfo.name}</h3>
        {<img src={beyInfo.img} />}
      </div>
    )
  }
}

export default BeyCard
