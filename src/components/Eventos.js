import React, { Component } from 'react';

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this); // comun en las class component para enlazar los elementos con (this)
  }

  sumar() {
    //Funcion sumar
    console.log('sumando');
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render() {
    console.log(this);
    return (
      <div>
        <h2>Eventos</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
