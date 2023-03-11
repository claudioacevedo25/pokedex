import {
  PokemonByIdResponse,
  PokemonResponse,
} from "@/service/models/pokemon.model"
import { HomeComponent } from "./home.component"
import { pokemonService } from "service/modules/pokemon.service"
import { useEffect, useState } from "react"

const { getAllPokemons, getPokemon } = pokemonService

export const HomeContainer = () => {
  const [pokemons, setPokemons] = useState<PokemonByIdResponse[]>([])
  const fetchPokemons = async () => {
    try {
      const response = await getAllPokemons()
      response.map(async ({ url }) => {
        const pokemon = await getPokemon(url)
        setPokemons((prevState) => [...prevState, pokemon])
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    void fetchPokemons()
    return () => controller.abort()
  }, [])
  return <HomeComponent pokemons={pokemons} />
}
