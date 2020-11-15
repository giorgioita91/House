import React, { Component } from "react";

export default class Console extends Component {
  render() {
    return (
      <div id="containerConsole">
        <button
          className="Button giorno"
          onClick={this.props.bckC}
          style={{
            backgroundColor: this.props.statoB
              ? this.props.coloreB
              : "rgb(112, 203, 233)",
            color: this.props.statoW ? this.props.coloreW : "rgb(25, 25, 112)",
          }}
        >
          {this.props.statoBottoneCieloW ? this.props.bottoneCieloW : "Giorno"}
        </button>
        <button className="Button porta" onClick={this.props.bckP}>
          {this.props.statoBottonePortaW ? this.props.bottonePortaW : "Porta aperta"}
        </button>
        <button className="Button finestre" onClick={this.props.bckF}>
          Finestre
        </button>
      </div>
    );
  }
}
