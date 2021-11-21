import type { FC } from 'react'
import Image from 'next/image'
import style from '@styles/nft-card.module.css'

type ImageSrcProp = string | StaticImageData

export interface CreatorProps {
  name: string
  imgSrc: ImageSrcProp
}

const Creator: FC<CreatorProps> = (props) => {
  const { name, imgSrc } = props

  return (
    <div className='flex items-center justify-center gap-3 flex-wrap'>
      <div className='group relative flex rounded-full overflow-hidden border-1'>
        <Image
          layout='fixed'
          src={imgSrc}
          width='36px'
          height='36px'
          alt="creator's image"
        />
      </div>
      <span className='text-soft-blue flex gap-1'>
        Creation of{' '}
        <span
          className={`text-white whitespace-nowrap capitalize ${style.TextHover}`}
        >
          <a href='#'>{name}</a>
        </span>
      </span>
    </div>
  )
}

export default Creator
