'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import UserProvider from '../../../context/userContext';
import { AppProps } from 'next/app';

export const metadata: Metadata = {
  title: 'Game Stick',
  description: 'Coleção de 10 mil jogos retro em resolução 4k',
}

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
          <meta property="og:url" content="https://amashops.com.br/oferta/gamestick"></meta>

          <meta property="product:brand" content="Amashop"></meta>
          <meta property="product:availability" content="in stock"></meta>
          <meta property="product:condition" content="new"></meta>
          <meta property="product:price:currency" content="BRL"></meta>

          <meta property="og:description" content="O Video Game Stick 4k é um produto incrível que combina nostalgia com tecnologia moderna. Este dispositivo compacto e portátil traz uma coleção de 10 mil jogos retro em resolução 4k, oferecendo uma experiência de jogo imersiva e de alta qualidade."></meta>
          <meta property="og:image" content="https://z-p3-scontent.fpll2-1.fna.fbcdn.net/v/t45.5328-4/459533853_1037995554189731_1663621435082924842_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=657aed&_nc_eui2=AeFhxpehxXbhxcvMYoFQ4Lx9e6wIKabRNaF7rAgpptE1oWGN_fOtSgX3LEnfXk_9t2s4_M8bmof3Finn4pLbwbGW&_nc_ohc=9eqT3EWRE9kQ7kNvgE46-C8&_nc_ad=z-m&_nc_cid=1123&_nc_ht=z-p3-scontent.fpll2-1.fna&_nc_gid=Ay8ct4ac14KlyL71FqhGg_7&oh=00_AYBlgqEUHPTEkz9czvHX2HfLC9Nse6f_X6IizWiUPL1vxA&oe=66E8D055"></meta>
          <meta property="product:price:amount" content="179.90"></meta>
          <meta property="product:retailer_item_id" content="game-stick-4k"></meta>
          <meta property="product:item_group_id" content="1x2aqirdh7"></meta>

          
        </head>
        <body>
          <UserProvider>
            {children}
          </UserProvider>
        </body>
      </html>
    
  )
}
