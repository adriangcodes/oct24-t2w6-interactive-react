import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      pokemonId: 0,
      pokemonName: "",
      pokemonSpriteUrl: ""
    }

    this.getRandomPokemon = this.getRandomPokemon.bind(this);
  }

  async componentDidMount(){
    console.log('Component mounted.')

    this.getRandomPokemon()
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  componentWillUnmount(){
    console.log('API call is all done, goodbye!')
  }

  async getRandomPokemon() {
    let randomPokemonId = Math.floor(Math.random() * 1025) + 1
    console.log('Random pokemon ID to get is: ' + randomPokemonId)

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonId)
    let data = await response.json()

    console.log(data)

    this.setState((previousState) => {
      return {
        // Guarantee that previous state is all kept
        ...previousState,
        // Overwrite the parts we want to updated
        pokemonName: data.name,
        pokemonId: data.id,
        pokemonSpriteUrl: data.sprites.other.home.front_default
      }
    })
  }

  render() {
    return (
      <>
        <h1>This is a class component!</h1>
        <button onClick={this.getRandomPokemon} >
          Get a random Pokemon
        </button>

        {this.state.pokemonName.length > 0 && 
        <h1>
          {this.state.pokemonName}
        </h1>
        }

        {this.state.pokemonSpriteUrl.length > 0 &&
        <img src={this.state.pokemonSpriteUrl} />
        }
      </>
    )
  }

}

export default App