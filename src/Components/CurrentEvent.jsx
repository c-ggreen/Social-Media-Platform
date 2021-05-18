import React, { Component } from "react";

class CurrentEvent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.data.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <p className="card-text">
            {this.props.data.description}
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentEvent;
