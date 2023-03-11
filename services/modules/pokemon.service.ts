import { GenericAbortSignal } from "axios"
import api from "../api.client"
import { PokemonByIdResponse, PokemonResponse } from "../models/pokemon.model"

const pokemonService = {
  getAllPokemons: async (signal?: GenericAbortSignal) => {
    const { data } = await api.get<PokemonResponse>(
      `${process.env.NEXT_PUBLIC_URL_BASE}/pokemon/?limit=20`,
      {
        signal,
      }
    )

    return data.results
  },
  getPokemon: async (url: string, signal?: GenericAbortSignal) => {
    const { data } = await api.get<PokemonByIdResponse>(`${url}`, { signal })

    return data
  },

  getPokemonById: async (id: string, signal?: GenericAbortSignal) => {
    const { data } = await api.get<PokemonByIdResponse>(
      `${process.env.NEXT_PUBLIC_URL_BASE}/pokemon/${id}`,
      { signal }
    )

    return data
  },
}

export { pokemonService }
