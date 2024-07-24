import { Metadata } from 'next'
import { Flex } from "antd"
import IntroductionView from "@/views/IntroductionView"

export const metadata: Metadata = {
  title: 'Next.js - Home'
}

export default function HomePage() {
  return <>
    <Flex
      vertical
      justify="center"
      align="center"
      className="tw-h-full tw-w-full">
      <IntroductionView/>
    </Flex>
  </>
}
