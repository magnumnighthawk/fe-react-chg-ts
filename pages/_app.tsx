import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from 'components/footer';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles, { PageWrapper, StyledBody } from 'lib/global-styles';
import theme from 'lib/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Application form</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Submit an application with our banks"
        ></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <PageWrapper>
          <StyledBody>
            <Component {...pageProps} />
          </StyledBody>
          <Footer />
        </PageWrapper>
      </ThemeProvider>
    </React.Fragment>
  );
}
