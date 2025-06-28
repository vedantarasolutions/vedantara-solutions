// src/pages/_app.js

import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="rao6Lr_XKlwYAPYn4Dhuvj5fAaveKZxB1kr1da5Iusk" />
                <link rel="icon" href="/favicon.ico" />
                <title>Vedantara Solutions</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
