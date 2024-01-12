// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Mint',
    path: '/mint',
    icon: 'mdi:home-outline',
    action: 'read',
    subject: 'public-page'
  },
  {
    title: 'Check Whitelist',
    path: '/check-whitelist',
    icon: 'mdi:book-check',
    action: 'read',
    subject: 'public-page'
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi:view-dashboard-outline',
    action: 'read',
    subject: 'authenticated-page'
  }
]

export default navigation
