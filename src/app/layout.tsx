import './globals.css'

import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Head from 'next/head'
import { Suspense } from 'react'

import Header from './components/Header'
import Loading from './components/Loading'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Comeback Basketball',
  description: 'hogehoge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <html lang="ja" />
      </Head>
      <Header />
      <body className={notoSansJP.className}>
        <div className="container mx-auto">
          <div className="flex flex-col h-screen">
            <main className="flex-grow">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
          </div>
        </div>
      </body>
    </>
  )
}
