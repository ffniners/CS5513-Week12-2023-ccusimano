/*import '../styles/globals.css'
import '../styles/bootstrap.min.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
*/

import '../styles/bootstrap.min.css';

import '../styles/globals.css';



function MyApp( { Component, pageProps } ) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;