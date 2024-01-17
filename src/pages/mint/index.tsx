// ** Next Import
import { useRouter } from 'next/router'

// ** Api Imports
import { useFindOneQuery } from 'src/store/api/project'

// ** Styled Component
import MintLoadingSkeleton from 'src/views/mint/LoadingSkeleton'
import MintMainSection from 'src/views/mint'

const MintPage = () => {
  // ** Hooks
  const router = useRouter()
  const { data: Project, isError: isFindMeUserEntityError, isLoading: isFindMeUserEntityLoading } = useFindOneQuery({})

  if (isFindMeUserEntityError) {
    router.push('/check-whitelist')
  } else if (isFindMeUserEntityLoading) {
    return <MintLoadingSkeleton />
  } else {
    return <MintMainSection initProjectEntity={Project!} />
  }
}

MintPage.acl = {
  action: 'read',
  subject: 'public-page'
}

export default MintPage
