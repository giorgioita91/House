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
              : "rgb(112, 203, 233)",
            color: this.props.statoColoreTC
              ? this.props.coloreTC
              : "rgb(10, 60, 151)",
          }}
        >
          {this.props.statoBottoneTC ? this.props.bottoneTC : "Giorno"}
        </button>
        <button
          className="Button porta"
          onClick={this.props.statoP}
          style={{
            backgroundColor: this.props.statoBP
              ? this.props.coloreBP
              : "rgb(128, 0, 0)",
            color: this.props.statoColoreTP
              ? this.props.coloreTP
              : "rgb(255, 253, 143)",
          }}
        >
          {this.props.statoBottoneTP ? this.props.bottoneTP : "Chiudi la porta"}
        </button>
        <button
          className="Button finestre"
          onClick={this.props.statoF}
          style={{
            backgroundColor: this.props.statoBF
              ? this.props.coloreBF
              : "rgb(128, 0, 0)",
            color: (this.props.statoColoreTF)
            ? this.props.coloreTF
            : "rgb(255, 253, 143)"
          }}
        >
          {this.props.statoBottoneTF ? this.props.bottoneTF : "Spegni le luci"}
        </button>
      </div>
    );
  }
}
