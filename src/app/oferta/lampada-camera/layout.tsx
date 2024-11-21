'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import UserProvider from '../../../context/userContext';
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
          
          <title>Lampada Câmera</title>
          <meta property="og:title" content="Lampada Câmera 360°"></meta>
          <meta property="og:description" content="Mantenha sua casa protegida o dia inteiro e gastando pouco. A Lampada Câmera de Segurança Inteligente possui rotação de 360 graus que permite ampla visão e controle via celular, facilitando o acesso a qualquer hora ao sistema de monitoramento da sua propriedade, mesmo estando longe!"></meta>
          <meta property="og:url" content="https://amashops.com.br/lampada-camera"></meta>
          <meta property="product:brand" content="Amashop"></meta>
          <meta property="og:image" content="https://z-p3-scontent.fpll2-1.fna.fbcdn.net/v/t45.5328-4/453965827_7850979135020705_6051958032853719725_n.png?_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeFfXRaCa2DjKiVBu2x5xd4Hct5l8vnjUBpy3mXy-eNQGuOFznlKysAw85xIosiNARuQMZeN0_cOmQmdUuc9Zfgs&_nc_ohc=MI6QrSvlKBIQ7kNvgETbsyW&_nc_ht=z-p3-scontent.fpll2-1.fna&gid=AqjdOMB50S2ocIOWkuUD40b&oh=00_AYBsfhBqDwqIGClI-is9hDW7aEEYl7tWSMA7u8T2ye1qgg&oe=66B1DC1A"></meta>
          <meta property="product:availability" content="in stock"></meta>
          <meta property="product:condition" content="new"></meta>
          <meta property="product:price:amount" content="119.90"></meta>
          <meta property="product:price:currency" content="BRL"></meta>
          <meta property="product:retailer_item_id" content="t1eofqhm1o"></meta>
          <meta property="product:item_group_id" content="ls7mi3is96"></meta>
          
        </head>
        <body>
          <UserProvider>
            {children}
          </UserProvider>
        </body>
      </html>
    
  )
}
