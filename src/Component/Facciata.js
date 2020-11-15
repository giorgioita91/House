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
              backgroundColor: this.props.statoF
                ? this.props.coloreF
                : "rgb(255, 246, 167)",
            }}
          ></div>
          <div
            className="finestraDx"
            style={{
              backgroundColor: this.props.statoF
                ? this.props.coloreF
                : "rgb(255, 246, 167)",
                
            }}
          ></div>
        </div>
        <div
          id="porta"
          style={{
            backgroundColor: this.props.statoP
              ? this.props.coloreP
              : "rgb(255, 246, 167)",
          }}
        ></div>
      </div>
    );
  }
}
