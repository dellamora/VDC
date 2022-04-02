/* eslint-disable @typescript-eslint/no-unused-vars */
import type { AppProps } from "next/app";
// import { useRouter } from "next/router";

import { AuthProvider } from "../common/libs/firebase/auth";
import Header from "../common/components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <AuthProvider>
        {/* Insira algo aqui */}

        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
