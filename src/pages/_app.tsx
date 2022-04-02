/* eslint-disable @typescript-eslint/no-unused-vars */
import type { AppProps } from "next/app";
import BaseLayout from "../common/layout/baseLayout";
// import { useRouter } from "next/router";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
