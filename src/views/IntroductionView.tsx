import { useStore } from "@/store"
import { Button, Flex, Space } from "antd"
import Image from "next/image"
import { FC, useEffect, useState } from "react"

interface IProps { }

const IntroductionView: FC<IProps> = ({ }) => {
  const { counter, setCounter } = useStore()
  const [timeCounter, setTimeCounter] = useState<number>(0)
  useEffect(() => {
    function tick() {
      setTimeCounter((v) => v + 1)
    }
    const intervalTick = setInterval(tick, 1000)
    return () => {
      clearInterval(intervalTick)
    }
  }, [])
  return <>
    <Flex justify="center" align="center">
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <Image src="/statics/nextjs.png" alt="NextJs" width={128} height={128} />
      </a>
      <div className="tw-text-3xl">+</div>
      <a href="https://ant.design/" target="_blank" rel="noreferrer">
        <Image src="/statics/antd.png" alt="Ant Design" width={128} height={128} />
      </a>
      <div className="tw-text-3xl">+</div>
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
        <Image src="/statics/tailwind.png" alt="Tailwind" width={128} height={128} />
      </a>
      <div className="tw-text-3xl">+</div>
      <a href="https://docs.pmnd.rs/zustand" target="_blank" rel="noreferrer">
        <Image src="/statics/zustand.png" alt="Zustand" width={128} height={128} />
      </a>
    </Flex>
    <Flex justify="center" align="center" vertical gap={24} style={{ marginTop: 24 }}>
      <div className="tw-font-bold">Testing Zustand state</div>
      <Button type="primary" onClick={() => setCounter(counter + 1)}>Click Count: {counter}</Button>
      <Space/>
      <div className="tw-font-bold">Time pass: {timeCounter}</div>
    </Flex>
  </>
}

export default IntroductionView
