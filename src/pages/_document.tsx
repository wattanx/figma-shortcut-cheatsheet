import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { GA_TRACKING_ID } from '@framework';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('set', 'linker', {
                'domains': ['portfolio-git-crossdomain-test-wattanx.vercel.app']
              })
            `,
            }}
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
