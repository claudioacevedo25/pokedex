import { PokemonByIdResponse } from "services/models/pokemon.model"
import { MediaCard } from "components/molecules/MediaCard"
import styles from "./home.module.css"
import { Input } from "components/atoms/CustomInput"
import { Typography } from "@mui/material"
import { CustomSkeleton } from "components/atoms/Skeleton"
import { MutableRefObject } from "react"
type Props = {
  pokemons: PokemonByIdResponse[]
  isLoading: boolean
  findPokemon: () => void
  clearSearch: () => void
  searchRef: MutableRefObject<HTMLInputElement | null>
}
export const HomeComponent = ({
  pokemons,
  isLoading,
  findPokemon,
  clearSearch,
  searchRef,
}: Props) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div>
        <Typography variant="h5" color="secondary">
          Encuenta tu Pokemon favorito
        </Typography>
      </div>
      <div>
        <Input
          findPokemon={findPokemon}
          clearSearch={clearSearch}
          searchRef={searchRef}
        />
      </div>
    </div>
    <div className={styles.cards__container}>
      {isLoading && <CustomSkeleton />}
      {pokemons && !isLoading && (
        <ul className={styles.cards__list}>
          {pokemons.map((pokemon) => (
            <li className={styles.card__pokemon} key={pokemon.id}>
              <MediaCard {...pokemon} />
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)
