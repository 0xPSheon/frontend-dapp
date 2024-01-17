// ** Wagmi Imports
import { mainnet, goerli } from 'wagmi/chains'

export const getChainInstance = (chainName: string) => {
  switch (chainName.toLowerCase()) {
    case 'ethereum':
      return mainnet
    case 'goerli':
    default:
      return goerli
  }
}
