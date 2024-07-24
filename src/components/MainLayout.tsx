'use client'

import { FC, ReactNode, useMemo, useState } from "react"
import { Layout as AntdLayout, Menu, theme } from 'antd'
import { AiOutlineMenu } from 'react-icons/ai'
import { MenuItem } from "@/types/layout.type"
import { usePathname, useRouter } from "next/navigation"

interface IProps {
  title?: string,
  menuItems?: MenuItem[],
  children?: ReactNode
}

const MainLayout: FC<IProps> = ({
  title, children, menuItems = []
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const { token: { Layout } } = theme.useToken()
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const antdMenuItems = useMemo(() => {
    return menuItems.map((v) => ({
      key: `${v.route ?? 'default'}`,
      label: v.label,
      icon: v.icon,
      route: v.route
    }))
  }, [menuItems])

  function handleMenuClicked(key: string) {
    const menuItem = antdMenuItems.find(v => v.key === key)
    if (menuItem?.route) {
      router.push(menuItem.route)
    }
  }

  return <AntdLayout style={{ height: '100dvh' }}>
    <AntdLayout.Header className="
      tw-flex
      tw-gap-4
      tw-p-4
      tw-items-center
      tw-text-white">
      <AiOutlineMenu className="tw-cursor-pointer" size={24} onClick={() => setCollapsed(!collapsed)} />
      <div className="tw-text-xl">{title}</div>
    </AntdLayout.Header>
    <AntdLayout hasSider >
      <AntdLayout.Sider
        width={240}
        style={{ padding: 0 }}
        collapsible
        breakpoint="md"
        collapsedWidth={0}
        collapsed={collapsed}
        zeroWidthTriggerStyle={{ overflow: 'hidden' }}
        onCollapse={setCollapsed}>
        <Menu
          selectedKeys={[pathname]}
          style={{
            height: '100%',
            background: Layout?.triggerBg ?? '#fff',
            color: Layout?.triggerColor ?? '#000'
          }}
          mode="inline"
          items={antdMenuItems}
          onClick={(e) => handleMenuClicked(e.key)}/>
      </AntdLayout.Sider>
      <AntdLayout.Content
        className="tw-overflow-auto tw-p-4"
        style={{ height: 'calc(100dvh - 64px)' }}>
        {children}
      </AntdLayout.Content>
    </AntdLayout>
  </AntdLayout>
}

export default MainLayout
