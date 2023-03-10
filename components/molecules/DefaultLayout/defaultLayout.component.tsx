import { Footer } from "../Footer"
import { Header } from "../Header"
import { DefaultLayoutProps } from "./defaultLayout.model"
import styles from "./defaultLayout.module.css"

export const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
    <Footer />
  </>
)
