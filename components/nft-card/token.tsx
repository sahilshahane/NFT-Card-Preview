import { useState } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import style from '@styles/nft-card.module.css'

type ImageSrcProp = string | StaticImageData

export interface TokenProps {
  name: string
  description: string
  imgSrc: ImageSrcProp
}

const Token: FC<TokenProps> = (props) => {
  const { imgSrc, name, description } = props
  const [showToken, setShowToken] = useState(false)

  return (
    <>
      <div className='group relative w-full h-64 mx-auto z-10 cursor-pointer'>
        <Image
          priority
          src={imgSrc}
          alt='token image'
          className='rounded-lg'
          objectFit='cover'
          layout='fill'
        />
        <div
          role='link'
          onClick={() => setShowToken(!showToken)}
          className={`absolute bg-cyan transition-all duration-500 ${
            showToken ? 'bg-opacity-0 opacity-0' : 'bg-opacity-40 opacity-100'
          } w-full h-full rounded-lg top-0 flex items-center justify-center`}
        >
          <Image
            layout='intrinsic'
            width={48}
            height={48}
            src='/images/icon-view.svg'
            alt='view / hide token'
          />
        </div>

        {/* <img src={tokenImgSrc} alt='Token Image Alt' /> */}
      </div>

      <h2 className={`text-2xl font-semibold ${style.TextHover}`}>
        <a href='#'>{name}</a>
      </h2>
      <h3 className='text-soft-blue font-light'>{description}</h3>
    </>
  )
}

export default Token
