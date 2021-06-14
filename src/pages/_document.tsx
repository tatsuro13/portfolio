import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../components/utils/theme';
import { existsGaId, GA_ID } from '../lib/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          {/* Google Analytics */}
          {existsGaId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta
            name="description"
            content="フロントエンドやデザイン・ディレクションも担当しているSixth Project 13のポートフォリオになります。"
          />

          <meta itemProp="name" content="Sixth Project 13's Portfolio" />
          <meta
            itemProp="description"
            content="フロントエンドやデザイン・ディレクションも担当しているSixth Project 13のポートフォリオになります。"
          />
          <meta
            itemProp="image"
            content="https://portfolio-seven-sandy.vercel.app/ogimage.jpg"
          />

          <meta
            property="og:url"
            content="https://portfolio-seven-sandy.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sixth Project 13's Portfolio" />
          <meta
            property="og:description"
            content="フロントエンドやデザイン・ディレクションも担当しているSixth Project 13のポートフォリオになります。"
          />
          <meta
            property="og:image"
            content="https://portfolio-seven-sandy.vercel.app/ogimage.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Sixth Project 13's Portfolio" />
          <meta
            name="twitter:description"
            content="フロントエンドやデザイン・ディレクションも担当しているSixth Project 13のポートフォリオになります。"
          />
          <meta
            name="twitter:image"
            content="https://portfolio-seven-sandy.vercel.app/ogimage.jpg"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
