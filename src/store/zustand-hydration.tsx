'use client'

import { FC, ReactNode, useEffect, useState } from "react"

interface IProps {
  children: ReactNode
}

export const ZustandHydration: FC<IProps> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false)
  useEffect(() => {
    setIsHydrated(true)
  }, [])
  return <>{isHydrated ? children : null}</>
}
