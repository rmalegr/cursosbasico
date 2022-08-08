import React, { Component } from 'react';

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  sumar() {
    console.log('sumando');
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>Eventos</h2>
        <nav>
          <button onClick={this.sumar.bind(this)}>+</button>
          <button>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
