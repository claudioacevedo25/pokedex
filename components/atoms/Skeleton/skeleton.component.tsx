import Skeleton from "@mui/material/Skeleton"
import { Card } from "@mui/material"
import styles from "./skeleton.module.css"

const skeletons = [0, 1, 2, 3]

export const SkeletonComponent = () => {
  return (
    <div className={styles.container}>
      {skeletons.map((item) => (
        <Card key={item} sx={{ minWidth: 216, m: 2, p: 2 }}>
          <Skeleton animation="wave" height={250} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={100} width="80%" />
        </Card>
      ))}
    </div>
  )
}
