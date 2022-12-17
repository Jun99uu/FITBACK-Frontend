import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}
