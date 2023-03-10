import Image from "next/image"
import { Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import Pokemon from "public/images/pokemon.webp"
import styles from "./footer.module.css"
import Link from "next/link"

export const FooterComponent = () => (
  <footer className={styles.container}>
    <div>
      <Typography variant="h5">Made by Maxi Pezzotta</Typography>
    </div>
    <div className={styles.container__social}>
      <Link href="https://github.com/claudioacevedo25">
        <GitHubIcon />
      </Link>
      <Link href="https://www.linkedin.com/in/mpezzotta-software-engineer/">
        <LinkedInIcon />
      </Link>
    </div>
    <div>
      <Image
        src={Pokemon}
        width={150}
        height={50}
        alt="pokemon footer"
        placeholder="blur"
      />
    </div>
  </footer>
)
