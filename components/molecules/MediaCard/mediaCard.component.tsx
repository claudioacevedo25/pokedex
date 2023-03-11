import Image from "next/image"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { MediaCardProps } from "./mediaCard.model"
import Pokemon from "public/images/pokemon.webp"
import styles from "./mediaCard.module.css"
import { Chip } from "@mui/material"
import { CHIP_COLORS } from "@/constants/chipColors.constants"

export const MediaCardComponent = ({
  id,
  name,
  sprites: {
    other: { dream_world },
  },
  types,
}: MediaCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image
        src={dream_world.front_default}
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL={Pokemon.blurDataURL}
        alt={name ?? "Pokemon Image"}
        className={styles.card__image}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.card__name}
        >
          {name}
        </Typography>
        <div className={styles.card__chip}>
          {types.map(({ type, slot }) => (
            <Chip
              key={slot}
              size="small"
              color={CHIP_COLORS[type.name as keyof typeof CHIP_COLORS]}
              label={type?.name}
            />
          ))}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
