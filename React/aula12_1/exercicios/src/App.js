import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroCliques1 : 0,
      numeroCliques2 : 0,
      numeroCliques3 : 0
    }
  }

  handleClick(text) {
    console.log(text);
  }
  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques1: estadoAnterior.numeroCliques1 + 1
    }));
  }
  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques2: estadoAnterior.numeroCliques2 + 1
    }));
  }
  handleClick3 = (index) => {
    const myState = Object.keys(this.state)[index];
    this.setState((estadoAnterior, _props) => ({
      [myState]: estadoAnterior[myState] + 1
    }));  
  }

  render() {
    return (
      <div className="App">
        <h1>Trybe - Exercícios React</h1>
        <button onClick={() => this.handleClick('Você clicou no botão!')}>Mensagem Console</button>
        <button onClick={this.handleClick1}>{this.state.numeroCliques1}</button>
        <button onClick={this.handleClick2}>{this.state.numeroCliques2}</button>
        <button onClick={() => this.handleClick3(2)}>{this.state.numeroCliques3}</button>
      </div>
    )
  }
}

export default App;
