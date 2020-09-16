import React from 'react';
import pokemons from './data'
import Pokemon from './Pokemon'
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="main">        
        <h1>Trybe Pokedex</h1>
        <div className="div-pokedex">
          {pokemons.map((item, index) => 
            <Pokemon key={index} myPokemon={item} />
          )}
        </div>
      </div>
    )
  }
}

export default Pokedex;