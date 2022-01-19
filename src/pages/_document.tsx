import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            integrity="undefined"
            crossOrigin="anonymous"
          ></link>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />{' '}
        </Head>
        <body>
          <Main></Main>
          <script>var Alert = ReactBootstrap.Alert;</script>
          <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
          <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}
