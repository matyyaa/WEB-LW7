import React from "react";

class GoodCard extends React.Component {
  good = this.props.good;
  render() {
    return (
      <div className="good">
        <img className="cardImage" alt={this.good.name} src={this.good.image} />
        <h3>{this.good.name}</h3>
        <h4>{this.good.brand}</h4>
        <h6>{this.good.volume}</h6>
        <h5>{this.good.price}</h5>
      </div>
    );
  }
}

export default GoodCard;
