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
      coloreCielo: "rgb(112, 203, 233)",
      statoColoreCielo: true,
      //BOTTONE COLORE CIELO
      bottoneColoreCielo: "rgb(10, 60, 151)",
      statoBottoneColoreCielo: true,
      //BOTTONE TESTO CIELO
      bottoneTestoCielo: "Notte",
      statoBottoneTestoCielo: true,
      //BOTTONE COLORE TESTO CIELO
      coloreTestoCielo: "rgb(112, 203, 233)",
      statoColoreTestoCielo: true,
      //COLORE PORTA
      colorePorta: "rgb(128, 0, 0)",
      statoColorePorta: true,
      //BOTTONE COLORE PORTA
      bottoneColorePorta: "rgb(255, 253, 143)",
      statoBottoneColorePorta: true,
      //BOTTONE TESTO PORTA
      bottoneTestoPorta: "Apri la porta",
      statoBottoneTestoPorta: true,
      //BOTTONE COLORE TESTO PORTA
      coloreTestoPorta: "rgb(128, 0, 0)",
      statoColoreTestoPorta: true,
      //COLORE FINESTRE
      coloreFinestre: "rgb(128, 0, 0)",
      statoColoreFinestre: true,
      //BOTTONE COLORE FINESTRE
      bottoneColoreFinestre: "rgb(255, 253, 143)",
      statoBottoneColoreFinestre: true,
      //BOTTONE TESTO FINESTRE
      bottoneTestoFinestre: "Accendi le luci",
      statoBottoneTestoFinestre: true,
      //BOTTONE COLORE TESTO FINESTRE
      coloreTestoFinestre: "rgb(128, 0, 0)",
      statoColoreTestoFinestre: true,
    };
  }

  changeCielo = () => {
    this.setState({
      statoColoreCielo: !this.state.statoColoreCielo,
      statoBottoneColoreCielo: !this.state.statoBottoneColoreCielo,
      statoBottoneTestoCielo: !this.state.statoBottoneTestoCielo,
      statoColoreTestoCielo: !this.state.statoColoreTestoCielo,
    });
  };

  changePorta = () => {
    this.setState({
      statoColorePorta: !this.state.statoColorePorta,
      statoBottoneColorePorta: !this.state.statoBottoneColorePorta,
      statoBottoneTestoPorta: !this.state.statoBottoneTestoPorta,
      statoColoreTestoPorta: !this.state.statoColoreTestoPorta
    })
  }

  changeFinestre = () => {
    this.setState({
      statoColoreFinestre: !this.state.statoColoreFinestre,
      statoBottoneColoreFinestre: !this.state.statoBottoneColoreFinestre,
      statoBottoneTestoFinestre: !this.state.statoBottoneTestoFinestre,
      statoColoreTestoFinestre: !this.state.statoColoreTestoFinestre
    })
  }

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: this.state.statoColoreCielo
            ? this.state.coloreCielo
            : "rgb(10, 60, 151)",
        }}>
        <Tetto />
        <Facciata
          //COLORE PORTA
          coloreP={this.state.colorePorta}
          statoCP={this.state.statoColorePorta}
          //COLORE FINESTRE
          coloreF={this.state.coloreFinestre}
          statoCF={this.state.statoColoreFinestre}
        />
        <Prato />
        <Console
          //COLORE CIELO
          statoC={this.changeCielo}
          //BOTTONE COLORE CIELO
          coloreBC={this.state.bottoneColoreCielo}
          statoBC={this.state.statoBottoneColoreCielo}
          //BOTTONE TESTO CIELO
          bottoneTC={this.state.bottoneTestoCielo}
          statoBottoneTC={this.state.statoBottoneTestoCielo}
          //BOTTONE COLORE TESTO CIELO
          coloreTC={this.state.coloreTestoCielo}
          statoColoreTC={this.state.statoColoreTestoCielo}
          //COLORE CIELO
          statoP={this.changePorta}
          //BOTTONE COLORE PORTA
          coloreBP={this.state.bottoneColorePorta}
          statoBP={this.state.statoBottoneColorePorta}
          //BOTTONE TESTO PORTA
          bottoneTP={this.state.bottoneTestoPorta}
          statoBottoneTP={this.state.statoBottoneTestoPorta}
          //BOTTONE COLORE TESTO PORTA
          coloreTP={this.state.coloreTestoPorta}
          statoColoreTP={this.state.statoColoreTestoPorta}
          //COLORE FINESTRE
          statoF={this.changeFinestre}
          //BOTTONE COLORE FINESTRE
          coloreBF={this.state.bottoneColoreFinestre}
          statoBF={this.state.statoBottoneColoreFinestre}
          //BOTTONE TESTO FINESTRE
          bottoneTF={this.state.bottoneTestoFinestre}
          statoBottoneTF={this.state.statoBottoneTestoFinestre}
          //BOTTONE COLORE TESTO FINESTRE
          coloreTF={this.state.coloreTestoFinestre}
          statoColoreTF={this.state.statoColoreTestoFinestre}
        />
      </div>
    );
  }
}
