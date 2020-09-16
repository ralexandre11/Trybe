import React, { Component } from 'react'
import "./Form.css"

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: ''
    };
  }

  handleChange(upper, event) {
    const { target } = event;
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    
    // trata os campos que forem UpperCase
    if (upper === 'Upper') value = value.toUpperCase();

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="form">
        <h1>React - Utilizando Formulários</h1>
        <form>
          <fieldset className="fildset1">
            {/* <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} /> */}
            <label> Nome:
              <input className="uppercar"
                type="text"
                name="nome"
                value={this.state.nome}
                onChange={(event) => this.handleChange('Upper', event)}
                maxLength="40"
                required /> 
            </label>
            <label> Email:
              <input 
                type="text"
                name="email"
                value={this.state.email}
                onChange={(event) => this.handleChange('', event)}
                maxLength="50"
                required /> 
            </label>
            <label> CPF:
              <input 
                type="text"
                name="cpf"
                value={this.state.cpf}
                onChange={(event) => this.handleChange('', event)}
                maxLength="11"
                required /> 
            </label>
            <label> Endereço:
              <input 
                type="text"
                name="endereco"
                value={this.state.endereco}
                onChange={(event) => this.handleChange('', event)}
                maxLength="200"
                required /> 
            </label>
            <label> cidade:
              <input 
                type="text"
                name="cidade"
                value={this.state.cidade}
                onChange={(event) => this.handleChange('', event)}
                maxLength="28"
                required /> 
            </label>
            <label>Estado:
              <select name="estado" value={this.state.estado} onChange={(event) => this.handleChange('UP', event)}>
                <option value="RN">RN</option>
                <option value="PB">PB</option>
                <option value="CE">CE</option>
                <option value="PE">PE</option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;