// ** Styled Component
import CheckWhitelistSection from 'src/views/check-whitelist'

const CheckWhitelistPage = () => {
  return <CheckWhitelistSection />
}

CheckWhitelistPage.acl = {
  action: 'read',
  subject: 'public-page'
}

export default CheckWhitelistPage
