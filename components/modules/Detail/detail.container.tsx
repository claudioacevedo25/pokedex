import { PokemonByIdResponse } from "services/models/pokemon.model"
import { DetailComponent } from "./detail.component"
import { pokemonService } from "services/modules/pokemon.service"
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"

const { getPokemonById } = pokemonService

type Props = {
  id: string
}

export const DetailContainer = ({ id }: Props) => {
  const router = useRouter()
  const [pokemon, setPokemon] = useState<PokemonByIdResponse>()

  const fetchPokemon = useCallback(async () => {
    try {
      const response = await getPokemonById(id)
      setPokemon(response)
    } catch (error) {
      console.log(error)
      router.push("/")
    }
  }, [id, router])

  useEffect(() => {
    void fetchPokemon()
  }, [fetchPokemon])

  if (!pokemon) return null
  return <DetailComponent pokemon={pokemon} />
}
