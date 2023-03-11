import { PokemonByIdResponse } from "service/models/pokemon.model"
import { MediaCard } from "@/components/molecules/MediaCard"
import styles from "./home.module.css"
type Props = {
  pokemons: PokemonByIdResponse[]
}
export const HomeComponent = ({ pokemons }: Props) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div>Titulo</div>
      <div>
        <input type="text" />
      </div>
    </div>
    <div className={styles.cards__container}>
      <ul className={styles.cards__list}>
        {pokemons.map((pokemon) => (
          <li className={styles.card__pokemon} key={pokemon.id}>
            <MediaCard {...pokemon} />
          </li>
        ))}
      </ul>
    </div>
  </div>
)
