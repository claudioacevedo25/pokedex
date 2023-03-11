import { StarComponent } from "./star.component"
type Props = {
  value: number
  text: string
}
export const StarContainer = (props: Props) => <StarComponent {...props} />
