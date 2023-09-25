'use client'

import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import "../Assets/css/icons.css";
import "../Assets/css/global.css";
import "../Assets/css/pages.css";
import "../index.scss";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import UserProvider from '../context/userContext';
import { AppProps } from 'next/app';



export const metadata: Metadata = {
  title: 'Amashop',
  description: 'Site de varejo online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
  
}) {


  return (
      <html>
        <head>
          
          <link rel="icon" href="/favicon.ico" />
          <meta name="facebook-domain-verification" content="h2rfx1t31eptpcb2tf5m586f0nnkpl" />
          <meta name="google-site-verification" content="lQ_41-YA1ewDsfnQ_5lQkY1OU57WmnIKmNVPFdOkCAo" />
          
        </head>
        <body>
          <UserProvider>
            {children}
          </UserProvider>
        </body>
      </html>
    
  )
}
