import { PokemonByIdResponse } from "services/models/pokemon.model"
import { DetailComponent } from "./detail.component"
import { pokemonService } from "services/modules/pokemon.service"
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"

const { getPokemonById } = pokemonService

type Props = {
  pokemon: PokemonByIdResponse | null
}

export const DetailContainer = ({ pokemon }: Props) => {
  const router = useRouter()

  if (!pokemon) {
    void router.push("/")
    return null
  }
  return <DetailComponent pokemon={pokemon} />
}
