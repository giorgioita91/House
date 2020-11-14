import React, { Component } from "react";

export default class Console extends Component {

  render() {
    return (
      <div id="containerConsole">
        <button className="Button giorno" onClick={this.props.bckG}>
          Giorno
        </button>
        <button className="Button porta" onClick={this.props.bckP}>Porta</button>
      </div>
    );
  }
}
