/* eslint-disable jsx-a11y/alt-text */
import type { FC } from 'react'
import style from '@styles/nft-card.module.css'
import Stat from '@components/nft-card/stat'
import Creator, { CreatorProps } from '@components/nft-card/creator'
import Token, { TokenProps } from '@components/nft-card/token'

interface StatsProps {
  balance: string
  timeLeft: string
}

interface NFTCardProps {
  creator: CreatorProps
  stats: StatsProps
  token: TokenProps
}

const NFTCard: FC<NFTCardProps> = (props) => {
  const { stats, creator, token } = props

  return (
    <div className={`${style.nftCard}`}>
      <Token {...token} />

      <div className='flex justify-between items-center gap-x-8 gap-y-1 flex-wrap '>
        <Stat
          img={{
            src: '/images/icon-ethereum.svg',
            width: '11px',
            height: '18px',
            layout: 'fixed',
            alt: 'ethereum icon',
          }}
          text={{
            className: 'text-cyan font-semibold',
            value: stats.balance,
          }}
        />

        <Stat
          img={{
            layout: 'fixed',
            width: '17px',
            height: '17px',
            src: '/images/icon-clock.svg',
            alt: 'clock icon',
          }}
          text={{
            className: 'text-soft-blue font-light',
            value: stats.timeLeft,
          }}
        />
      </div>

      <hr className='border-dark-blue-line' />

      <Creator {...creator} />
    </div>
  )
}

export default NFTCard
