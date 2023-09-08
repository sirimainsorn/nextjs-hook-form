import '@/styles/globals.css'
import { store } from '@/stores'
import { Page } from '@/types/page'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Provider } from 'react-redux'

// this should give a better typing
type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const Layout = Component.layout ?? Fragment

  return (
    <Provider store={store}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </Provider>
  )
}
