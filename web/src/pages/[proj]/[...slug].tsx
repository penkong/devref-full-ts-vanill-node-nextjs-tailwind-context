import { useRouter } from 'next/router'

const ProjectDescription = () => {
  const router = useRouter()
  const { proj, slug } = router.query

  return (
    <p>
      Post: {proj}, {slug}
    </p>
  )
}

export default ProjectDescription
