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
      coloreC: "rgb(112, 203, 233)",
      statoC: true,
      colorePorta: "rgb(128, 0, 0)",
      statoPorta: true,
      coloreFinestre: "rgb(128, 0, 0)",
      statoFinestre: true,
      coloreBottone: "rgb(25, 25, 112)",
      statoBottone: true,
      colorWord: "rgb(112, 203, 233)",
      statoColorWord: true,
      bottoneCielo: "Notte",
      statoBottoneCielo: true,

      bottonePorta: "Porta chiusa",
      statoBottonePorta: true
    };
  }

  changeColor = () => {
    this.setState({
      statoC: !this.state.statoC,
      statoBottone: !this.state.statoBottone,
      statoColorWord: !this.state.statoColorWord,
      statoBottoneCielo: !this.state.statoBottoneCielo
    });
  };
  
  changePorta = () => {
    this.setState({
      statoPorta: !this.state.statoPorta,
      statoBottonePorta: !this.state.statoBottonePorta
    });
  };
  
  changeFinestre = () => {
    this.setState({
      statoFinestre: !this.state.statoFinestre,
    });
  };
  

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: this.state.statoC
            ? this.state.coloreC
            : "rgb(25, 25, 112)",
        }}
      >
        <Tetto/>
        <Facciata
          statoP={this.state.statoPorta}
          coloreP={this.state.colorePorta}
          statoF={this.state.statoFinestre}
          coloreF={this.state.coloreFinestre}
        />
        <Prato />
        <Console
          //background CIELO
          bckC={this.changeColor}
          //background BOTTONE CIELO
          coloreB={this.state.coloreBottone}
          statoB={this.state.statoBottone}
          //colore parola BOTTONE CIELO
          coloreW={this.state.colorWord}
          statoW={this.state.statoColorWord}
          //parola BOTTONE CIELO
          bottoneCieloW={this.state.bottoneCielo}
          statoBottoneCieloW={this.state.statoBottoneCielo}

          //background PORTA
          bckP={this.changePorta}
          //background colore BOTTONE PORTA
          bottonePortaW={this.state.bottonePorta}
          statoBottonePortaW={this.state.statoBottonePorta}
          //colore parola BOTTONE PORTA

          //parola BOTTONE PORTA
          

          //background FINESTRA
          bckF={this.changeFinestre}
          //background colore BOTTONE PORTA
          
          //colore parola BOTTONE PORTA

          //parola BOTTONE PORTA

        />
      </div>
    );
  }
}

