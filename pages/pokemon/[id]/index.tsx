import { Detail } from "components/modules/Detail"
import type { NextPage } from "next"
import { useRouter } from "next/router"

const DetailPage: NextPage = () => {
  const router = useRouter()
  const id = router.query["id"]
  return <Detail id={String(id)} />
}

export default DetailPage
