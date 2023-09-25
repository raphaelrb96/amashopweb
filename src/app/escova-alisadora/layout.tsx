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
          
          <link rel="icon" href="/favicon.ico" />
          <meta name="facebook-domain-verification" content="h2rfx1t31eptpcb2tf5m586f0nnkpl" />
          <meta name="google-site-verification" content="lQ_41-YA1ewDsfnQ_5lQkY1OU57WmnIKmNVPFdOkCAo" />
          <title>Escova Alisadora</title>
          <meta property="og:title" content="Escova Alisadora 3 em 1"></meta>
          <meta property="og:description" content="Não deixe para depois a chance de ter um cabelo deslumbrante com facilidade. Aproveite nossa oferta exclusiva e descubra a revolução que a Escova Alisadora pode trazer para o seu visual. Compre agora e veja a transformação capilar com seus próprios olhos!"></meta>
          <meta property="og:url" content="https://amashops.com.br/escova-alisadora"></meta>
          <meta property="product:brand" content="Amashop"></meta>
          <meta property="og:image" content="https://scontent.fmao1-1.fna.fbcdn.net/v/t45.5328-4/370771914_6699257290124538_3158911621696317437_n.png?stp=dst-png_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=1a0e84&_nc_eui2=AeHUQbtrJZ3YEI81OxRpV0mTNROAbGPAPcY1E4BsY8A9xtYVuwRoHvmSI78MLByhilrwI0cNiZnZW7VpG-5DzTxM&_nc_ohc=tKQu5VFZ_1gAX_MIAiI&_nc_ht=scontent.fmao1-1.fna&oh=00_AfBfOmfBNYBV-HK1zt7TchHUuX34FhQoqYgKm9ttKAyJgw&oe=64F1D230"></meta>
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
