import Head from 'next/head'
import { type NextPage } from 'next'
import { AiFillBook } from 'react-icons/ai'
import MainLayout from '@/components/MainLayout'
import { Flex } from 'antd'
import IntroductionView from '@/views/IntroductionView'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <MainLayout
        title='Sample Layout'
        menuItems={[
          {
            icon: <AiFillBook/>,
            label: 'Nav 1'
          },
          {
            icon: <AiFillBook/>,
            label: 'Nav 2'
          }
        ]}>
        <Flex justify='center' align='center' vertical className='tw-h-full tw-w-full'>
          <IntroductionView/>
        </Flex>
      </MainLayout>
    </>
  )
}

export default Home
