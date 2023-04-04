import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:400,500,700&display=optional"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=optional"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
