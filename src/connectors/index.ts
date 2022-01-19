import type { Web3ReactHooks } from '@web3-react/core'
import type { Connector } from '@web3-react/types'
import { hooks as metaMaskHooks, metaMask } from './metaMask'
import { hooks as walletConnectHooks, walletConnect } from './walletConnect'

export const connectors: [Connector, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
]
