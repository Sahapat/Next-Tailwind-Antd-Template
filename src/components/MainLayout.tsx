import { FC, ReactNode, useState } from "react"
import { AiOutlineMenu } from 'react-icons/ai'
import { Layout as AntdLayout, Menu, theme } from 'antd'
import { MenuItem } from "@/types/layout.type"

interface IProps {
  title?: string,
  menuItems?: MenuItem[],
  children?: ReactNode
}

const MainLayout: FC<IProps> = ({
  title, children, menuItems = []
}) => {
  const { token: { Layout } } = theme.useToken()
  const [collapsed, setCollapsed] = useState<boolean>(false)

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
          style={{
            height: '100%',
            background: Layout?.triggerBg ?? '#fff',
            color: Layout?.triggerColor ?? '#000'
          }}
          mode="inline"
          items={menuItems.map((v, index) => ({ key: index, label: v.label, icon: v.icon }))} />
      </AntdLayout.Sider>
      <AntdLayout.Content
        className="tw-overflow-auto"
        style={{ height: 'calc(100dvh - 64px)' }}>
        {children}
      </AntdLayout.Content>
    </AntdLayout>
  </AntdLayout>
}

export default MainLayout
