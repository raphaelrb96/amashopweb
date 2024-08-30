'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import UserProvider from '../../../context/userContext';
import { AppProps } from 'next/app';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
      <html>
        <head>
          
          <title>Game Stick</title>

          <meta property="og:title" content="Game Stick"></meta>
          <meta property="og:url" content="https://amashops.com.br/gamestick"></meta>
          
          <meta property="product:brand" content="Amashop"></meta>
          <meta property="product:availability" content="in stock"></meta>
          <meta property="product:condition" content="new"></meta>
          <meta property="product:price:currency" content="BRL"></meta>
          
        </head>
        <body>
          <UserProvider>
            {children}
          </UserProvider>
        </body>
      </html>
    
  )
}