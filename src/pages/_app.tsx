import { type AppProps } from 'next/app'
import { ZustandHydration } from '@/store'

import 'animate.css'
import '../styles/main.scss'
import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <ZustandHydration>
    <Component {...pageProps} />
  </ZustandHydration>
}

export default MyApp
