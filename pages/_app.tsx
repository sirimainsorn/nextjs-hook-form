import '@/styles/globals.css'
import { Page } from '@/types/page'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

// this should give a better typing
type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const Layout = Component.layout ?? Fragment

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
}
