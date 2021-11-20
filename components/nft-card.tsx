import type { FC } from 'react'

interface NFTCardProps {
  tokenImgSrc: string
  creatorImgSrc: string
  creatorName: string
  balance: string
  timeLeft: string
  description: string
  tokenName: string
}

const NFTCard: FC<NFTCardProps> = (props) => {
  const {
    balance,
    creatorImgSrc,
    creatorName,
    description,
    timeLeft,
    tokenImgSrc,
    tokenName,
  } = props

  return (
    <div className='block bg-dark-blue-card w-80 p-5 rounded-xl'>
      <div>
        <div className='w-52 h-52 mx-auto bg-gray-600'>
          <img
            className=' rounded-lg'
            src={tokenImgSrc}
            alt='Equilibrium Image'
          />
        </div>
      </div>

      <h2 className='text-2xl  font-semibold'>{tokenName}</h2>
      <h3 className='text-soft-blue font-light'>{description}</h3>

      <div className='flex justify-between mt-4'>
        <div className='text-cyan font-semibold'>{balance}</div>
        <div className='text-soft-blue font-light'>{timeLeft}</div>
      </div>

      <hr className='mt-4' />
      <div className='flex items-center mt-4'>
        <div className='mr-4'>
          <img
            className='w-9 h-9 border-1 rounded-full'
            src={creatorImgSrc}
            alt="creator's image"
          />
        </div>
        <span className='text-soft-blue'>
          Creation of{' '}
          <span className='text-white capitalize'>{creatorName}</span>
        </span>
      </div>
    </div>
  )
}

export default NFTCard
