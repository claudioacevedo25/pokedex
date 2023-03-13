import { useMemo } from "react"
import Rating from "@mui/material/Rating"
import Box from "@mui/material/Box"
import StarIcon from "@mui/icons-material/Star"

type Props = {
  value: number
  text: string
}
const max = 5.0
const min = 1.0

export const StarComponent = ({ value, text }: Props) => {
  const toRelativeNumber = useMemo(() => {
    const proportion = (value - 1) / 99
    const relative = proportion * (max - min) + min
    return Math.round(relative * 2) / 2
  }, [value])
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        textTransform: "capitalize",
        flexWrap: "wrap",
      }}
    >
      <Rating
        name="hover-feedback"
        readOnly
        value={toRelativeNumber ?? 0}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {text}
    </Box>
  )
}
