import React, {Component} from "react";

export default class Facciata extends Component {
  
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div id="containerFacciata">
        <div id="finestra">
          <div className="finestraSx"></div>
          <div className="finestraDx"></div>
        </div>
        <div
          id="porta"
          style={{
            backgroundColor: (this.props.stato)
              ? this.props.colore
              : "rgb(0,200,0)"
          }}
        ></div>
      </div>
    );
  }
}