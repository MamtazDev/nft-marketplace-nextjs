import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Main from "@/layouts/Main";

export default function App({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}
