import { PokemonByIdResponse } from "services/models/pokemon.model"
import { HomeComponent } from "./home.component"
import { pokemonService } from "services/modules/pokemon.service"
import { useEffect, useState } from "react"
import { GenericAbortSignal } from "axios"

const { getAllPokemons, getPokemon } = pokemonService

export const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState<PokemonByIdResponse[]>([])

  const fetchPokemons = async (signal: GenericAbortSignal) => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await getAllPokemons(signal)
      response.map(async ({ url }) => {
        const pokemon = await getPokemon(url, signal)
        setPokemons((prevState) => [...prevState, pokemon])
      })
    } catch (error) {
      console.log(error)
    }
    setIsLoading((prevState) => !prevState)
  }

  useEffect(() => {
    const abortController = new AbortController()
    void fetchPokemons(abortController.signal)
    return () => abortController.abort()
  }, [])
  return <HomeComponent pokemons={pokemons} isLoading={isLoading} />
}
