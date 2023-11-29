import Head from 'next/head'
import { type NextPage } from 'next'
import { useStore } from '@/store'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const { counter, setCounter } = useStore()
  useEffect(() => {
    function tick() {
      setCounter(useStore.getState().counter + 1)
    }
    const intervalTick = setInterval(tick, 1000)
    return () => {
      setCounter(0);
      clearInterval(intervalTick)
    }
  }, [setCounter])
  return (
    <>
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className='tw-w-full tw-h-screen'>
        <div className='tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center'>
          <h1 className='tw-text-center'>Hello From NextJs with Zustand Store data: {counter}</h1>
        </div>
      </div>
    </>
  )
}

export default Home
