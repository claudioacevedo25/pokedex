import { MediaCardComponent } from "./mediaCard.component"
import { MediaCardProps } from "./mediaCard.model"

export const MediaCardContainer = (props: MediaCardProps) => (
  <MediaCardComponent {...props} />
)
