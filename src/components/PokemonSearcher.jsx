import React, { useEffect, useState } from 'react'
import '../App.css'

export function PokemonSearcher() {
  
  let [pokemonData, setPokemonData] = useState({})
  let [pokemonName, setPokemonName] = useState("")
  let [pokemonId, setPokemonId] = useState(0)
  let [pokemonSpriteUrl, setPokemonSpriteUrl] = useState("")
  let [pokemonSearchTerm, setPokemonSearchTerm] = useState("")

  // Equivalent to componentDidMount
  useEffect(() => {
    console.log("Use effect says hello world!")

    // Return inside useeffect is the equivalent of componentWillUnmount
    return (() => {
      console.log("Component is unmounting now.")
    })
  }, []) // Function watches what is defined in the array

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log("Use effect says hello world on re-render!")
  })

  // Equivalent to componentDidUpdate for a specific variable
  useEffect(() => {
    console.log("Use effect says hello world on update pokemonName!")
  }, [pokemonName])

  const getRandomPokemon = async () => {
    let randomPokemonId = Math.floor(Math.random() * 1025) + 1
    console.log('Random pokemon ID to get is: ' + randomPokemonId)

    getSpecificPokemon(randomPokemonId)
  }

  const getSpecificPokemon = async (targetPokemonValue) => {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemonValue)
    let data = await response.json()

    console.log(data)

    setPokemonName(data.name)
    setPokemonId(data.id)
    setPokemonSpriteUrl(data.sprites.other.home.front_default)

    // setPokemonData((previousState) => {
    //   return {
    //     // Guarantee that previous state is all kept
    //     ...previousState,
    //     // Overwrite the parts we want to updated
    //     pokemonName: data.name,
    //     pokemonId: data.id,
    //     pokemonSpriteUrl: data.sprites.other.home.front_default
    //   }
    // })
  }
  
  return (
    <>
      <h1>This is a function component!</h1>
      <button onClick={getRandomPokemon} >
        Get a random Pokemon
      </button>

      <section>
        <label htmlFor="pokemonNameInput">Pokemon to search for:</label>
        <input 
          type="search" 
          name="pokemonNameInput" 
          id="pokemonNameInput" 
          value={pokemonSearchTerm} 
          onChange={(event) => {
            setPokemonSearchTerm(event.target.value)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              getSpecificPokemon(pokemonSearchTerm)
            }
          }}
        />
        <button onClick={() => getSpecificPokemon(pokemonSearchTerm)}>Search!</button>
      </section>

      {pokemonName.length > 0 && 
      <h1>
        {pokemonName}
      </h1>
      }

      {pokemonSpriteUrl.length > 0 &&
      <img src={pokemonSpriteUrl} />
      }
    </>
  )
}

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

  // async componentDidMount(){
  //   console.log('Component mounted.')

  //   this.getRandomPokemon()
  // }

  // componentDidUpdate(){
  //   console.log(this.state)
  // }

  // componentWillUnmount(){
  //   console.log('API call is all done, goodbye!')
  // }

  async getRandomPokemon() {
    let randomPokemonId = Math.floor(Math.random() * 1025) + 1
    console.log('Random pokemon ID to get is: ' + randomPokemonId)

    this.getSpecificPokemon(randomPokemonId)
  }

  async getSpecificPokemon(targetPokemonValue){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemonValue)
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

        <section>
          <label htmlFor="pokemonNameInput">Pokemon to search for:</label>
          <input 
            type="search" 
            name="pokemonNameInput" 
            id="pokemonNameInput" 
            value={this.state.pokemonSearchTerm} 
            onChange={(event) => {
              this.setState((previousState) => {
                return {
                  ...previousState,
                  pokemonSearchTerm: event.target.value
                }
              })
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                this.getSpecificPokemon(this.state.pokemonSearchTerm)
              }
            }}
          />
          <button onClick={() => this.getSpecificPokemon(this.state.pokemonSearchTerm)}>Search!</button>
        </section>

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