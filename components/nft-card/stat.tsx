/* eslint-disable jsx-a11y/alt-text */
import type { FC } from 'react'
import type { ImageProps } from 'next/image'
import Image from 'next/image'

interface StatProps {
  text: {
    value: string
    className: string
  }
  img: ImageProps
}

const Stat: FC<StatProps> = (props) => {
  const { text, img } = props

  return (
    <div className={`flex items-center gap-1 flex-nowrap whitespace-nowrap`}>
      <Image {...img} />

      <span className={`${text.className}`}>{text.value}</span>
    </div>
  )
}

export default Stat
