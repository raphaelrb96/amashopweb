'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import UserProvider from '../../context/userContext';
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
          
          <title>Escova Alisadora</title>
          <meta property="og:title" content="Escova Alisadora 3 em 1"></meta>
          <meta property="og:description" content="Não deixe para depois a chance de ter um cabelo deslumbrante com facilidade. Aproveite nossa oferta exclusiva e descubra a revolução que a Escova Alisadora pode trazer para o seu visual. Compre agora e veja a transformação capilar com seus próprios olhos!"></meta>
          <meta property="og:url" content="https://amashops.com.br/escova-alisadora"></meta>
          <meta property="product:brand" content="Amashop"></meta>
          <meta property="og:image" content="https://scontent.fmao1-1.fna.fbcdn.net/v/t45.5328-4/370540653_6521119644669234_1792359363203849578_n.png?stp=c0.0.640.640a_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=c66aae&_nc_eui2=AeHUFWWdML5lKHCAddX8e8vGWe0M5c9y3tFZ7Qzlz3Le0dPX6-nlv8T0tcWu_JK7iDY_k19bjiIMmJcOkT89ABwV&_nc_ohc=NRX5fLDOA58AX9U8uO-&_nc_ht=scontent.fmao1-1.fna&oh=00_AfAVpRhBgg6d9K5GF3HDo74Qs4XU72vw-WjlWbtTB8ddlA&oe=655BF563"></meta>
          <meta property="product:availability" content="in stock"></meta>
          <meta property="product:condition" content="new"></meta>
          <meta property="product:price:amount" content="97.90"></meta>
          <meta property="product:price:currency" content="BRL"></meta>
          <meta property="product:retailer_item_id" content="escova-alisadora"></meta>
          <meta property="product:item_group_id" content="salao-beleza"></meta>
          
        </head>
        <body>
          <UserProvider>
            {children}
          </UserProvider>
        </body>
      </html>
    
  )
}
