import { Col, Row, Skeleton } from "antd"
import { FC, Fragment } from "react"

import cn from 'classnames'
import { AiOutlineBarChart } from "react-icons/ai"

interface IProps {
  className?: string
}

const ChartSkeleton: FC<IProps> = ({ className }) => {
  return <Fragment>
    <Skeleton.Node active className={cn("", className)}>
      <AiOutlineBarChart size={40} color="#bfbfbf"/>
    </Skeleton.Node>
  </Fragment>
}

export default ChartSkeleton
