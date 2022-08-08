import React, { Component } from 'react';
function EstadoHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}
export default class Estado extends Component {
  //si necesito que  tenga estado, el cambio de estado genera un elemento en el DOm
  //los components fde funciones no pueden tener estado despues con las Hooks

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2> El State</h2>
        <p>{this.state.contador}</p>
        <EstadoHijo contadorHijo={this.state.contador + 1}> </EstadoHijo>
      </div>
    );
  }
}
