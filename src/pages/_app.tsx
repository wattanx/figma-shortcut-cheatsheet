import { ChakraProvider } from '@chakra-ui/react';
import { usePageView } from '@hooks';
import { config } from '@site.config';

import theme from '../theme';
import { AppProps } from 'next/app';
import { PageSEO } from '@components/PageSEO';
import { SiteHeader } from '@components/SiteHeader';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <PageSEO
        title={config.siteMeta.title}
        description={config.siteMeta.description}
        path="/"
        noTitleTemplate={true}
      />
      <ChakraProvider resetCSS theme={theme}>
        <SiteHeader />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
