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
      //COLORE CIELO
      coloreCielo: "#1CACF4",
      statoCielo: true,
      //BOTTONE CIELO
      bottoneColoreCielo: "#041C94",
      bottoneTestoCielo: "Notte",
      coloreTestoCielo: "#1CACF4",
      statoBottoneCielo: true,
      //COLORE PORTA
      colorePorta: "#B40404",
      statoPorta: true,
      //BOTTONE PORTA
      bottoneColorePorta: "#FCE474",
      bottoneTestoPorta: "Apri la porta",
      coloreTestoPorta: "#B40404",
      statoBottonePorta: true,
      //COLORE FINESTRE
      coloreFinestre: "#B40404",
      statoFinestre: true,
      //BOTTONE FINESTRE
      bottoneColoreFinestre: "#FCE474",
      coloreTestoFinestre: "#B40404",
      bottoneTestoFinestre: "Accendi le luci",
      statoBottoneFinestre: true
    };
  }

  changeCielo = () => {
    this.setState({
      statoCielo: !this.state.statoCielo,
      statoBottoneCielo: !this.state.statoBottoneCielo
    });
  };

  changePorta = () => {
    this.setState({
      statoPorta: !this.state.statoPorta,
      statoBottonePorta: !this.state.statoBottonePorta
    })
  }

  changeFinestre = () => {
    this.setState({
      statoFinestre: !this.state.statoFinestre,
      statoBottoneFinestre: !this.state.statoBottoneFinestre
    })
  }

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: this.state.statoCielo
            ? this.state.coloreCielo
            : "#041C94",
        }}>
        <Tetto />
        <Facciata
          //COLORE PORTA
          coloreP={this.state.colorePorta}
          statoPo={this.state.statoPorta}
          //COLORE FINESTRE
          coloreF={this.state.coloreFinestre}
          statoFin={this.state.statoFinestre}
        />
        <Prato />
        <Console
          //COLORE CIELO
          statoC={this.changeCielo}
          //BOTTONE CIELO
          coloreBC={this.state.bottoneColoreCielo}
          bottoneTC={this.state.bottoneTestoCielo}
          coloreTC={this.state.coloreTestoCielo}
          statoBC={this.state.statoBottoneCielo}
          //COLORE PORTA
          statoP={this.changePorta}
          //BOTTONE PORTA
          coloreBP={this.state.bottoneColorePorta}
          bottoneTP={this.state.bottoneTestoPorta}
          coloreTP={this.state.coloreTestoPorta}
          statoBP={this.state.statoBottonePorta}
          //COLORE FINESTRE
          statoF={this.changeFinestre}
          //BOTTONE FINESTRE
          coloreBF={this.state.bottoneColoreFinestre}
          bottoneTF={this.state.bottoneTestoFinestre}
          coloreTF={this.state.coloreTestoFinestre}
          statoBF={this.state.statoBottoneFinestre}
        />
      </div>
    );
  }
}
