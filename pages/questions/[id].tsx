import { Questions } from 'components/sections'
import { useRouter } from 'next/router'

const SingleQuestion = () => {
  const router = useRouter()
  const { id } = router.query

  if (id === undefined) return <div>Loading...</div>

  return <Questions questionId={Number(id)} />
}

export default SingleQuestion
