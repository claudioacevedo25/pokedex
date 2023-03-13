import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
import { CustomInputProps } from "./customInput.model"
import { Tooltip } from "@mui/material"

export const CustomInputComponent = ({
  findPokemon,
  clearSearch,
  searchRef,
}: CustomInputProps) => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        inputRef={searchRef}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{
          "aria-label": "Buscar",
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              e.preventDefault()
            }
          },
        }}
      />
      <Tooltip title="Buscar">
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={findPokemon}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Eliminar búsqueda">
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={clearSearch}
        >
          <ClearIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  )
}
