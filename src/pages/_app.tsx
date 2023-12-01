import { type AppProps } from 'next/app'
import { ZustandHydration } from '@/store'

import 'animate.css'
import '../styles/main.scss'
import '../styles/main.css'
import { ConfigProvider } from 'antd'

function MyApp({ Component, pageProps }: AppProps) {
  return <ZustandHydration>
    <ConfigProvider theme={{
      components: {
        Layout: {
          headerBg: '#1890ff',
          triggerBg: '#fff',
          triggerColor: '#000',
          zeroTriggerWidth: 0
        }
      }
    }}>
      <Component {...pageProps} />
    </ConfigProvider>
  </ZustandHydration>
}

export default MyApp
