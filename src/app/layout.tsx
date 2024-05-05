import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: 'Netflix',
  description: 'Movie catalog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/img/Netflix_2015_N_logo.svg.png' sizes='10px' />
      </head>
      <body className="h-full overflow-x-hidden relative z-0">
        <Header />
        <main className='main'>
        {children}
        </main>
      </body>
    </html>
  )
}
