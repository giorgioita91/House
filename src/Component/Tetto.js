import React, { Component } from "react";
import Sottotetto from "./Sottotetto";

export default class Tetto extends Component {
  render() {
    return (
      <div className="tetto">
        <div id="containerTetto"></div>
        <Sottotetto />
      </div>
    );
  }
}
