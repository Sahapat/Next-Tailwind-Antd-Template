import { ExampleChart } from '@/components/Charts'
import { Col, Row } from 'antd'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js - Charts'
}

export default function ChartsPage() {
  return <>
    <Row className='tw-w-full tw-h-[240px]'>
      <Col span={8}>
        <ExampleChart/>
      </Col>
    </Row>
  </>
}
