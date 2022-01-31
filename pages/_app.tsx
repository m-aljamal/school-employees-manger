import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "src/components/AppLayout";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      )}
    </>
  );
}

export default MyApp;
