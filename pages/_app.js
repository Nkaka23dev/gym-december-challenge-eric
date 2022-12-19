import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout'
import localFont from "@next/font/local";
import '../styles/globals.css'
import NavBar from '../components/layout/NavBar';

const fontName = localFont({
  src: "../public/assets/fonts/roboto-v29-latin-regular.woff2",
})

export default function App({ Component, pageProps }) {
  return <Layout>
    <main className={fontName.className} >
      <NavBar/>
      <Component {...pageProps} />
      <Footer />
  </main>
  </Layout>
}

