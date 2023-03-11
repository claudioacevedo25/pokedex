import { PokemonByIdResponse } from "services/models/pokemon.model"
import { DetailComponent } from "./detail.component"
import { pokemonService } from "services/modules/pokemon.service"
import { useCallback, useEffect, useState } from "react"
import { GenericAbortSignal } from "axios"

const { getPokemonById } = pokemonService

type Props = {
  id: string
}

export const DetailContainer = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<PokemonByIdResponse>()

  const fetchPokemon = useCallback(
    async (signal: GenericAbortSignal) => {
      try {
        const response = await getPokemonById(id, signal)
        setPokemon(response)
      } catch (error) {
        console.log(error)
      }
    },
    [id]
  )

  useEffect(() => {
    const abortController = new AbortController()
    void fetchPokemon(abortController.signal)
    return () => abortController.abort()
  }, [fetchPokemon])

  if (!pokemon) return null
  return <DetailComponent pokemon={pokemon} />
}
