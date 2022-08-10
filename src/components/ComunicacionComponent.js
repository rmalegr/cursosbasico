import React, { Component } from 'react';

export default class ComunnicacionComponent extends Component {
  state = {
    contador: 0,
  };
  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  decrementarContador = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Contador : {this.state.contador} </h2>
        <h2>Comunicacion Componentes</h2>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 1"
        ></Hijo>
        <Hijo
          decrementarContador={this.decrementarContador}
          mensaje="Mensaje para el hijo 2"
        ></Hijo>
      </div>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContador}> + </button>
      <button onClick={props.decrementarContador}> - </button>
    </>
  );
}
