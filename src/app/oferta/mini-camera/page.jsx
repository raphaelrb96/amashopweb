'use client'

import { useEffect, useState } from 'react'
import GridProdutos from '../../../components/GridProdutos';
import { getProdutos } from '../../../fetchData/getProdutos';
import RootLayout from './layout';
import TesteTres from '../../../layouts/TesteTres';
import Script from 'next/script';
import { registerEvent } from '../../../fetchData/registerEvent';
import { Fab, Typography } from '@mui/material';
import { data_camera_a9 } from '../../../objects/example_camera_a9';

const obj = data_camera_a9;


export default function EscovaPage() {

  const [produtos, setProdutos] = useState(null);
  const [pixel, setPixel] = useState(undefined);



  return (
    <RootLayout>


      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RM7L7MGJF9" />

      <Script id="gtag">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-RM7L7MGJF9');
            gtag('config', 'AW-815086144');
            gtag('event', 'conversion', {'send_to': 'AW-815086144/y0ylCI_FydcYEMD01IQD'});

          `}
      </Script>


      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 3567412100159486);
              fbq('init', 625741005706556);

              fbq('track', 'PageView');
              fbq('track', 'ViewContent', { content_ids: [''], content_type: 'product'});

            `,
        }}
      />



      <TesteTres object={obj} />


    </RootLayout>
  );

}
