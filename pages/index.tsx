import type { NextPage } from 'next'
import Head from 'next/head'
import Attibution from '@components/attribution'
import NFTCard from '@components/nft-card'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFT preview card component</title>
      </Head>
      <div className='w-screen h-screen bg-dark-blue-main text-white'>
        <div className='h-full w-full flex justify-center items-center'>
          <NFTCard
            tokenImgSrc='/images/image-equilibrium.jpg'
            tokenName='Equilibrium #3429'
            description='Our Equilibrium collection promotes balance and calm.'
            balance='0.041 ETH'
            timeLeft='3 days left'
            creatorImgSrc='/images/image-avatar.png'
            creatorName='Jules Wyvern'
          />
        </div>
      </div>

      <Attibution />
    </>
  )
}

export default Home
