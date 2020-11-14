import React, { Component } from "react";
import "./App.css";
import Console from "./Component/Console";
import Facciata from "./Component/Facciata";
import Prato from "./Component/Prato";
import Tetto from "./Component/Tetto";

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coloreGiorno: "rgb(112, 203, 233)",
      stato: true,
      colorePorta: "rgb(128, 0, 0)",
      statoPorta: true
    };
  }

  changeColorGiorno = () => {
    this.setState({
      stato: !this.state.stato
    });
  };

  changePorta = () => {
    this.setState({
      statoPorta: !this.state.statoPorta,
    });
  };


  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: (this.state.stato)
            ? this.state.coloreGiorno
            : "rgb(25, 25, 112)",
        }}
      >
        <Tetto />
        <Facciata stato={this.state.statoPorta} colore={this.state.colorePorta}/>
        <Prato />
        <Console bckG={this.changeColorGiorno} bckP={this.changePorta}/>
      </div>
    );
  }
}
