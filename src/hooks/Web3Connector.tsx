import React from 'react'
import { Button, ButtonArea } from './styles'
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import { Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect'
import { useCallback, useEffect, useState } from 'react'
import { CHAINS, getAddChainParameters, URLS } from '../chains'
import { connectors } from '../connectors'

function getName(connector: Connector) {
  if (connector instanceof MetaMask) {
    return 'MetaMask'
  } else if (connector instanceof WalletConnect) {
    return 'WalletConnect'
  } else {
    return 'Unknown'
  }
}

function useBalances(
  provider?: ReturnType<Web3ReactHooks['useProvider']>,
  accounts?: string[],
): BigNumber[] | undefined {
  const [balances, setBalances] = useState<BigNumber[] | undefined>()

  useEffect(() => {
    if (provider && accounts?.length) {
      let stale = false

      void Promise.all(
        accounts.map((account) => provider.getBalance(account)),
      ).then((balances) => {
        if (!stale) {
          setBalances(balances)
        }
      })

      return () => {
        stale = true
        setBalances(undefined)
      }
    }
  }, [provider, accounts])

  return balances
}

exfunction Accounts({
  useAnyNetwork,
  hooks: { useAccounts, useProvider, useENSNames },
}: {
  useAnyNetwork: boolean
  hooks: Web3ReactHooks
}) {
  const provider = useProvider(useAnyNetwork ? 'any' : undefined)
  const accounts = useAccounts()
  const ENSNames = useENSNames(provider)

  const balances = useBalances(provider, accounts)

  return (
    <div>
      Accounts:
      {accounts === undefined
        ? ' -'
        : accounts.length === 0
        ? ' None'
        : accounts?.map((account, i) => (
            <ul
              key={account}
              style={{
                margin: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <b>{ENSNames?.[i] ?? account}</b>
              {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
            </ul>
          ))}
    </div>
  )
}

export function MetaMaskConnect({
  connector,
  hooks: { useChainId, useIsActivating, useError, useIsActive },
}: {
  connector: MetaMask
  hooks: Web3ReactHooks
}) {
  const currentChainId = useChainId()
  const isActivating = useIsActivating()
  const error = useError()
  const active = useIsActive()

  const [desiredChainId, setDesiredChainId] = useState<number>(-1)

  const setChainId = useCallback(
    (chainId: number) => {
      setDesiredChainId(chainId)
      if (chainId !== -1 && chainId !== currentChainId) {
        return connector.activate(getAddChainParameters(chainId))
      }
    },
    [setDesiredChainId, currentChainId, connector],
  )

  if (error) {
    return (
      <>
        <br />
        <Button
          onClick={() =>
            connector.activate(
              desiredChainId === -1
                ? undefined
                : getAddChainParameters(desiredChainId),
            )
          }
        >
          <img
            src="/images/metamask.svg"
            alt="MetaMask"
            width="30px"
            height="30px"
            style={{ marginRight: '10px' }}
          />
          Try Again?
        </Button>
      </>
    )
  } else if (active) {
    return (
      <>
        <br />

        <Button
          disabled
          style={{ position: 'relative', right: '200px', top: '30px' }}
        >
          <img
            src="/images/metamask.svg"
            alt="MetaMask"
            width="30px"
            height="30px"
          />
          Connected
        </Button>
      </>
    )
  } else {
    return (
      <>
        <br />
        <Button
          onClick={
            isActivating
              ? undefined
              : () =>
                  connector.activate(
                    desiredChainId === -1
                      ? undefined
                      : getAddChainParameters(desiredChainId),
                  )
          }
          disabled={isActivating}
          style={{ position: 'relative', right: '200px', top: '30px' }}
        >
          <img
            src="/images/metamask.svg"
            alt="MetaMask"
            width="30px"
            height="30px"
            style={{ marginRight: '10px' }}
          />
          {isActivating ? 'Connecting...' : 'Connect'}
        </Button>
      </>
    )
  }
}

export function Connect({
  connector,
  hooks: { useIsActivating, useError, useIsActive },
}: {
  connector: Connector
  hooks: Web3ReactHooks
}) {
  const isActivating = useIsActivating()
  const error = useError()

  const active = useIsActive()

  if (error) {
    return (
      <Button
        onClick={() => connector.activate()}
        style={{ position: 'relative', right: '0px', bottom: '19px' }}
      >
        {' '}
        <img
          src="/images/walletconnect.svg"
          alt="Wallet Connect"
          width="40px"
          height="40px"
          style={{ marginRight: '10px' }}
        />
        Try Again?
      </Button>
    )
  } else if (active) {
    return (
      <Button
        onClick={
          connector.deactivate ? () => connector.deactivate() : undefined
        }
        disabled={!connector.deactivate}
        style={{ position: 'relative', right: '0px', bottom: '19px' }}
      >
        <img
          src="/images/walletconnect.svg"
          alt="Wallet Connect"
          width="40px"
          height="40px"
          style={{ marginRight: '10px' }}
        />
        {connector.deactivate ? 'Disconnect' : 'Connected'}
      </Button>
    )
  } else {
    return (
      <Button
        onClick={isActivating ? undefined : () => connector.activate()}
        disabled={isActivating}
        style={{ position: 'relative', right: '0px', bottom: '19px' }}
      >
        <img
          src="/images/walletconnect.svg"
          alt="Wallet Connect"
          width="40px"
          height="40px"
          style={{ marginRight: '10px' }}
        />
        {isActivating ? 'Connecting...' : 'Connect'}
      </Button>
    )
  }
}

export function Web3Connector() {
  return (
    <>
      {connectors.map(([connector, hooks], i) => (
        <ButtonArea key={i}>
          {connector instanceof MetaMask ? (
            <MetaMaskConnect connector={connector} hooks={hooks} />
          ) : (
            <Connect connector={connector} hooks={hooks} />
          )}
        </ButtonArea>
      ))}
    </>
  )
}
