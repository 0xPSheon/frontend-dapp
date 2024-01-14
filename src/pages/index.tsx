// ** Next Import
import { useRouter } from 'next/router'

const MainPage = () => {
  // ** Hooks
  const router = useRouter()

  router.push('/mint')
}

MainPage.acl = {
  action: 'read',
  subject: 'public-page'
}

export default MainPage
