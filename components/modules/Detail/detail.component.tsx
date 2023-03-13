import Image from "next/image"
import { Chip, Typography } from "@mui/material"
import { PokemonByIdResponse } from "services/models/pokemon.model"
import Pokemon from "public/images/pokemon.webp"
import styles from "./detail.module.css"
import { CustomStar } from "components/atoms/Star"
type Props = {
  pokemon: PokemonByIdResponse
}
export const DetailComponent = ({ pokemon }: Props) => {
  const {
    name,
    sprites: {
      other: { dream_world },
    },
    abilities,
    types,
    height,
    weight,
    moves,
    stats,
  } = pokemon
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h3" color="secondary">
          {`Conocé a ${name}`}
        </Typography>
      </div>
      <section className={styles.section__container}>
        <div className={styles.primary__image}>
          <Image
            src={dream_world.front_default}
            alt={name}
            fill
            placeholder="blur"
            blurDataURL={Pokemon.blurDataURL}
          />
        </div>
        <article className={styles.primary__info}>
          <section className={styles.star__container}>
            {stats?.map(({ base_stat, stat }) => (
              <CustomStar
                key={`${base_stat} - ${stat.name}`}
                text={stat?.name}
                value={base_stat}
              />
            ))}
          </section>
          <section className={styles.pokemon__characteristic}>
            <Typography variant="h5">{`Peso: ${weight} libras`}</Typography>
            <Typography variant="h5">{`Altura: ${height} pies`}</Typography>
            <Typography variant="h5" className={styles.types__chip}>
              {`Categoria: `}
              {types?.map(({ type, slot }) => (
                <Chip key={slot} label={type?.name} />
              ))}
            </Typography>
          </section>
        </article>
        <article className={styles.secondary__info}>
          <Typography gutterBottom>Movimientos</Typography>

          <Typography variant="h5" className={styles.types__chip}>
            {moves?.map(({ move }, index) => {
              if (index > 10) return
              return (
                <Chip
                  key={`${move.name} - ${index}`}
                  label={move.name}
                  color="secondary"
                />
              )
            })}
          </Typography>
        </article>
        <article className={styles.secondary__info}>
          <Typography gutterBottom>Habilidades</Typography>

          <Typography variant="h5" className={styles.types__chip}>
            {abilities?.map(({ ability, slot }) => (
              <Chip key={`${slot}`} label={ability.name} color="success" />
            ))}
          </Typography>
        </article>
      </section>
    </div>
  )
}
