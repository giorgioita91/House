import React, { Component } from "react";

export default class Console extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="containerConsole">
        <button
          className="Button giorno"
          onClick={this.props.statoC}
          style={{
            backgroundColor: this.props.statoBC
              ? this.props.coloreBC
              : "#1CACF4",
            color: this.props.statoBC
              ? this.props.coloreTC
              : "#041C94",
          }}
        >
          {this.props.statoBC ? this.props.bottoneTC : "Giorno"}
        </button>
        <button
          className="Button porta"
          onClick={this.props.statoP}
          style={{
            backgroundColor: this.props.statoBP
              ? this.props.coloreBP
              : "#B40404",
            color: this.props.statoBP
              ? this.props.coloreTP
              : "#FCE474",
          }}
        >
          {this.props.statoBP ? this.props.bottoneTP : "Chiudi la porta"}
        </button>
        <button
          className="Button finestre"
          onClick={this.props.statoF}
          style={{
            backgroundColor: this.props.statoBF
              ? this.props.coloreBF
              : "#B40404",
            color: (this.props.statoBF)
            ? this.props.coloreTF
            : "#FCE474"
          }}
        >
          {this.props.statoBF ? this.props.bottoneTF : "Spegni le luci"}
        </button>
      </div>
    );
  }
}
