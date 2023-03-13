import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { PokemonByIdResponse } from "services/models/pokemon.model"
import { HomeComponent } from "./home.component"
import { pokemonService } from "services/modules/pokemon.service"
import { GenericAbortSignal } from "axios"

const { getAllPokemons, getPokemon } = pokemonService

export const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState<PokemonByIdResponse[]>([])
  const searchRef = useRef<HTMLInputElement | null>(null)
  const [filterPokemon, setFilterPokemon] = useState<PokemonByIdResponse[]>()

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
      toast.error(
        "Ocurrió un error inesperado, intente nuevamente en unos minutos"
      )
    }
    setIsLoading((prevState) => !prevState)
  }

  const findPokemon = () => {
    if (!pokemons) return
    const pokemonName = searchRef.current?.value.toLowerCase()
    if (pokemonName === "" || !pokemonName)
      return toast.error(
        "Por favor, ingresa un nombre para comenzar la busqueda"
      )

    const result = pokemons.filter((pokemon) => pokemon.name === pokemonName)
    if (!result.length)
      return toast.error("No encontramos resultados, intenta con otro nombre")

    setFilterPokemon(result)
  }

  const clearSearch = () => {
    if (searchRef.current) searchRef.current.value = ""
    setFilterPokemon(undefined)
  }

  useEffect(() => {
    const abortController = new AbortController()
    void fetchPokemons(abortController.signal)
    return () => abortController.abort()
  }, [])
  return (
    <>
      <HomeComponent
        pokemons={filterPokemon ?? pokemons}
        isLoading={isLoading}
        findPokemon={findPokemon}
        clearSearch={clearSearch}
        searchRef={searchRef}
      />
    </>
  )
}
