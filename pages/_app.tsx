import Head from 'next/head';
import type { AppProps } from 'next/app';
import AuthProvider from '../context/Auth';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Linked-todo</title>
        <meta name="description" content="Linked-todo" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
