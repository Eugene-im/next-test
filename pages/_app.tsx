import { StateProvider } from "@/context/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("🚀 ~ file: _app.tsx:6 ~ App ~ Component:", Component)
  console.log("🚀 ~ file: _app.tsx:6 ~ App ~ pageProps:", pageProps);
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}