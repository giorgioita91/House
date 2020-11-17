import React, { Component } from "react";

export default class Facciata extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="containerFacciata">
        <div id="finestra">
          <div
            className="finestraSx"
            style={{
              backgroundColor: this.props.statoFin
                ? this.props.coloreF
                : "#FCE474",
            }}
          ></div>
          <div
            className="finestraDx"
            style={{
              backgroundColor: this.props.statoFin
                ? this.props.coloreF
                : "#FCE474",
            }}
          ></div>
        </div>
        <div
          id="porta"
          style={{
            backgroundColor: this.props.statoPo
              ? this.props.coloreP
              : "#FCE474",
          }}
        ></div>
      </div>
    );
  }
}
