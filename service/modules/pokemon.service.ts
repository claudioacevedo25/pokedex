import api from "../api.client"
import { PokemonByIdResponse, PokemonResponse } from "../models/pokemon.model"

const pokemonService = {
  getAllPokemons: async () => {
    const { data } = await api.get<PokemonResponse>(
      `${process.env.NEXT_PUBLIC_URL_BASE}/pokemon/?limit=20`
    )

    return data.results
  },
  getPokemon: async (url: string) => {
    const { data } = await api.get<PokemonByIdResponse>(`${url}`)

    return data
  },
}

export { pokemonService }
