// ** React Imports
import { Fragment } from 'react'

// ** Custom Component Imports
import WalletProfileButton from './wallet-profile-button'
import ConnectWalletButton from './connect-wallet-button'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'

// ** Type Imports
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  settings: Settings
}

const WalletDropdown = (props: Props) => {
  // ** Hooks
  const auth = useAuth()

  return (
    <Fragment>{auth.user.role === 'Public' ? <ConnectWalletButton /> : <WalletProfileButton {...props} />}</Fragment>
  )
}

export default WalletDropdown
