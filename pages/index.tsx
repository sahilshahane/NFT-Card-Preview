import type { NextPage } from 'next'
import Head from 'next/head'
import Attibution from '@components/attribution'
import NFTCard from '@components/nft-card'
import tokenImg from '../public/images/image-equilibrium.jpg'
import creatorImg from '../public/images/image-avatar.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFT preview card component</title>
        <meta
          name='description'
          content='NFT preview card challenge by frontend mentor'
        />
        <meta name='author' content='Sahil Shahane' />
        <meta
          name='keywords'
          content='HTML, CSS, JSX, TSX, React, Nextjs, TailwindCSS'
        />
      </Head>
      <div className='w-screen h-screen bg-dark-blue-main text-white'>
        <div className='h-full w-full flex justify-center items-center'>
          <NFTCard
            token={{
              name: 'Equilibrium #3429',
              description:
                'Our Equilibrium collection promotes balance and calm.',
              // imgSrc: '/images/image-equilibrium.jpg',
              imgSrc: tokenImg,
            }}
            stats={{
              balance: '0.041 ETH',
              timeLeft: '3 days left',
            }}
            creator={{
              imgSrc: creatorImg,
              name: 'Jules Wyvern',
            }}
          />
        </div>
      </div>

      <Attibution
        name='Sahil Shahane'
        challengeURL='https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U'
        userURL='https://github.com/sahilbest999/'
      />
    </>
  )
}

export default Home
