import style from '@styles/attribution.module.css'
import type { FC } from 'react'

interface AttributionProps {
  name: string
  userURL: string
  challengeURL: string
}

const attribution: FC<AttributionProps> = (props) => {
  const { name, userURL, challengeURL } = props

  return (
    <div className={`${style.attribution}`}>
      Challenge by{' '}
      <a href={`${challengeURL}`} target='_blank' rel='noreferrer'>
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href={`${userURL}`}>
        <span className='capitalize'>{name}</span>{' '}
      </a>
      .
    </div>
  )
}

export default attribution
