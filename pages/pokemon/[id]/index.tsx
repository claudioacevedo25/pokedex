import type { GetServerSideProps } from "next"
import { Detail } from "components/modules/Detail"
import { pokemonService } from "services/modules/pokemon.service"
import { PokemonByIdResponse } from "services/models/pokemon.model"

const { getPokemonById } = pokemonService

type Props = {
  pokemon: PokemonByIdResponse | null
}

const DetailPage = ({ pokemon }: Props) => <Detail pokemon={pokemon} />

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.query?.id
    const pokemon = await getPokemonById(String(id))
    return {
      props: {
        pokemon,
      },
    }
  } catch (error) {
    return {
      props: {
        pokemon: undefined,
      },
    }
  }
}

export default DetailPage
