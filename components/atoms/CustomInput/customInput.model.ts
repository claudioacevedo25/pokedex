import { MutableRefObject } from "react"

export type CustomInputProps = {
  findPokemon: () => void
  clearSearch: () => void
  searchRef: MutableRefObject<HTMLInputElement | null>
}
